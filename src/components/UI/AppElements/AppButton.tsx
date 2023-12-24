type ButtonProps={
    ButtonText: string
}




export const AppButton = ({ButtonText}:ButtonProps) => {
    return (
        <button>{ButtonText}</button>
    )
}