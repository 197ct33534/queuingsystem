import React, { useState, memo } from "react";
import { users } from "../../Assets/fakeData/userData";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { SetPass } from "./SetPass";
import RestPass from "./ResetPass";
const FormLogin = ({ account, password, email, resetpass }) => {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [isError, setisError] = useState(true);
    const [status, setStatus] = useState("Quên mật khẩu?");
    const handleSubmit = () => {
        const result = users.filter(
            (user) => user.name === name && user.password === pass
        );

        if (result.length > 0) {
            setisError(true);
            console.log("đăng nhập thành công");
        } else {
            setisError(false);
            setStatus("Sai mật khẩu hoặc tên đăng nhập");
            console.log("đăng nhập thất bại");
        }
    };
    return (
        <>
            {resetpass ? <RestPass /> : ""}
            {email ? (
                <>
                    <SetPass />
                </>
            ) : (
                ""
            )}

            <form action="" className="login-left_form">
                {account ? (
                    <>
                        <label htmlFor="" className="login-left_title">
                            Tên đăng nhập *
                        </label>
                        <input
                            type="text"
                            className={`login-left_input  ${
                                isError ? "" : "error"
                            }`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </>
                ) : (
                    ""
                )}
                {password ? (
                    <>
                        <label htmlFor="" className="login-left_title">
                            Mật khẩu *
                        </label>
                        <input
                            type="password"
                            className={`login-left_input  ${
                                isError ? "" : "error"
                            }`}
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                        />
                    </>
                ) : (
                    ""
                )}

                {password && account ? (
                    <>
                        <div className="login-left_error">
                            <i className="bx bx-error-circle"></i>
                            <Link to="/forgotPass">
                                <span>{status}</span>
                            </Link>
                        </div>
                        <div className="login-left_buttonLogIn">
                            <Link to="/info">
                                <Button
                                    onClick={handleSubmit}
                                    type="button"
                                    buttonStyle="btn--primary--solid"
                                    buttonSize="btn--large"
                                >
                                    Đăng nhập
                                </Button>
                            </Link>
                        </div>
                    </>
                ) : (
                    ""
                )}

                {isError ? (
                    ""
                ) : (
                    <Link to="/forgotPass">
                        <p className="login-left_error forgot">
                            Quên mật khẩu?
                        </p>
                    </Link>
                )}
            </form>
        </>
    );
};

export default memo(FormLogin);
