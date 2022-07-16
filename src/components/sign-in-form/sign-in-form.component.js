import React from "react";
import { useState } from "react";
import {
    createUserDocument,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils.js";
import FormInput from "../../components/form-input/form-input.component.js";
import Button from "../button/button.component.js";
import "./sign-in-form.styles.scss";


const defaultFormFields = {
    email: "",
    password: "",
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    // sign in with email and password
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            resetFormFields();
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);

        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert("incorrect password for email");
            }
            else if (error.code === "auth/user-not-found") {
                alert("email does not exist in database");
            }
            console.log("error with signing in a user " + error);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Already Have An Account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInput label="Email" onChange={handleChange} required type="email" name="email" value={email} />
                <FormInput label="Password" onChange={handleChange} required type="password" name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} type="button" buttonType="google">Google Sign In</Button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;