import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
import { createUserDocument } from "../../utils/firebase/firebase.utils.js";

export default function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
        console.log(userDocRef);
    }
    return (
        <div>
            <p>Sign in Page</p>
            <button onClick={logGoogleUser}>Sign In With Google</button>
        </div>
    )
}