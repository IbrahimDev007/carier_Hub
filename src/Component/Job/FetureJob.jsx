import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const FetureJob = ({ job }) => {
	const {
		company_logo,
		id,
		job_title,
		company_name,
		fulltime_or_parttime,
		salary,
		remote_or_onsite,
		location,
	} = job;

	const navigate = useNavigate();
	return (
		<div className="card w-96 shadow-md mx-3">
			<div className="px-10 pt-10 ">
				<img
					src={company_logo}
					alt=""
					className="rounded-xl text-left w-40 h-14 "
				/>
			</div>
			<div className="card-body ">
				<h2 className="card-title">{job_title}</h2>
				<p className="text-slate-500">{company_name}</p>
				<div className="flex my-2">
					<button className="btn btn-outline btn-primary border-violet-800 border-2 btn-sm mr-4">
						{remote_or_onsite}
					</button>
					<button className="btn btn-outline btn-primary border-violet-800 border-2 btn-sm mr-4">
						{fulltime_or_parttime}
					</button>
				</div>
				<p className="flex">
					<span>
						<img src="https://i.ibb.co/tMzPpHJ/Location-Icon.png" alt="" />
					</span>
					{location}
					<span>
						<FontAwesomeIcon className="text-gray-600 ml-1" icon={faDollar} />
					</span>
					sallery:{salary}
				</p>
				<div className="card-actions">
					<button
						className="btn btn-primary bg-gradiant "
						onClick={() => navigate(`job/${id}`)}
					>
						View Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default FetureJob;
