import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocument } from "../../utils/firebase/firebase.utils.js";
import FormInput from "../../components/form-input/form-input.component.js";
import Button from "../button/button.component.js";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) { alert("passwords do not match"); return }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocument(user, { displayName });
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("cannot create user, email already in use");
            }
            console.log("error with creating a new user " + error);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Dont Have an Account?</h2>
            <span>create a new account</span>
            <form onSubmit={(event) => handleSubmit(event)}>
                <FormInput label="Display Name" onChange={handleChange} required type="text" name="displayName" value={displayName} />
                <FormInput label="Email" onChange={handleChange} required type="email" name="email" value={email} />
                <FormInput label="Password" onChange={handleChange} required type="password" name="password" value={password} />
                <FormInput label="Confirm Password" onChange={handleChange} required type="password" name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm;