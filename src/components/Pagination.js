import React from "react";

const Pagination = () => {
    return (
        <div className="pagination">
            <ul className="pagination-warp">
                <li>
                    <i className="bx bx-caret-left pagination-icon"></i>
                </li>

                <li className="active">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>...</li>
                <li>
                    <i className="bx bx-caret-right pagination-icon"></i>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
