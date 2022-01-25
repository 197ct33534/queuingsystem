import React from "react";
import { useRoutes } from "react-router-dom";
import PageLogin from "../Pages/user/PageLogin";
import PageForgot from "../Pages/user/PageForgot";

import Info from "../Pages/Home/Info";
import ChartDashBoard from "../Pages/Home/ChartDashBoard";

import DeviceManager from "../Pages/Device/DeviceManager";
import AddDevice from "../Pages/Device/AddDevice";
import DetailDevice from "../Pages/Device/DetailDevice";
import UpdateDevice from "../Pages/Device/UpdateDevice";

import ServiceManager from "../Pages/Service/ServiceManager";
import AddService from "../Pages/Service/AddService";
import DetailService from "../Pages/Service/DetailService";
import ProtectedRouters from "../ProtectedRouters";

// <div className="grid wide">
//     <Routes>
//         <Route path="/" element={<Home />}>
//             <Route
//                 path="dashboard"
//                 element={<ChartDashBoard />}
//             ></Route>
//             <Route path="info" element={<Info />}></Route>
//             <Route path="equipment" element={<DeviceManager />}>
//                 <Route path=":detail" element={<DetailDevice />}>
//                     <Route path=":id" element={<DetailDevice />} />
//                 </Route>
//             </Route>

//             <Route path="add" element={<AddDevice />}></Route>
//             <Route path="detail" element={<DetailDevice />}>
//                 <Route path=":id" element={<DetailDevice />} />
//             </Route>
//             <Route path="update" element={<UpdateDevice />}>
//                 <Route path=":id" element={<UpdateDevice />} />
//             </Route>

//             <Route path="service" element={<ServiceManager />}></Route>
//             <Route path="addService" element={<AddService />}></Route>
//             <Route path="detailService" element={<DetailService />}>
//                 <Route path=":id" element={<DetailService />} />
//             </Route>
//         </Route>
//         <Route path="login" element={<PageLogin />}></Route>
//         <Route path="forgotPass" element={<PageForgot />}></Route>
//         <Route path="newPass" element={<PageForgot restpass />} />
//     </Routes>
// </div>
const Router = () => {
    let routes = useRoutes([
        { path: "/", element: <PageLogin /> },
        // user
        {
            path: "/user",
            children: [
                { path: "forgotPass", element: <PageForgot /> },
                { path: "newPass", element: <PageForgot restpass /> },
                { path: "", element: <PageLogin /> },
            ],
        },
        {
            element: <ProtectedRouters />,
            children: [
                { path: "/dashboard", element: <ChartDashBoard /> },
                { path: "/info", element: <Info /> },

                // equipment
                {
                    path: "/equipment",
                    children: [
                        { path: "add", element: <AddDevice /> },
                        {
                            path: "update",
                            children: [
                                { path: ":id", element: <UpdateDevice /> },
                            ],
                        },
                        {
                            path: "detail",
                            children: [
                                { path: ":id", element: <DetailDevice /> },
                            ],
                        },
                        { path: "", element: <DeviceManager /> },
                    ],
                },
                //service
                {
                    path: "/service",
                    children: [
                        { path: "add", element: <AddService /> },
                        // {
                        //     path: "update",
                        //     children: [{ path: ":id", element: <UpdateDevice /> }],
                        // },
                        {
                            path: "detail",
                            children: [
                                { path: ":id", element: <DetailService /> },
                            ],
                        },
                        { path: "", element: <ServiceManager /> },
                    ],
                },
            ],
        },
        {
            path: "*",
            element: "404 not found",
        },
    ]);
    return routes;
};

export default Router;
