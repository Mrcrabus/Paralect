import axios from "axios";
import styles from "./Components.module.css";
import followers from "../assets/followers.png";
import following from "../assets/following.png";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = (props) => {
  const { pageNumber } = useParams();
  const history = useHistory();
  const [profile, setProfile] = useState();
  const [repos, setRepos] = useState();
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(+pageNumber || 1);

  const { login } = useParams();
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        if (res.status === 200) {
          const {
            avatar_url,
            login,
            name,
            followers,
            following,
            public_repos,
          } = res.data;
          setPageCount(Math.ceil(res.data.public_repos / 4));
          setProfile({
            avatar_url,
            login,
            name,
            followers,
            following,
            public_repos,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [login]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${login}/repos`, {
        params: {
          per_page: 4,
          page: currentPage,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setRepos(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [login, currentPage]);

  const nextPage = () => {
    if (currentPage !== pageCount) {
      history.push(`/${login}/${currentPage + 1}`);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      history.push(`/${login}/${currentPage - 1}`);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.profile}>
      {profile && repos ? (
        <div className={`${styles.profile__inner} ${styles.container}`}>
          <div className={styles.profile__info}>
            <img
              src={profile.avatar_url}
              alt="avatar"
              className={styles.profile__avatar}
            />
            <span className={styles.profile__name}>{profile.name}</span>
            <Link
              to={{ pathname: `https://github.com/${login}` }}
              target="_blank"
              className={styles.profile__login}
            >
              {profile.login}
            </Link>
            <div className={styles.profile__counts}>
              <div className={styles.profile__followers}>
                <img src={followers} alt="followers" />
                <span>{profile.followers} followers</span>
              </div>
              <div className={styles.profile__following}>
                <img src={following} alt="following" />
                <span>{profile.following} following</span>
              </div>
            </div>
          </div>
          <div className={styles.profile__repositories}>
            <span className={styles.repositories__count}>
              Repositories ({profile.public_repos})
            </span>
            <div className={styles.repositories__list}>
              {repos.map((item, i) => {
                return (
                  <div className={styles.repository} key={i}>
                    <Link
                      to={{
                        pathname: `https://github.com/${login}/${item.name}`,
                      }}
                      target="_blank"
                      className={styles.repository__name}
                    >
                      {item.name}
                    </Link>
                    <span className={styles.repository__description}>
                      {item.description}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={styles.pagination}>
              <span className={styles.pagination__count}>
                {currentPage * 4 - 3}-
                {currentPage === pageCount
                  ? profile.public_repos
                  : currentPage * 4}{" "}
                of {profile.public_repos} items
              </span>
              <div className={styles.pagination__items}>
                <img
                  src={arrowLeft}
                  alt="previous page"
                  className={styles.pagination__arrow}
                  onClick={prevPage}
                />

                <div className={styles.pagination__numbers}>
                  {[...Array(pageCount)].map((item, i, items) => {
                    if (i > 2 && i !== items.length - 1) {
                      if (i === items.length - 2)
                        return (
                          <span key={i} className={styles.pagination__number}>
                            ...
                          </span>
                        );
                      return "";
                    }

                    return (
                      <Link
                        to={`/${login}/${i + 1}`}
                        key={i}
                        className={
                          currentPage === i + 1
                            ? `${styles.pagination__number} ${styles.active}`
                            : `${styles.pagination__number}`
                        }
                        onClick={() => setCurrentPage(i + 1)}
                      >
                        {i + 1}
                      </Link>
                    );
                  })}
                </div>

                <img
                  src={arrowRight}
                  alt="next page"
                  className={styles.pagination__arrow}
                  onClick={nextPage}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Profile;
