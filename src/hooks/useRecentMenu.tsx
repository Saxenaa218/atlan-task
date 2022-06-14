import { Empty, Menu } from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import { store, performSearch } from "../redux";

const getMenuObject = () => {
  const recentQueries = store.getState().recentQueries;
  if (recentQueries.length) {
    return recentQueries.map((itm: string) => ({
      key: itm,
      label: (
        <>
          <span className="dim-text">
            <HistoryOutlined />
          </span>
          &nbsp;&nbsp;
          <span onClick={() => performSearch(itm)}>
            <b>{itm}</b>
          </span>
        </>
      ),
    }));
  } else {
    return [
      {
        key: 1,
        label: <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />,
      },
    ];
  }
};

export const useRecentMenu: () => any = () => {
  const menuItems = getMenuObject();
  return <Menu items={menuItems} />;
};
