import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './fridge.module.css';

const Fridge = ({ FileInput, authService, itemRepository }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [items, setItems] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);
    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = itemRepository.syncItems(userId, items => {
            setItems(items);
        })
        return () => stopSync();
    }, [userId, itemRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/');
            }
        });
    }, [userId, authService, history]);

    const createOrUpdateItem = item => {
        setItems(items => {
            const updated = { ...items };
            updated[item.id] = item;
            return updated;
        });
        itemRepository.saveItem(userId, item);
    };
    const deleteItem = item => {
        setItems(items => {
            const updated = { ...items };
            delete updated[item.id];
            return updated;
        });
        itemRepository.removeItem(userId, item);
};
    return (
        <section className={styles.fridge}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor
                    FileInput={FileInput}
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