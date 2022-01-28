import React from "react";

const FilterTable = ({
    data,
    keydata,
    state,
    setState,
    handleOnMouseLeave,
}) => {
    const datanew = data.filter(function (item, pos, self) {
        return self.indexOf(item) === pos;
    });

    return (
        <>
            <ul
                className="FilterTable"
                id="scroll"
                onMouseLeave={() => handleOnMouseLeave(keydata)}
            >
                {datanew.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => {
                            const value = state[keydata];
                            setState((prev) => ({
                                ...prev,
                                [keydata + "Value"]: item,
                                [keydata]: !value,
                            }));
                        }}
                        className={
                            item === state[keydata + "Value"] ? "active" : ""
                        }
                    >
                        {item}
                        {keydata === "nameService" && (
                            <input
                                type="checkbox"
                                className="AddService-checkbox"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
};

export default FilterTable;
