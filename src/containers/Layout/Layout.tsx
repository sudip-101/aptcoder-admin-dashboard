import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "../../components/Login/Login";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Layout.scss";

export const ContentMovedContext = createContext<any>([] as any);

const Layout: React.FC = () => {
  const [contentMoved, setContentMoved] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  return (
    <>
      {loggedIn ? (
        <div className="layout-container">
          <ContentMovedContext.Provider value={[contentMoved, setContentMoved]}>
            <Sidebar
              contentMoved={contentMoved}
              setContentMoved={(moved: boolean) => setContentMoved(moved)}
            />
            <div className={!contentMoved ? "contents moved" : "contents"}>
              <Outlet />
            </div>
          </ContentMovedContext.Provider>
        </div>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </>
  );
};

export default Layout;
