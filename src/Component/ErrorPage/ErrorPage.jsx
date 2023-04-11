import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
			<h1 className="text-9xl font-extrabold text-white tracking-widest">
				{error.status}
			</h1>
			<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
				{error.statusText}
			</div>
			<button className="mt-5">
				<p className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
					<span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"></span>

					<span
						className="relative block px-8 py-3 bg-[#1A2238] border border-current"
						onClick={() => navigate(-1)}
					>
						Go Back
					</span>
				</p>
			</button>
			<div className="text-white m-4 py-2 text-2xl ">{error.error.message}</div>
		</div>
	);
};

export default ErrorPage;
