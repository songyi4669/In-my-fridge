import React from 'react';
import Item from '../item/item';
import styles from './preview.module.css';

const Preview = ({items}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>냉장고 속</h1>
        <ul className={styles.items}>
           {Object.keys(items).map(key => (
               <Item key={key} item={items[key]} />
            ))}
        </ul>
    </section>
);

export default Preview;