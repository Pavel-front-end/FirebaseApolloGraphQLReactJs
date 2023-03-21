import { render, cleanup } from "@testing-library/react"
import ButtonSignUp from "./ButtonSignUp";
import { AuthContextProvider } from "../../../../context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ApolloProviderWithFirebase } from "../../../features/ApolloProviderWithFirebase/ApolloProviderWithFirebase";
describe("firebase Sign Up", () => {
    it('should registration with correct credential', async() => {
        render(<AuthContextProvider><ApolloProviderWithFirebase><BrowserRouter><ButtonSignUp password="123QAZwsx!!!"/></BrowserRouter></ApolloProviderWithFirebase></AuthContextProvider>);
        cleanup();
        const num = (new Date().getMinutes() + new Date().getSeconds())
        const auth = getAuth()
        const user = await createUserWithEmailAndPassword(auth, `testnull${num}@test.com`, '123QAZwsx!!!')

        expect(user.user).toBeTruthy()
    })
    it('should registration throw error with wrong credential', async() => {
        const auth = getAuth()
        let error = '';
            try {
                await createUserWithEmailAndPassword(auth, 'test@test.com', '1234qwerQ')
            } catch (err) {
                error = err.message;
            }

        expect(error).toEqual('Firebase: Error (auth/email-already-in-use).')
    })
})