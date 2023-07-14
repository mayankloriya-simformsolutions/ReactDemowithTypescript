import React from "react";
import { HomeStyle } from "./Home.styles";
import CustomButton from "../../Common/Component/CustomButton/CustomButton";
import Container from "../../Components/Container/Container";
import { Space, Tooltip } from "antd";
import CustomCard from "../../Common/Component/CustomCard/CustomCard";
import { DownloadOutlined } from "@ant-design/icons/lib/icons";

export default function Home() {
  return (
    <HomeStyle>
      <Container>
        <CustomButton>Go to About</CustomButton>
        <Space direction="vertical" style={{ display: "flex" }}>
      <CustomCard title="CustomButton">
        <Space direction="vertical">
          <Space>
            <CustomButton type="primary">CustomButton</CustomButton>
            <CustomButton>CustomButton</CustomButton>
          </Space>
          <Space>
            <CustomButton size="large">CustomButton</CustomButton>
            <CustomButton size="middle">CustomButton</CustomButton>
            <CustomButton size="small">CustomButton</CustomButton>
          </Space>
          <Space>
            <CustomButton icon={<DownloadOutlined />}>CustomButton</CustomButton>
            <CustomButton icon={<DownloadOutlined />} />
          </Space>
          <Space>
            <CustomButton type="primary" icon={<DownloadOutlined />}>
              CustomButton
            </CustomButton>
            <CustomButton type="primary" icon={<DownloadOutlined />} />
          </Space>
        </Space>
      </CustomCard>
      <CustomCard title="Tooltip">
        <Space direction="vertical">
          <Space>
            <Tooltip title="Hi there!" placement="top">
              <CustomButton size="middle">Top</CustomButton>
            </Tooltip>
            <Tooltip title="Hi there!" placement="bottom">
              <CustomButton size="middle">Bottom</CustomButton>
            </Tooltip>
            <Tooltip title="Hi there!" placement="left">
              <CustomButton size="middle">Left</CustomButton>
            </Tooltip>
            <Tooltip title="Hi there!" placement="right">
              <CustomButton size="middle">Right</CustomButton>
            </Tooltip>
          </Space>
        </Space>
      </CustomCard>
    </Space>
      </Container>
    </HomeStyle>
  );
}
