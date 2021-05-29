import React from 'react';
import s from "../Header.module.css"


const Search = (props) => {

    let textInput = React.createRef();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            props.setSearch(textInput.current.value)

            console.log(textInput.current.value)
        }
    }


    return (
        <div className={s.search}>
            <input ref={textInput} onKeyDown={handleKeyDown} type="text"/>
        </div>
    )

}

export default Search;