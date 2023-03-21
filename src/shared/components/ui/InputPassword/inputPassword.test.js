import { render } from "@testing-library/react"
import * as React from "react"
import InputPassword from "."
import { validatorPassword } from "../../../../utilities"

describe("input password", () => {
    it('validation password', () => {
        render(<InputPassword />);

        const validatePassword = (password) => {
            if (new RegExp(validatorPassword).test(password)) {
                return true
            }
            return false
        }

        expect(validatePassword('Test1234')).toBe(true)
        expect(validatePassword('tesT123!')).toBe(true)

        expect(validatePassword('test')).toBe(false)
        expect(validatePassword('longTestAnyNumber')).toBe(false)
        expect(validatePassword('1234567890')).toBe(false)
    })
})