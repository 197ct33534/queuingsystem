import React from "react";
import userAvatarBig from "../../Assets/images/userAvatarBig.png";
import camera from "../../Assets/images/camera.png";
const CardInfo = ({ user }) => {
    const infoForm = [
        { label: "Tên người dùng", input: user.fullname },
        { label: "Tên đăng nhập", input: user.name },
        { label: "Số điện thoại", input: user.phone },
        { label: "Mật khẩu", input: user.password },
        { label: "Email", input: user.email },
        { label: "Vai trò", input: user.job },
    ];
    return (
        <div className="cardInfo row">
            <div className="cardInfo-avatar col l-3">
                <p className="cardInfo-avatar_img">
                    <img
                        src={userAvatarBig}
                        className="cardInfo-avatar_img_pic"
                        alt=""
                    />
                    <img
                        src={camera}
                        alt=""
                        className="cardInfo-avatar_img_camera"
                    />
                </p>
                <h1 className="cardInfo-avatar_name">{user.fullname}</h1>
            </div>
            <div className="cardInfo-form col l-9">
                <div className="row ">
                    {infoForm.map((info) => (
                        <div
                            className="col l-6 cardInfo-form_item"
                            key={info.label}
                        >
                            <label htmlFor="">{info.label}</label>
                            <input
                                type="text"
                                value={info.input}
                                onChange={() => {}}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardInfo;
