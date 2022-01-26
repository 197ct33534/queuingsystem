import React from "react";
import { Link, useParams } from "react-router-dom";
import HeaderInfo from "../Pages/Home/HeaderInfo";

const FormDetail = ({
    title,
    task,
    contextPath,
    path,
    classNameIcon,
    device,
    data,
    dataOrigin,
}) => {
    const { id } = useParams();
    const dataField = dataOrigin.find((item) => String(item.id) === String(id));
    //dataField = [{display:...,key:...},{display:...,key:...}]
    console.log(id, data, dataField);
    return (
        <div className="deviceManager">
            <HeaderInfo title={title} task={task} />
            <div className="deviceManager-tittle">{`Quản lý ${
                device ? "thiết bị" : "Cấp số"
            }`}</div>
            <div className="deviceManager-warp">
                <div className="formAddDevice detailDevice">
                    <div className="detailDevice-title">{`Thông tin ${
                        device ? "thiết bị" : "Cấp số"
                    }`}</div>
                    <div className="grid-col-2 detailDevice-gap">
                        {data.map((item, key) => (
                            <div className="detailDevice-item" key={key}>
                                <div className="detailDevice-item_label">
                                    {item.display}:
                                </div>
                                <div className="detailDevice-item_content">
                                    {dataField[item.key]}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Link to={path}>
                    <div className="deviceManager-add">
                        <div className="deviceManager-add_icon">
                            <i className={classNameIcon}></i>
                        </div>
                        {contextPath}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default FormDetail;
