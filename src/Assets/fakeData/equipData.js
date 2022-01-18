export const tittleEquipments = [
    {
        id: "Mã thiết bị",
        name: "Tên thiết bị",
        ipAddress: "Địa chỉ IP",
        active: "Trạng thái hoạt động",
        connect: "Trạng thái kết nối",
        service: "Dịch vụ sử dụng",
    },
];

const Equip = [];

for (let i = 1; i <= 100; i++) {
    Equip.push({
        id: `KIO_${i}`,
        name: "Kiosk",
        ipAddress: `192.168.1.${i}`,
        active: i % 2 === 0 ? true : false,
        connect: i % 3 === 0 ? true : false,
        service:
            "khám tim mạch,khám mắt,khám răng hàm mặt,khám tai mũi họng,khám hô hấp,khám tổng quát",
        Account: "nghia",
        passWord: "123456",
        typeDevice: i % 7 === 0 ? "Display counter" : "Kiosk",
    });
}
export const Equipments = Equip;
