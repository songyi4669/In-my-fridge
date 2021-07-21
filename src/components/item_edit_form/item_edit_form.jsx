import React, {useRef} from 'react';
import styles from './item_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const ItemEditForm = ({ item, updateItem, deleteItem }) => {
    const formRef = useRef();
    const nameRef=useRef();
    const locationRef=useRef();
    const datepurchasedRef=useRef();
    const expirationdateRef=useRef();
    const memoRef = useRef();

     const {
        name,
        location,
        datepurchased,
        expirationdate,
        memo,
        fileName,
        fileURL,
    } = item;

    const onChange = (event) => {
        if (event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateItem({
            ...item,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };
    const onSubmit = () => {
        deleteItem(item);
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input
                ref={nameRef}
                className={styles.input}
                type="text"
                name="name"
                value={name}
                onChange={onChange}
            />
            <select
                ref={locationRef}
                className={styles.select}
                name="location"
                value={location}
                onChange={onChange}
            >
                <option value="refrigerated">냉장</option>
                <option value="frozen">냉동</option>
            </select>
            <input
                ref={datepurchasedRef}
                className={styles.input}
                type="text"
                name="datepurchased"
                value={datepurchased}
                onChange={onChange}
            />
            <input
                ref={expirationdateRef}
                className={styles.input}
                type="text"
                name="expirationdate"
                value={expirationdate}
                onChange={onChange}
            />
            <textarea
                ref={memoRef}
                className={styles.textarea}
                name="memo"
                value={memo}
                onChange={onChange}
            >
                
                </textarea>
            <div className={styles.fileInput}>
                <ImageFileInput />
            </div>
            <Button name='Delete' onClick={onSubmit} />
        </form>
    )
};

export default ItemEditForm;