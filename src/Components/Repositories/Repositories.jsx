import style from './Repositories.module.css'
import * as axios from "axios";
import {useEffect, useState} from "react";

const Repositories = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {


        axios.get(`https://api.github.com/users/${props.search}/repos`)
            .then(response => {
                setItems(response.data);
            });
    }, [props.search])

    return <div>
        <h1>Repositories</h1>
        {
            items.map(u => <div key={u.id}>
                <span className={style.rep}>
                    <div className={style.name}>
                        {u.name}
                    </div>
                    <div className={style.description}>
                        {u.description}
                    </div>
                </span>
            </div>)
        }
    </div>
}

export default Repositories;