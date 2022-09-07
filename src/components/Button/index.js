import * as S from "./styled";
import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return <S.Button {...props} ref={ref} />;
});
Button.displayName = "Button";

export default Button;
