import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './fridge.module.css';

const Fridge = ({ authService }) => {
    const [items, setItems] = useState({
        '1': {
            id: '1',
            name: 'Apple',
            location:'냉장',
            datepurchased: '2021-07-15',
            expirationdate: '2021-07-22',
            memo: 'apple pie',
            fileName: 'apple',
            fileURL: null,
        },
        '2':{
            id: '2',
            name: 'Milk',
            location:'냉동',
            datepurchased: '2021-07-12',
            expirationdate: '2021-07-18',
            memo: 'milk',
            fileName: 'milk',
            fileURL: 'milk.png'
        },
        '3': {
            id: '3',
            name: 'Abocado',
            location:'냉장',
            datepurchased: '2021-07-13',
            expirationdate: '2021-07-23',
            memo: 'salad',
            fileName: 'avocado',
            fileURL: 'avocado.png'
        }
    });
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if (!user) {
                history.push('/');
            }
        });
    });

    const createOrUpdateItem = item => {
        setItems(items => {
            const updated = { ...items };
            updated[item.id] = item;
            return updated;
        });
    };
    const deleteItem = item => {
        setItems(items => {
            const updated = { ...items };
            delete updated[item.id];
            return updated;
        });
};
    return (
        <section className={styles.fridge}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    items={items}
                    addItem={createOrUpdateItem}
                    updateItem={createOrUpdateItem}
                    deleteItem={deleteItem}
                />
                <Preview items={items}/>
            </div>
            <Footer />
        </section>
    );
};

export default Fridge;