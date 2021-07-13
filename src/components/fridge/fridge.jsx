import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './fridge.module.css';

const Fridge = ({ authService }) => {
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
            <Header onLogout={onLogout}/>
            <Footer />
        </section>
    );
};

export default Fridge;