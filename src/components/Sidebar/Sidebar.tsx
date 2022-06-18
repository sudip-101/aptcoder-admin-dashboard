import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import Routes from "./menuHelper";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub3"];

const Sidebar: React.FC<IContentMovedProps> = ({
  contentMoved,
  setContentMoved,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className={sidebarOpen ? "sidebar" : "sidebar closed"}>
      <div className="top">
        <div className="top-bar">
          <h2 className="logo none-text">APTCODER</h2>
          <div
            className="menu-toggle"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
              setContentMoved(sidebarOpen);
            }}
          >
            <span className="menu-toggle-bar one"></span>
            <span className="menu-toggle-bar two"></span>
            <span className="menu-toggle-bar three"></span>
          </div>
        </div>
        <nav className="nav-container">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ width: 256 }}
          >
            {Routes.map((route) =>
              route.children ? (
                <SubMenu key={route.key} icon={route.icon} title={route.title}>
                  {route.children.map((child) => (
                    <Menu.Item key={child.key}>
                      {child.link ? (
                        <Link to={child.link} className="menu-link">
                          {child.title}
                        </Link>
                      ) : (
                        child.title
                      )}
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.key} icon={route.icon}>
                  {route.link ? (
                    <Link to={route.link} className="menu-link">
                      {route.title}
                    </Link>
                  ) : (
                    route.title
                  )}
                </Menu.Item>
              )
            )}
          </Menu>
        </nav>
      </div>
      <div className="bottom btn-add-room">
        <i className="fa-solid fa-circle-plus"></i>
        <span className="btn-title">Add Room</span>
      </div>
    </div>
  );
};

export default Sidebar;
