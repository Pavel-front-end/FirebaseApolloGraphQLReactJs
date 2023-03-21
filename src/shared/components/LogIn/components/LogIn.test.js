import { render, cleanup } from "@testing-library/react"
import * as React from "react"
import ButtonLogIn from "./ButtonLogIn";
import { AuthContextProvider } from "../../../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

describe("firebase LigIn", () => {
    it('should login with correct credential', async() => {
        render(<AuthContextProvider><BrowserRouter><ButtonLogIn password="123QAZwsx!!!"/></BrowserRouter></AuthContextProvider>);
        cleanup();
        const auth = getAuth()
            const user = await signInWithEmailAndPassword(auth, 'bob.mail@mailinator.com', '123QAZwsx!!!')

        expect(user.user).toBeTruthy()

    })
    it('should login throw error with wrong credential', async() => {
        const auth = getAuth()
        let error = '';
            try {
                await signInWithEmailAndPassword(auth, 'error@error.com', '000!!aaaQQ')
            } catch (err) {
                error = err.message;
            }

        expect(error).toEqual('Firebase: Error (auth/user-not-found).')

    })
})