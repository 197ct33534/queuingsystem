import React, { useState, useRef } from "react";
import userAvatar from "../../Assets/images/userAvatar.png";
import NotifyBell from "../../components/NotifyBell";
import { notifyBells } from "../../Assets/fakeData/UserNotifyData";
import { Link } from "react-router-dom";
const HeaderInfo = ({ title, avatar, fullname, bgcolorleft, bgcolorright }) => {
    const color1 = bgcolorleft ? bgcolorleft : "#F6F6F6";
    const color2 = bgcolorright ? bgcolorright : "#F6F6F6";
    const [isHover, setisHover] = useState(false);
    const notifyRef = useRef();
    console.log(notifyRef.current);

    const handleMouseOver = () => {
        setisHover(true);
    };

    const handleMouseOut = () => {
        setisHover(false);
    };

    return (
        <div className="headerInfo ">
            <h1
                className="headerInfo-left "
                style={{ backgroundColor: color1 }}
            >
                {title}
            </h1>
            <div
                className="headerInfo-right "
                style={{ backgroundColor: color2 }}
            >
                <span
                    className="headerInfo-right_icon"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <i className="bx bxs-bell headerInfo-right_bell"></i>
                    <p className="notify-bridge"></p>
                </span>
                <Link to="/info">
                    <div className="headerInfo-right_info">
                        <span className="headerInfo-avatar">
                            <img src={avatar ? avatar : userAvatar} alt="" />
                        </span>
                        <div>
                            <span className="headerInfo-right_hello">
                                Xin chào
                            </span>
                            <p className="headerInfo-right_name">
                                {fullname ? fullname : "lê quỳnh ái vân"}
                            </p>
                        </div>
                    </div>
                </Link>

                <NotifyBell
                    users={notifyBells}
                    active={isHover ? "active" : ""}
                />
            </div>
        </div>
    );
};

export default HeaderInfo;
