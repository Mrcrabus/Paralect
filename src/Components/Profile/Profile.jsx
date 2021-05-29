import React, {useEffect, useState} from "react";
import img from '../../assets/images/github.png'
import style from "./Profile.module.css"
import * as axios from "axios";

const Profile = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {


        axios.get(`https://api.github.com/users/${props.search}`)
            .then(response => {
                setItems(response.data);
            });
    }, [props.search])

    return <div className={style.profile}>
        {
            <div key={items.id}>
                <span>
                    <div>
                        <img className={style.img} src={items.avatar_url} alt="..."/>
                    </div>
                    <div>
                        {items.login}
                    </div>
                    <div>
                        {items.name}
                    </div>
                </span>
            </div>
        }
        {/*<img className={style.img} src={img} alt="avatar"/>*/}
    </div>

}

export default Profile;