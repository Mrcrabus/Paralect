import styles from "./Components.module.css";
import logo from "../assets/Vector.png";
import search from "../assets/search.png";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Header = (props) => {
  const history = useHistory();
  const [profileName, setProfileName] = useState("");
  const findProfile = (e) => {
    if (e.key === "Enter") {
      history.push(`/${profileName}`);
      console.log(profileName);
      setProfileName("");
    }
  };
  return (
    <div className={styles.header}>
      <div className={`${styles.container} ${styles.header__inner}`}>
        <Link to="/">
          <img src={logo} alt="logo" className={styles.header__logo} />
        </Link>

        <div className={styles.header__search}>
          <img src={search} alt="search" className={styles.search__icon} />
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            onKeyUp={(e) => findProfile(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
