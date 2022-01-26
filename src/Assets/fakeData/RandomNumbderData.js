const data = [];
const nameCus = [
    "Lê Huỳnh Ái Vân",
    "Huỳnh Ái Vân",
    "Lê Ái Vân",
    "Nguyễn Ái Vân",
    "Trần Thị Ái Vân",
    "Lê Huỳnh Nghĩa",
    "Lê Huỳnh Đức",
    "Phạm Văn Mạnh",
    "Lê thị Cẩm Tiên",
];
const statusRan = ["Đang chờ", "Đã sử dụng", "Bỏ qua"];
export const nameSer = [
    "Khám tim mạch",
    "Khám sản - Phụ Khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
    "Khám hô hấp",
    "Khám tổng quát",
];
function get_random(list) {
    return list[Math.floor(Math.random() * list.length)];
}
for (let i = 2010001; i < 2019999; i++) {
    data.push({
        id: i,
        nameCustomer: get_random(nameCus),
        nameService: get_random(nameSer),
        fromDate: "14:35 - 07/11/2021",
        toDate: "14:35 - 12/11/2021",
        status: get_random(statusRan),
        phone: "0948523623",
        email: "nghia.197ct33534@vanlanguni.vn",
        origin: i % 2 === 0 ? "Kiosk" : "Hệ thống",
    });
}

export const RandomNumberData = [...data];
