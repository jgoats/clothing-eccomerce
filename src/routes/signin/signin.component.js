import React from "react";
import {
    signInWithGooglePopup,
    createUserDocument
} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.js";

export default function SignIn() {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocument(user);
    }

    return (
        <div>
            <p>Sign in Page</p>
            <button onClick={logGoogleUser}>Sign In With Google</button>
            <SignUpForm />
        </div>
    )
}