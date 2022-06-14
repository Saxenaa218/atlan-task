import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Input, Button, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { StateTypes, performSearch } from "../../redux";
import Table from "../../components/CoinTable";
import { useRecentMenu } from "../../hooks";

import "./Home.scss";

const Home: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const query = useSelector((state: StateTypes) => state.query);
  const resultData = useSelector((state: StateTypes) => state.resultData);
  const recentMenu = useRecentMenu();
  const navigate = useNavigate();

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const marginStyle = { marginRight: "10px" };

  const inputTextAreaStyle = { width: "400px" };

  return (
    <div className="home">
      <header className="header">
        <Input.TextArea
          allowClear
          value={inputValue}
          placeholder="Query your SQL here ..."
          style={inputTextAreaStyle}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="header-content">
          <Button
            type="primary"
            style={marginStyle}
            onClick={() => performSearch(inputValue)}
            disabled={inputValue.trim().length === 0}
          >
            <SearchOutlined /> Search
          </Button>
          <Dropdown
            overlay={recentMenu}
            placement="bottom"
            trigger={["click"]}
            arrow={{ pointAtCenter: true }}
          >
            <Button style={marginStyle}>
              Recent searches <DownOutlined />
            </Button>
          </Dropdown>
        </span>
      </header>
      {query.trim().length > 0 && (
        <section className="info">
          <div className="query">
            <span className="tag">
              <b>{resultData.length}</b> rows found!, using SQL query{" "}
              <b>{query}</b>
              <Button
                type="link"
                size="small"
                disabled={query.trim().length === 0}
                onClick={() => navigate("/peek")}
              >
                Peek raw result data
              </Button>
            </span>
          </div>
        </section>
      )}
      <Table />
    </div>
  );
};

export default Home;
