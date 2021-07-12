import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => (
    <header className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>로그아웃</button>}
        <img className={styles.logo} src="/images/logo.png" alt="로고" />
        <h1 className={styles.title}>What's in my fridge</h1>
    </header>
);

export default Header;