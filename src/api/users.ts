const userFake = {
    name: 'Pavlo',
    
}

export const getUserProfileAuthId = async () => {
    try {
        if (process.env.MOCK_ENVIREMENT) {
                return userFake
        }
    } catch (error) {
        
    }
}