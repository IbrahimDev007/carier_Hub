import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import customLoader from "./Loder/loader";
import JobDesc from "./Component/Job/JobDesc";
import AppliedJob from "./Component/Job/AppliedJob";
import Statistic from "./Component/Statistic/statistic";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: customLoader,
			},
			{
				path: "/statistic",
				element: <Statistic />,
			},

			{
				path: "/appliedJob",
				element: <AppliedJob />,
				loader: () => fetch("/job.json"),
			},
		],
	},
	{
		path: "/job/:id",
		element: <JobDesc />,
		loader: () => fetch("/job.json"),
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
