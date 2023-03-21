import { IAddress } from "../../../../../types/IUserByAuthId";

interface IAddressError {
    street: boolean;
    apartment: boolean;
    city: boolean;
    zipCode: boolean;
    state: boolean;
    country: boolean;
}

export function reducerAddress(state: IAddress, action: { type: string; payload: string }) {

    const { type, payload } = action;
    switch (type) {
        case "street":
            return {
                ...state,
                [type]: payload
            };
        case "apartment":
            return {
                ...state,
                [type]: payload
            };
        case "city":
            return {
                ...state,
                [type]: payload
            };
        case "zipcode":
            return {
                ...state,
                zipCode: payload
            };
        case "state":
            return {
                ...state,
                [type]: payload
            };
        case "country":
            return {
                ...state,
                [type]: payload
            };
        default:
            return state;
    }
}

export function reducerError(state: IAddressError, action: { type: string; payload: boolean }) {
    const { type, payload } = action;
    switch (type) {
        case "street":
            return {
                ...state,
                [type]: payload
            };
        case "apartment":
            return {
                ...state,
                [type]: payload
            };
        case "city":
            return {
                ...state,
                [type]: payload
            };
        case "zipcode":
            return {
                ...state,
                zipCode: payload
            };
        case "state":
            return {
                ...state,
                [type]: payload
            };
        case "country":
            return {
                ...state,
                [type]: payload
            };
        default:
            return state;
    }
}