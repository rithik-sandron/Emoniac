'use client';

import styles from '../page.module.css'
export default function Search() {

    function handleSearch(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.value)
    }

    return (
        <input className={styles.search} type='text' placeholder='Search emoji'
            onInput={(e) => handleSearch(e)} />
    )

}
