export const validatorEmail = /^[-\w.+]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/

export const validatorPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

export const validatorText = /^[a-zA-Z]{2,20}$/

export const sliceAddress = (address: string | undefined) => address && `${address.slice(0, 6)}...${address.slice(-4)}`;

export const formatDate = (date: string | undefined) => date && new Date(date).toLocaleDateString('en-GB')

export const validatorUsername = /^[a-zA-Z]{3}[a-zA-Z0-9+-__\.]{3,26}$/