import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../Assets/images/logo.png";
import { navLists } from "../Assets/fakeData/dashBoardData";
import Button from "./Button";
import { LoginContext } from "./Layout";
const DashBoard = () => {
    const data = useContext(LoginContext);

    const handleLogout = (e) => {
        data.setLoggedIn(false);
    };

    return data.loggedIn ? (
        <div className="dashboard">
            <div className="dashboard-logo">
                <img src={Logo} alt="" />
            </div>
            <div className="dashboard-list">
                {navLists.map((item) => (
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "active dashboard-list_item"
                                : "dashboard-list_item "
                        }
                        key={item.display}
                    >
                        <img src={item.icon} alt="" />
                        <span className="dashboard-list_content">
                            {item.display}
                        </span>
                        {item.display === "Cài đặt hệ thống" ? (
                            <i className="bx bx-dots-vertical-rounded dashboard-list_setting"></i>
                        ) : (
                            ""
                        )}
                    </NavLink>
                ))}

                <div className="dashboard-logout">
                    <Link to="" onClick={() => handleLogout()}>
                        <Button
                            buttonSize="btn--XL"
                            type="button"
                            buttonStyle="btn--warning--solid"
                        >
                            <i className="bx bx-log-out dashboard-logout_icon"></i>
                            <span className="dashboard-logout_content">
                                Đằng xuất
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default DashBoard;
