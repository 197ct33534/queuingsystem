import React from "react";
import FormDetail from "../../components/FormDetail";
import { RandomNumberData } from "../../Assets/fakeData/RandomNumbderData";
import { useParams } from "react-router-dom";
const RandomDetail = () => {
    const { id } = useParams();
    const data = RandomNumberData.find((item) => String(item.id) === id);
    console.log(data);
    const detail = [
        { display: "Họ tên", key: "nameCustomer" },
        { display: "Nguồn cấp", key: "origin" },
        { display: "Tên dịch vụ", key: "nameService" },
        { display: "Trạng thái", key: "status" },
        { display: "Số thứ tự", key: "id" },
        { display: "Số điện thoại", key: "phone" },
        { display: "Thời gian cấp", key: "fromDate" },
        { display: "Địa chỉ Email", key: "email" },
        { display: "Hạn sử dụng", key: "toDate" },
    ];
    return (
        <FormDetail
            title={"Chi tiết "}
            task={["Thiết bị", "Danh sách cấp số", ""]}
            contextPath={"Quay lại"}
            path={`/randomNumber`}
            classNameIcon={"bx bx-chevron-left-circle"}
            data={detail}
            dataOrigin={RandomNumberData}
        />
    );
};

export default RandomDetail;
