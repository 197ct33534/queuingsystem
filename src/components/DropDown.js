import { useState } from "react";

const DropDown = ({ selected, setSelected, options }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
            >
                {selected}
                <i className="bx bxs-down-arrow dropdown-icon"></i>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                            }}
                            className={`dropdown-item ${
                                option === selected ? "active" : ""
                            } `}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DropDown;
