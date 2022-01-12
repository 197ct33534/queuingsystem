import React, { memo } from "react";
import UserLogin from "./UserLogin";
import UserPicture from "./UserPicture";

import pic2 from "../../Assets/images/Frame.png";
const PageForgot = ({ restpass }) => {
    return (
        <div className="login row no-gutters">
            {restpass ? (
                <UserLogin forgot={false} restpass />
            ) : (
                <UserLogin forgot={false} />
            )}

            <UserPicture pic={pic2}></UserPicture>
        </div>
    );
};

export default memo(PageForgot);
