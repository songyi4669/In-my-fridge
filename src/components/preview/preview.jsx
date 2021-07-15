import React from 'react';
import Item from '../item/item';
import styles from './preview.module.css';

const Preview = ({items}) => (
    <section className={styles.preview}>
        <h1 className={styles.title}>냉장고 속</h1>
        <ul className={styles.items}>
           {items.map(item => (
              <Item item={item} />
            ))}
        </ul>
    </section>
);

export default Preview;