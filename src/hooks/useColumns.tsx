import { useRef, useState } from "react";
import { Button, Input, InputRef, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { ColumnType } from "antd/lib/table";
import type { FilterConfirmProps } from "antd/lib/table/interface";
import { formatCurrency, formatNumber, getColorText } from "../utils";
import { DataIndex } from "./types";
import { DataType } from "../redux";

export const useColumns: () => any = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): ColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: string | number | boolean, record: DataType) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  return [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "1Hour change",
      dataIndex: "percent_change_1h",
      key: "percent_change_1h",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.percent_change_1h) - parseInt(b.percent_change_1h),
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "24Hour Change",
      dataIndex: "percent_change_24h",
      key: "percent_change_24h",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.percent_change_24h) - parseInt(b.percent_change_24h),
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "7Day Change",
      dataIndex: "percent_change_7d",
      key: "percent_change_7d",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.percent_change_7d) - parseInt(b.percent_change_7d),
      render: (text: string) => (
        <span className={getColorText(text)}>
          {text}
          <b>%</b>
        </span>
      ),
    },
    {
      title: "Price in USD",
      dataIndex: "price_usd",
      key: "price_usd",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.price_usd) - parseInt(b.price_usd),
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
    {
      title: "Price in BTC",
      dataIndex: "price_btc",
      key: "price_btc",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.price_btc) - parseInt(b.price_btc),
      render: (text: string) => (
        <span>
          {text}
          <b>BTC</b>
        </span>
      ),
    },
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      sorter: (a: DataType, b: DataType) => a.rank - b.rank,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      ...getColumnSearchProps("symbol"),
    },
    {
      title: "Current Supply",
      dataIndex: "csupply",
      key: "csupply",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.csupply) - parseInt(b.csupply),
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Total Supply",
      dataIndex: "tsupply",
      key: "tsupply",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.tsupply) - parseInt(b.tsupply),
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Volume 24Hr",
      dataIndex: "volume24",
      key: "volume24",
      sorter: (a: DataType, b: DataType) => a.volume24 - b.volume24,
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Volume 24Hr A",
      dataIndex: "volume24a",
      key: "volume24a",
      sorter: (a: DataType, b: DataType) => a.volume24a - b.volume24a,
      render: (text: string) => <span>{formatNumber(text)}</span>,
    },
    {
      title: "Market Cap(USD)",
      dataIndex: "market_cap_usd",
      key: "market_cap_usd",
      sorter: (a: DataType, b: DataType) =>
        parseInt(a.market_cap_usd) - parseInt(b.market_cap_usd),
      render: (text: string) => <span>{formatCurrency(text)}</span>,
    },
  ];
};
