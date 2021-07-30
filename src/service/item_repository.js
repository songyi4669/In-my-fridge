import { firebaseDatabase } from "./firebase";

class ItemRepository{
    syncItems(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/items`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
    saveItem(userId, item) {
        firebaseDatabase.ref(`${userId}/items/${item.id}`).set(item);
    }

    removeItem(userId, item) {
        firebaseDatabase.ref(`${userId}/items/${item.id}`).remove();
    }
}

export default ItemRepository;