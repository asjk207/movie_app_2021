import React from "react";
//Link를 사용하여 페이지의 새로고침 없이 다른 화면을 출력시킨다. (OPA)
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
        <!-- html의 href의 경우 페이지 전환시 새로고침이 되므로, Link to를 사용하여, Component를 연결시킨다. -->
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;