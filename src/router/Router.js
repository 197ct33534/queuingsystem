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

import RandomManager from "../Pages/Random/RandomManager";
import AddRandom from "../Pages/Random/AddRandom";
import RandomDetail from "../Pages/Device/RandomDetail";

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
                            path: "detailRandom",
                            children: [
                                { path: ":id", element: <RandomDetail /> },
                            ],
                        },
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
                        {
                            path: "add",
                            element: (
                                <AddService
                                    pathCancel="/service"
                                    pathSubmit="/service"
                                />
                            ),
                        },
                        {
                            path: "update",
                            children: [
                                {
                                    path: ":id",
                                    element: (
                                        <AddService
                                            pathCancel="/service"
                                            pathSubmit="/service"
                                            update
                                        />
                                    ),
                                },
                            ],
                        },
                        {
                            path: "detail",
                            children: [
                                { path: ":id", element: <DetailService /> },
                            ],
                        },
                        { path: "", element: <ServiceManager /> },
                    ],
                },
                {
                    path: "/randomNumber",
                    children: [
                        { path: "add", element: <AddRandom /> },
                        { path: "", element: <RandomManager /> },
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
