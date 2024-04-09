import { Button, ButtonProps } from "antd";
import "./custom-button.styless.scss";
import { ACCESS } from "common/access";

interface ButtonComponentProps extends ButtonProps {
  access?: ACCESS;
  children?: React.ReactNode;
}
const ButtonComponent = (props: ButtonComponentProps) => {
  const { access, children, ...params } = props;
  return <Button {...params}>{children}</Button>;
};

export default ButtonComponent;
