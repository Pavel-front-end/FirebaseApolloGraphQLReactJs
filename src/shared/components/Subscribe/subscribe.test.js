import { render } from "@testing-library/react"
import * as React from "react"
import Subscribe from "."
import { validatorEmail } from "../../../utilities"

describe("subscription in the footer", () => {
    it('valid email check', () => {
        render(<Subscribe />);

        const validateEmail = (email) => {
            if (new RegExp(validatorEmail).test(email)) {
                return true
            }
            return false
        }

        expect(validateEmail('email@email.com')).toBe(true)
        expect(validateEmail('john@doe.net')).toBe(true)

        expect(validateEmail('email')).toBe(false)
        expect(validateEmail('email@')).toBe(false)
        expect(validateEmail('email@email')).toBe(false)
    })
})