import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";

const FetureJob = () => {
	return (
		<div className="card w-96 shadow-md mx-3">
			<div className="px-10 pt-10 ">
				<img
					src="https://i.ibb.co/C0gd6cN/google-1-1-1.png"
					alt=""
					className="rounded-xl text-left"
				/>
			</div>
			<div className="card-body ">
				<h2 className="card-title">lala</h2>
				<p className="text-slate-500">jobs are available</p>
				<div className="flex my-2">
					<button className="btn btn-outline btn-primary border-violet-800 border-2 btn-sm mr-4">
						Remote
					</button>
					<button className="btn btn-outline btn-primary border-violet-800 border-2 btn-sm mr-4">
						FullTimme
					</button>
				</div>
				<p className="flex">
					<span>
						<img src="https://i.ibb.co/tMzPpHJ/Location-Icon.png" alt="" />
					</span>
					<span>
						<FontAwesomeIcon className="text-gray-600" icon={faDollar} />
					</span>
					sallery
				</p>
				<div className="card-actions">
					<button className="btn btn-primary bg-gradiant ">Watch</button>
				</div>
               
			</div>
		</div>
	);
};

export default FetureJob;
