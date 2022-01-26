const Service = [];

for (let i = 201; i <= 300; i++) {
    Service.push({
        id: i,
        nameService: `Kiosk`,
        descService: "Hoạt động ",
        active: i % 2 === 0 ? true : false,
        prefix: "0001",
        surfix: "0001",
        toIncrese: "9999",
        fromIncrese: "0001",
        resetCheckbox: true,
        surfixCheckbox: true,
        prefixCheckbox: true,
        fromIncreseCheckbox: true,
    });
}
export const serviceData = Service;
