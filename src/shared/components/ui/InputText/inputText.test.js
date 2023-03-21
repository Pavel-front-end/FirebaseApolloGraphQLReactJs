import { render } from "@testing-library/react"
import * as React from "react"
import InputText from "."
import { validatorText } from "../../../../utilities"

describe("input email", () => {
    it('valid email check', () => {
        render(<InputText />);

        const validateText = (email) => {
            if (new RegExp(validatorText).test(email)) {
                return true
            }
            return false
        }

        expect(validateText('Pavlo')).toBe(true)
        expect(validateText('pavlo')).toBe(true)

        expect(validateText('p')).toBe(false)
        expect(validateText('1P')).toBe(false)
        expect(validateText('123')).toBe(false)
    })
})