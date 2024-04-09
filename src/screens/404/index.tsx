import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Result
      status={404}
      title="404"
      subTitle="Xin lỗi! Trang này không tồn tại"
      extra={
        <Button
          type="primary"
          danger
          className="h-9 min-w-32"
          onClick={() => {
            navigate(-1);
          }}
        >
          Quay lại
        </Button>
      }
    />
  );
};

export default NotFoundPage;
