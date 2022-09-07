import * as S from "./styled";

function Input({
  name,
  placeholder,
  value,
  onChange,
  maxlength,
  disabled = false,
}) {
  return (
    <S.ContainerInput>
      <S.Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        maxlength={maxlength}
        disabled={disabled}
      />
    </S.ContainerInput>
  );
}

export default Input;
