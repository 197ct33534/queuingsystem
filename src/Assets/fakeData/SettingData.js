export const roleData = [
    {
        id: 1,
        nameRole: "Kế toán",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
        id: 2,
        nameRole: "Bác sĩ",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
        id: 3,
        nameRole: "Lễ tân",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
        id: 4,
        nameRole: "Quản lý",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
        id: 5,
        nameRole: "Admin",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
    {
        id: 6,
        nameRole: "Superadmin",
        numberPeople: 6,
        descRole: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
    },
];
const account = [];

for (let i = 12; i <= 200; i++) {
    account.push({
        id: 1,
        nameAccount: `tuyetnguyen@${i}`,
        nameUser: "Nguyễn Văn A",
        phone: `0${912346513 + i}`,
        emailAccount: `tuyetnguyen@${i}@gmail.com`,
        jobAccount: i % 2 === 0 ? "Kế toán" : i % 3 === 0 ? "Quản lý" : "Admin",
        active: i % 4 === 0 ? true : false,
    });
}
export const accountData = [...account];

const user = [];

for (let i = 12; i <= 100; i++) {
    user.push({
        id: 1,
        nameUser: `tuyetnguyen@${i}`,
        timeUser: "01/12/2021 15:12:17",
        ipUser: "192.168.3.1",
        operation: "Cập nhật thông tin dịch vụ DV_01",
    });
}
export const userData = [...user];
