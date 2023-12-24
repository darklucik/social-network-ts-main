
type InputProps = {
    InputType: 'tel' | 'radio' | 'text'
    InputPlaceholder: string
}




export const AppInput = ({InputType,InputPlaceholder}:InputProps) => {
    return (
        <input type={InputType} placeholder={InputPlaceholder} />
    )
}