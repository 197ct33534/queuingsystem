import React, { useState } from "react";
import HeaderInfo from "../Home/HeaderInfo";
import Button from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import { serviceData } from "../../Assets/fakeData/ServiceData";
const AddService = ({ pathCancel, pathSubmit, update }) => {
    let data = {};
    const { id } = useParams();
    //update
    if (update) {
        data = serviceData.find((item) => id === String(item.id));
    }
    // add
    const handleSubmit = () => {
        let memory = localStorage.getItem("addService")
            ? JSON.parse(localStorage.getItem("addService"))
            : [];

        memory.splice(0, 0, { ...infoService, ...checkBox });
        localStorage.setItem("addService", JSON.stringify(memory));
    };

    const [infoService, setInfoService] = useState({
        id: data.id ? data.id : "",
        nameService: data.nameService ? data.nameService : "",
        descService: data.descService ? data.descService : "",
        fromIncrese: data.fromIncrese ? data.fromIncrese : "0001",
        toIncrese: data.toIncrese ? data.toIncrese : "9999",
        prefix: data.prefix ? data.prefix : "0001",
        surfix: data.surfix ? data.surfix : "0001",
        active: data.active ? data.active : true,
    });

    const [checkBox, stateCheckBox] = useState({
        resetCheckbox: data.resetCheckbox ? data.resetCheckbox : false,
        prefixCheckbox: data.prefixCheckbox ? data.prefixCheckbox : false,
        surfixCheckbox: data.surfixCheckbox ? data.surfixCheckbox : false,
        fromIncreseCheckbox: data.fromIncreseCheckbox
            ? data.fromIncreseCheckbox
            : false,
    });
    const handleChange = (evt) => {
        const value = evt.target.value;

        if (
            ["prefix", "surfix", "toIncrese", "fromIncrese"].includes(
                evt.target.name
            )
        ) {
            stateCheckBox({
                ...checkBox,
                [evt.target.name + "Checkbox"]: value.length < 1 ? false : true,
            });
        }
        setInfoService({
            ...infoService,
            [evt.target.name]: value,
        });
    };

    function handleChangeCheckbox(evt) {
        const value =
            evt.target.type === "checkbox"
                ? evt.target.checked
                : evt.target.value;
        stateCheckBox({
            ...checkBox,
            [evt.target.name]: value,
        });
    }

    return (
        <div className="ServiceManager">
            <HeaderInfo
                task={["D???ch v???", "Danh s??ch d???ch v???", ""]}
                title={update ? "C???p nh???t" : "Th??m d???ch v???"}
            />
            <div className="deviceManager-tittle">Qu???n l?? d???ch v???</div>
            <div className="AddService">
                <div className="AddService-title">Th??ng tin d???ch v???</div>
                <div className="grid-col-2 AddService-gap">
                    <div className="AddService-inputItem">
                        <div>
                            M?? d???ch v???: <span>*</span>
                        </div>
                        <input
                            type="text"
                            placeholder={data.id ? data.id : "2001"}
                            name="id"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-inputItem AddService-inputDesc">
                        <div>M?? t???: </div>
                        <input
                            type="text"
                            placeholder={
                                data.descService
                                    ? data.nameService
                                    : "Kh??m tim m???ch"
                            }
                            name="descService"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-inputItem">
                        <div>
                            T??n d???ch v???: <span>*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Kh??m tim m???ch"
                            name="nameService"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="AddService-title">Quy t???c c???p s???</div>
                <div className="AddService-checkboxItem grid-col-7">
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            name="fromIncreseCheckbox"
                            checked={checkBox.fromIncreseCheckbox}
                            onChange={handleChangeCheckbox}
                        />
                        <label htmlFor="AddService-checkbox-autoIncrease">
                            T??ng t??? ?????ng t???:
                        </label>
                    </div>

                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder={
                                data.fromIncrese ? data.fromIncrese : "0001"
                            }
                            className="AddService-inputNumber"
                            name="fromIncrese"
                            onChange={handleChange}
                        />
                        ?????n
                        <input
                            type="text"
                            placeholder={
                                data.toIncrese ? data.toIncrese : "9999"
                            }
                            className="AddService-inputNumber"
                            name="toIncrese"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            name="prefixCheckbox"
                            checked={checkBox.prefixCheckbox}
                            onChange={handleChangeCheckbox}
                        />
                        <label htmlFor="AddService-checkbox-prefix">
                            Prefix:
                        </label>
                    </div>
                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder={data.prefix ? data.prefix : "0001"}
                            className="AddService-inputNumber"
                            name="prefix"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            name="surfixCheckbox"
                            checked={checkBox.surfixCheckbox}
                            onChange={handleChangeCheckbox}
                        />

                        <label htmlFor="AddService-checkbox-surfix">
                            Surfix:
                        </label>
                    </div>
                    <div className="AddService-checkboxItem-right">
                        <input
                            type="text"
                            placeholder={data.surfix ? data.surfix : "0001"}
                            className="AddService-inputNumber"
                            name="surfix"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="AddService-checkboxItem-left">
                        <input
                            type="checkbox"
                            className="AddService-checkbox"
                            name="resetCheckbox"
                            checked={checkBox.resetCheckbox}
                            onChange={handleChangeCheckbox}
                        />
                        <label htmlFor="AddService-checkbox-reset">
                            Reset m???i ng??y:
                        </label>
                    </div>
                </div>
                <div className="formAddDevice-note">
                    <span>*</span>
                    L?? tr?????ng th??ng tin b???t bu???c
                </div>
            </div>

            <div className="controll-btn">
                <Link to={pathCancel}>
                    <Button
                        type="button"
                        buttonStyle="btn--warning--outline"
                        buttonSize="btn--large"
                    >
                        H???y b???
                    </Button>
                </Link>
                <Link to={pathSubmit} onClick={handleSubmit}>
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--large"
                    >
                        {update ? "C???p nh???t" : "Th??m d???ch v???"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default AddService;
