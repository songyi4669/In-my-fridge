import React, { memo, useRef, useState } from 'react';
import styles from './item_add_form.module.css';
import Button from '../button/button';

const ItemAddForm = memo(({ FileInput, onAdd }) => {
    const formRef = useRef();
    const nameRef=useRef();
    const locationRef=useRef();
    const datepurchasedRef=useRef();
    const expirationdateRef=useRef();
    const memoRef = useRef();
    const [file, setFile] = useState({ fileName: null, fileURL: null });
    
    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const item = {
            id: Date.now(),
            name: nameRef.current.value || '',
            location: locationRef.current.value,
            datepurchased: datepurchasedRef.current.value || '',
            expirationdate: expirationdateRef.current.value || '',
            memo: memoRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({ fileName: null, fileURL: null });
        onAdd(item);
    };
    return (
        <form ref={formRef} className={styles.form}>
            <input
                ref={nameRef}
                className={styles.input}
                type="text"
                name="name"
                placeholder="이름"
            />
            <select
                ref={locationRef}
                className={styles.select}
                name="location"
                placeholder="저장소"
            >
                <option placeholder="냉장" value="refrigerated">냉장</option>
                <option placeholder="냉동" value="frozen">냉동</option>
            </select>
            <input
                ref={datepurchasedRef}
                className={styles.input}
                type="text" 
                name="datepurchased"
                placeholder="구입 날짜"
            />
            <input
                ref={expirationdateRef}
                className={styles.input}
                type="text"
                name="expirationdate"
                placeholder="유통기한"
            />
            <textarea
                ref={memoRef}
                className={styles.textarea}
                name="memo"
                placeholder="메모"
            >
                </textarea>
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name='Add' onClick={onSubmit} />
        </form>
    )
});

export default ItemAddForm;