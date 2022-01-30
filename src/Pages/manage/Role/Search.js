import React from "react";

const Search = () => {
    return (
        <div className="controlDevice-warp-item controlDevice-warp-search">
            <span>
                Từ khóa
                <div className="controlDevice-warp-item_search">
                    <input type="text" placeholder="Nhập từ khóa " />
                    <i className="bx bx-search-alt-2"></i>
                </div>
            </span>
        </div>
    );
};

export default Search;
