import React, { memo }from 'react';
import styles from './item.module.css';


const DEFAULT_IMAGE = '/images/default_logo.jpg';

const Item = memo(({ item }) => {
    const {
        name,
        location,
        datepurchased,
        expirationdate,
        memo,
        fileURL,
    } = item;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.item} ${getLocation(location)}`}>
            <img className={styles.image} src={url} alt="아이템" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.datepurchased}>{datepurchased}</p>
                <p className={styles.expirationdate}>{expirationdate}</p>
                <p className={styles.memo}>{memo}</p>
            </div>
        </li>
    );
});

function getLocation(location) {
    switch (location) {
        case '냉장':
            return styles.refrigerated;
        case '냉동':
            return styles.frozen;
        default:
            throw new Error(`unknown location: ${location}`);
    }
}
export default Item;