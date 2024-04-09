import { TranslationFile } from "@translation/index";
import { Collapse, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FilterComponent = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation(TranslationFile.COMMON);
  const [active, setActive] = useState<string | string[]>(["1"]);
  return (
    <Collapse
      defaultActiveKey={["1"]}
      expandIconPosition="end"
      onChange={(active) => {
        setActive(active);
      }}
      className="rounded-lg"
    >
      <Collapse.Panel
        key={"1"}
        className="m-2 rounded-lg bg-primary-50 "
        header={
          <Typography.Title className="mb-0 text-sm">
            {t("filter")}
          </Typography.Title>
        }
        extra={
          <Typography.Text>
            {active.length > 0 ? t("collapse") : t("expand")}
          </Typography.Text>
        }
      >
        {children}
      </Collapse.Panel>
    </Collapse>
  );
};

export default FilterComponent;
