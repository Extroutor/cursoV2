import {FormProvider} from "react-hook-form"

const Form = ({methods, children}: {methods: any, children: any}) => {
    return (
        <FormProvider {...methods}>
            {children}
        </FormProvider>
    )
}

export default Form