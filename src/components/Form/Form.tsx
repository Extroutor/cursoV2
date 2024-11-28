import {FormProvider} from "react-hook-form"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Form = ({methods, children}: {methods: any, children: any}) => {
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}

export default Form