interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
  errorText: string;
}

export const AppInput = ({
  hasError,
  errorText,
  type,
  required,
  placeholder,
}: AppInputProps) => {
  return (
    <>
      <input type={type} required={required} placeholder={placeholder} />
      {hasError && <span>{errorText}</span>}
    </>
  );
};
