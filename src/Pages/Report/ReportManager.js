import React, { useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Controler from "./Controler";
import { RandomNumberData } from "../../Assets/fakeData/RandomNumbderData";
import Table from "../../components/Table";
import { Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import dowload from "../../Assets/images/dowload.png";
const ReportManager = () => {
    const [state, setState] = useState({
        id: false,
        nameService: false,
        fromDate: false,
        status: false,
        origin: false,
        idValue: "Tất cả",
        nameServiceValue: "Tất cả",
        fromDateValue: "Tất cả",
        statusValue: "Tất cả",
        originValue: "Tất cả",
    });
    const onClickFilter = (key) => {
        const value = state[key];
        setState((prev) => ({ ...prev, [key]: !value }));
    };

    //filter
    let data = [...RandomNumberData];

    if (state.idValue !== "Tất cả") {
        data = data.filter((item) => item.id === state.idValue);
    }
    if (state.nameServiceValue !== "Tất cả") {
        data = data.filter(
            (item) => item.nameService === state.nameServiceValue
        );
    }
    if (state.fromDateValue !== "Tất cả") {
        data = data.filter((item) => item.fromDate === state.fromDateValue);
    }
    if (state.statusValue !== "Tất cả") {
        data = data.filter((item) => item.status === state.statusValue);
    }
    if (state.originValue !== "Tất cả") {
        data = data.filter((item) => item.origin === state.originValue);
    }

    //pagination
    const [currentPerPage, setCurrentPerPage] = useState(1);
    const [numRowInPage] = useState(10);

    const [pageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const indexOfLastRow = currentPerPage * numRowInPage;
    const indexOfFirstRow = indexOfLastRow - numRowInPage;
    const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
    return (
        <div className="ReportManager">
            <HeaderInfo title={"Lập báo cáo"} task={["Báo cáo", ""]} />
            <div className="service-warp">
                <Controler />
            </div>

            <div className="ReportManager-controller service-warp">
                <Table
                    filter
                    state={state}
                    setState={setState}
                    dataOrigin={RandomNumberData}
                    datas={currentRows}
                    tittleHeaders={[
                        "Số thứ tự",
                        "Tên dịch vụ",
                        "Thời gian cấp",
                        "Tình trạng",
                        "Nguồn cấp",
                    ]}
                    keyDatas={[
                        "id",
                        "nameService",
                        "fromDate",
                        "status",
                        "origin",
                    ]}
                    onClickFilter={onClickFilter}
                />
                <Link to="">
                    <div className="deviceManager-add">
                        <img src={dowload} alt="" />
                        Tải về
                    </div>
                </Link>
            </div>

            <Pagination
                totalDatas={RandomNumberData.length}
                numRowInPage={numRowInPage}
                currentPerPage={currentPerPage}
                maxPageNumberLimit={maxPageNumberLimit}
                minPageNumberLimit={minPageNumberLimit}
                pageNumberLimit={pageNumberLimit}
                setCurrentPerPage={setCurrentPerPage}
                setmaxPageNumberLimit={setmaxPageNumberLimit}
                setminPageNumberLimit={setminPageNumberLimit}
            />
        </div>
    );
};

export default ReportManager;
