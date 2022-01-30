import React from "react";

const Form = ({ roleState, handleChange }) => {
    const checkbox = [
        { display: "Tất cả" },
        { display: "Chức năng x" },
        { display: "Chức năng y" },
        { display: "Chức năng z" },
    ];

    return (
        <>
            <div className="Manage-From">
                <div className="Manage-From-title">Thông tin vai trò</div>
                <div className="grid-col-2 Manage-From-layout">
                    <div className="Manage-From-layout-left">
                        <div className="Manage-From-layout-left-item">
                            <label htmlFor="">
                                Tên vai trò
                                <span className="Manage-From-Note">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nhập tên vai trò"
                                name="nameRole"
                                value={roleState.nameRole}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="Manage-From-layout-left-item">
                            <label htmlFor="">Mô tả: </label>
                            <input
                                type="text"
                                className="Manage-From-layout-left-inputLarge"
                                placeholder="Nhập mô tả"
                                name="descRole"
                                value={roleState.descRole}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="Manage-From-layout-left">
                            <span className="Manage-From-Note">*</span> Là
                            trường thông tin bắt buộc
                        </div>
                    </div>
                    <div className="Manage-From-layout-right">
                        <p>
                            Phân quyền chức năng
                            <span className="Manage-From-Note">*</span>
                        </p>
                        <div className="Manage-From-layout-right-wrap">
                            <div className="Manage-From-layout-right-item">
                                <h1 className="Manage-From-layout-right-title">
                                    Nhóm chức năng A
                                </h1>
                                {checkbox.map((item, index) => (
                                    <div
                                        className="Manage-From-layout-right-checkbox"
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            className="AddService-checkbox"
                                        />
                                        <span>{item.display}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="Manage-From-layout-right-item">
                                <h1 className="Manage-From-layout-right-title">
                                    Nhóm chức năng B
                                </h1>
                                {checkbox.map((item, index) => (
                                    <div
                                        className="Manage-From-layout-right-checkbox"
                                        key={index}
                                    >
                                        <input
                                            type="checkbox"
                                            className="AddService-checkbox"
                                        />
                                        <span>{item.display}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Form;
