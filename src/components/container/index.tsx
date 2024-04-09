import { Layout } from "antd";

interface ComtainerComponentProps {
  size?: "lg" | "sm";
  children: React.ReactNode;
  minHeight?: string;
}
const ComtainerComponent = (props: ComtainerComponentProps) => {
  const { minHeight = "min-h-[75vh]", size = "lg", children } = props;
  return (
    <Layout.Content className={`pt-5 ${size === "lg" ? "px-10" : "px-64"} `}>
      <div className={`${minHeight} bg-white rounded-lg`}>{children}</div>
    </Layout.Content>
  );
};

export default ComtainerComponent;
