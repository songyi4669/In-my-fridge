import React from 'react';
import ItemEditForm from '../item_edit_form/item_edit_form';
import styles from './editor.module.css';

const Editor = ({items}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>냉장고 채우기</h1>
        {items.map(item => (
                <ItemEditForm item={item} />
            ))}
    </section>
);

export default Editor;