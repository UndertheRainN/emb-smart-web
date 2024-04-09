import { Button, Flex, Space, Typography } from "antd";
import "./header.component.styless.scss";
import { LeftOutlined } from "@ant-design/icons";
interface HeaderComponentProps {
  onBack?: () => void;
  title?: string;
  buttonRight?: React.ReactNode[];
}

const HeaderComponent = ({
  buttonRight,
  onBack,
  title,
}: HeaderComponentProps) => {
  return (
    <Flex className="flex items-center content-center h-16 px-10 bg-white">
      {onBack && (
        <Button type="text" icon={<LeftOutlined />} className="mr-5 "></Button>
      )}
      <Typography.Text className=" header-title">{title}</Typography.Text>
      {buttonRight && (
        <Space size={20} className="float-end">
          {buttonRight}
        </Space>
      )}
    </Flex>
  );
};

export default HeaderComponent;
