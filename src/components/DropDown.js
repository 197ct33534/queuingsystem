import { useState, useRef } from "react";

const DropDown = ({ selected, setSelected, options, up, scroll }) => {
    const [isActive, setIsActive] = useState(false);

    const iconRef = useRef();
    const handleAddIconUp = () => {
        if (up) {
            iconRef.current.classList.remove("bxs-down-arrow");
            iconRef.current.classList.add("bxs-up-arrow");
        }
    };
    const handleRemoveIconUp = () => {
        iconRef.current.classList.remove("bxs-up-arrow");
        iconRef.current.classList.add("bxs-down-arrow");
    };
    const handleMouseLeave = () => {
        handleRemoveIconUp();
        setIsActive(false);
    };
    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={(e) => {
                    setIsActive(!isActive);
                    handleAddIconUp();
                }}
            >
                {selected}
                <i
                    ref={iconRef}
                    className="bx bxs-down-arrow dropdown-icon"
                ></i>
            </div>
            {isActive && (
                <div
                    className="dropdown-content "
                    id={scroll && "scroll"}
                    onMouseLeave={handleMouseLeave}
                >
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);

                                up && handleRemoveIconUp();
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
