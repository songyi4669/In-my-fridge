import firebaseApp from "./firebase";

class ItemRepository{
    saveItem(userId, item) {
        firebaseApp.database().ref(`${userId}/items/${item.id}`).set(item);
    }

    removeItem(userId, item) {
        firebaseApp.database().ref(`${userId}/items/${item.id}`).remove();
    }
}

export default ItemRepository;