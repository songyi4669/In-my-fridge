import React from 'react';
import ItemAddForm from '../item_add_form/item_add_form';
import ItemEditForm from '../item_edit_form/item_edit_form';
import styles from './editor.module.css';

const Editor = ({items, addItem, updateItem, deleteItem}) => (
    <section className={styles.editor}>
        <h1 className={styles.title}>냉장고 채우기</h1>
        {Object.keys(items).map(key => (
            <ItemEditForm
                key={key}
                item={items[key]}
                updateItem={updateItem}
                deleteItem={deleteItem} />
        ))}
        <ItemAddForm onAdd={addItem}/>
    </section>
);

export default Editor;