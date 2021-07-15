import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './fridge.module.css';

const Fridge = ({ authService }) => {
    const [items, setItems] = useState([
        {
            id: '1',
            name: 'Apple',
            location:'냉장',
            datepurchased: '2021-07-15',
            expirationdate: '2021-07-22',
            memo: 'apple pie',
            fileName: 'apple',
            fileURL: null,
        },
        {
            id: '2',
            name: 'Milk',
            location:'냉동',
            datepurchased: '2021-07-12',
            expirationdate: '2021-07-18',
            memo: 'milk',
            fileName: 'milk',
            fileURL: 'milk.png'
        },
        {
            id: '3',
            name: 'Abocado',
            location:'냉장',
            datepurchased: '2021-07-13',
            expirationdate: '2021-07-23',
            memo: 'salad',
            fileName: 'avocado',
            fileURL: 'avocado.png'
        }
    ]);
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
    return (
        <section className={styles.fridge}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor items={items}/>
                <Preview items={items}/>
            </div>
            <Footer />
        </section>
    );
};

export default Fridge;