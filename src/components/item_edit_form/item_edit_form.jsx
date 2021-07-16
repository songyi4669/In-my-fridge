import React from 'react';
import styles from './item_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const ItemEditForm = ({ item }) => {
     const {
        name,
        location,
        datepurchased,
        expirationdate,
        memo,
        fileName,
        fileURL,
    } = item;
    const onSubmit = () => { };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} />
            <select className={styles.select} name="location" value={location}>
                <option value="refrigerated">냉장</option>
                <option value="frozen">냉동</option>
            </select>
            <input className={styles.input} type="text" name="datepurchased" value={datepurchased} />
            <input className={styles.input} type="text" name="expirationdate" value={expirationdate} />
            <textarea className={styles.textarea} name="memo" value={memo}></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    )
};

export default ItemEditForm;