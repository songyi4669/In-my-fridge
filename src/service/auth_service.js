import {firebaseAuth, gitgubProvider, googleProvider} from "./firebase";

class AuthService{
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        firebaseAuth.signOut();
    }
    
    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        });
    }

    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return gitgubProvider;
            default:
                throw new Error(`not supported Provider: ${providerName}`);
        }
    }
}

export default AuthService;