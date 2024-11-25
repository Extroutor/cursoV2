export const validateAddress = (address: string, setError: any, clearErrors: any) => {
    if ((address.length !== 42) || (!address.startsWith("0x"))) {
        // setErr({isError: true, message: 'Invalid address'})
        setError('address', {message: 'Invalid address'} )
        return
    }
    clearErrors('address')
}