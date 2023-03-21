import { render } from "@testing-library/react"
import * as React from "react"
import InputEmail from "."
import { validatorEmail } from "../../../../utilities"

describe("input email", () => {
    it('valid email check', () => {
        render(<InputEmail />);

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