import { Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { IAddress } from '../../../../../types/IUserByAuthId'
import InputAddress from '../../../ui/InputAddress'

interface Props {
    handleErrorAddress: (type: string, payload: boolean) => void
    handleUpdateAddress: (type: string, payload: string) => void
    address: IAddress
    isErrorAddress: {
        street: boolean;
        apartment: boolean;
        city: boolean;
        zipCode: boolean;
        state: boolean;
        country: boolean;
    }
}

const UpdateAddress = ({
    isErrorAddress,
    handleErrorAddress,
    handleUpdateAddress,
    address
} : Props) => {
  return (
    <Stack>
        <Typography variant='h4' sx={{marginY: '1rem'}} >Address:</Typography>
        <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.street}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid street"}
        labelText={"Street"}
        text={address.street}
        validLength={1} />
    </Stack>
    <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.apartment}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid apartment"}
        labelText={"Apartment"}
        text={address.apartment}
        validLength={0} />
    </Stack>
    <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.city}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid city"}
        labelText={"City"}
        text={address.city}
        validLength={1} />
    </Stack>
    <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.zipCode}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid zipCode"}
        labelText={"zipCode"}
        text={address.zipCode}
        validLength={4} />
    </Stack>
    <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.state}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid state"}
        labelText={"State"}
        text={address.state}
        validLength={1} />
    </Stack>
    <Stack sx={{width: '100%', maxWidth: '350px', marginY: '1rem'}}>
        <InputAddress 
        isErrorText={isErrorAddress.country}
        handleUpdateAddress={handleUpdateAddress}
        handleErrorAddress={handleErrorAddress}
        errorText={"invalid country"}
        labelText={"Country"}
        text={address.country}
        validLength={1} />
    </Stack>
    </Stack>
  )
}

export default UpdateAddress
