import React, { useContext } from "react";
import "./Navbar.scss";
import moment from "moment";
import { ContentMovedContext } from "../../containers/Layout/Layout";

type navProps = {
  title: string;
};

const Navbar = React.memo((props: navProps) => {
  const [navMoved, setNavMoved] = useContext(ContentMovedContext);
  return (
    <div className={navMoved ? "nb nb-moved" : "nb"}>
      <div className="nb_left">
        <div className="nb_left_page_title">{props.title}</div>
        <div className="nb_left_date">Today {moment().format("ll")}</div>
      </div>
      <div className="nb_right">
        <div className="user_image"></div>
      </div>
    </div>
  );
});

export default Navbar;
