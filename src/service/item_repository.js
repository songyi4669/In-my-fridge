import firebaseApp from "./firebase";

class ItemRepository{
    syncItems(userId, onUpdate) {
        const ref = firebaseApp.database().ref(`${userId}/items`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
    saveItem(userId, item) {
        firebaseApp.database().ref(`${userId}/items/${item.id}`).set(item);
    }

    removeItem(userId, item) {
        firebaseApp.database().ref(`${userId}/items/${item.id}`).remove();
    }
}

export default ItemRepository;