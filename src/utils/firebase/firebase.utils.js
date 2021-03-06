import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    doc,
    getDoc,
    getFirestore,
    setDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_LWtlS5BFg-SOyV9IBL5yzmDdyEM2Z7Q",
    authDomain: "clothing-ecommerce-51798.firebaseapp.com",
    projectId: "clothing-ecommerce-51798",
    storageBucket: "clothing-ecommerce-51798.appspot.com",
    messagingSenderId: "891174785838",
    appId: "1:891174785838:web:7851da45c4e0450fe860bf"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sets up google authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInfo) => {
    if (!userAuth) return;
    /*get the document from firestore wuth this users uid, acts as a pointer to a place in the database */
    let userDocRef = doc(db, "users", userAuth.uid);
    //grabs a snapshot of the document inside the database.
    let userSnapShot = await getDoc(userDocRef);

    // if the document is empty, create a new document.
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log("error creating the user " + error);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

// runs when a user signs in or out
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);