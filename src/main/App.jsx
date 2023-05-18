import React from "react";

import '../common/template/dependencies';

import Header from "../common/template/Header";
import SideBar from "../common/template/SideBar";
import Footer from "../common/template/Footer";
import Messages from "../common/msg/messages";

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer />
        <Messages />
    </div>
);