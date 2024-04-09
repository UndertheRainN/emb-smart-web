import ComtainerComponent from "@components/container";
import HeaderComponent from "@components/header";
import FilterComponent from "@screens/setting/components/filter-component";
import { Button, Form } from "antd";
import ServiceTableComponent from "./components/service-table";
import ButtonComponent from "@components/custom-button";

const ServicesListPage = () => {
  return (
    <>
      <HeaderComponent
        title={"Thông tin cá nhân"}
        onBack={() => {}}
        buttonRight={[
          <ButtonComponent danger type="primary">
            Tạo mới
          </ButtonComponent>,
        ]}
      />

      <ComtainerComponent minHeight="min-h-0">
        <FilterComponent>
          <Form></Form>
        </FilterComponent>
      </ComtainerComponent>
      <ComtainerComponent>
        <ServiceTableComponent />
      </ComtainerComponent>
    </>
  );
};

export default ServicesListPage;
