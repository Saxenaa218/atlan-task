import React from "react";
import { Modal, Button } from "antd";
import { CopyOutlined, DownloadOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateTypes } from "../../redux";
import { copyToClipboard, downloadData } from "../../utils";

import "./PeekDialog.scss";

const PeekDialog: React.FC = () => {
  const navigate = useNavigate();
  const query = useSelector((state: StateTypes) => state.query);
  const resultData = useSelector((state: StateTypes) => state.resultData);

  const handleCancel = () => {
    navigate("/");
  };

  const modalBodyStyle = { height: "500px", overflow: "auto" };

  return (
    <Modal
      centered
      bodyStyle={modalBodyStyle}
      visible={true}
      title={
        <>
          <span className="title">Query: {query}</span>
          <Button
            onClick={() => copyToClipboard(query)}
            size="small"
            icon={<CopyOutlined />}
          >
            Copy query
          </Button>
          <Button
            onClick={() => copyToClipboard(JSON.stringify(resultData))}
            size="small"
            icon={<CopyOutlined />}
          >
            Copy result
          </Button>
          <Button
            onClick={() => downloadData(query + ".json", resultData)}
            size="small"
            icon={<DownloadOutlined />}
          >
            Download
          </Button>
        </>
      }
      onCancel={handleCancel}
      footer={null}
      width="90%"
    >
      <code>{JSON.stringify(resultData)}</code>
    </Modal>
  );
};

export default PeekDialog;
