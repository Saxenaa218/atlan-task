import React from "react";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { useColumns } from "../../hooks";
import { StateTypes } from "../../redux";

import "./CoinTable.css";

const CoinTable: React.FC = () => {
  const columns = useColumns();
  const resultData = useSelector((state: StateTypes) => state.resultData);

  return (
    <div className="table-wrapper">
      <Table columns={columns} dataSource={resultData} />
    </div>
  );
};

export default CoinTable;
