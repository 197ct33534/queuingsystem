const Service = [];

for (let i = 1; i <= 100; i++) {
    Service.push({
        id: `KIO_${i}`,
        name: `Kiosk`,
        des: "Hoạt động ",
        active: i % 2 === 0 ? true : false,
    });
}
export const serviceData = Service;
