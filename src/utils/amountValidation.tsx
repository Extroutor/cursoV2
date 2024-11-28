// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const amountValidation = (value: string, setError: any, clearErrors: any) => {
    // if ((address.length !== 42) || (!address.startsWith("0x"))) {
    //     // setErr({isError: true, message: 'Invalid address'})
    //     setError('amount', {message: 'Invalid amount'} )
    //     return
    // }
    const regex = /^\d+(\.\d+)?$/
    if (!regex.test(value)) {
        setError('amount', {message: 'Invalid amount'})
        return
    }
    clearErrors('amount')
}