import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => (
    <footer className={styles.footer}>
        <p className={styles.title}>An app that allows you to take notes <br />
            on the contents of the refrigerator contents.</p>
    </footer>
));
export default Footer;