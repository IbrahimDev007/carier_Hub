import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faDollar } from "@fortawesome/free-solid-svg-icons";

const JobItem = () => {
	return (
		<div className="card card-side bg-base-100 shadow-xl w-[80vw] my-3">
			<figure>
				<img src="https://i.ibb.co/dDTpqdn/Vector-1.png" alt="Movie" />
			</figure>
			<div className="card-body flex flex-row items-center justify-between">
				<div>
					<h2 className="card-title">Technical Database Engineer</h2>
					<p className="text-gray-600">Google LLC</p>
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
						<span><FontAwesomeIcon  className="text-gray-600"
                        icon={faDollar} /></span>
						sallery
					</p>
				</div>
				<div className="card-actions">
					<button className="btn btn-primary bg-gradiant ">Watch</button>
				</div>
			</div>
		</div>
	);
};

export default JobItem;
