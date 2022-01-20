import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLogin from "../Pages/user/PageLogin";
import PageForgot from "../Pages/user/PageForgot";
import Home from "../Pages/Home/Home";
import Info from "../Pages/Home/Info";
import ChartDashBoard from "../Pages/Home/ChartDashBoard";

import DeviceManager from "../Pages/Device/DeviceManager";
import AddDevice from "../Pages/Device/AddDevice";
import DetailDevice from "../Pages/Device/DetailDevice";
import UpdateDevice from "../Pages/Device/UpdateDevice";
import ServiceManager from "../Pages/Service/ServiceManager";
const Router = () => {
    return (
        <div className="grid wide">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route
                        path="dashboard"
                        element={<ChartDashBoard />}
                    ></Route>
                    <Route path="info" element={<Info />}></Route>
                    <Route path="equipment" element={<DeviceManager />}></Route>

                    <Route path="add" element={<AddDevice />}></Route>
                    <Route path="detail" element={<DetailDevice />}>
                        <Route path=":id" element={<DetailDevice />} />
                    </Route>
                    <Route path="update" element={<UpdateDevice />}>
                        <Route path=":id" element={<UpdateDevice />} />
                    </Route>

                    <Route path="service" element={<ServiceManager />}></Route>
                </Route>
                <Route path="login" element={<PageLogin />}></Route>
                <Route path="forgotPass" element={<PageForgot />}></Route>
                <Route path="newPass" element={<PageForgot restpass />} />
            </Routes>
        </div>
    );
};

export default Router;
