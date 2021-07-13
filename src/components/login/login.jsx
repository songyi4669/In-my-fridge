import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    const history = useHistory();
    const goToFridge = userId => {
        history.push({
            pathname: '/fridge',
            state: {id: userId},
        });
    };
    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => goToFridge(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToFridge(user.uid);
        });
    });

    return (
        <section className={styles.login}>
            <Header />
            <section>
                <h1>로그인</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                      <button className={styles.button} onClick={onLogin}>Google</button>  
                    </li>
                    <li>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    )
}

export default Login;