import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const JobItem = ({ job }) => {
	const navigate = useNavigate();
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
	return (
		<div className="card card-side bg-base-100 shadow-xl w-[80vw] my-3">
			<figure>
				<img
					src={company_logo}
					alt="Movie"
					className=" w-40 h-20 object-contain m-2"
				/>
			</figure>
			<div className="card-body flex flex-row items-center justify-between">
				<div>
					<h2 className="card-title">{job_title}</h2>
					<p className="text-gray-600">{company_name}</p>
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
							<FontAwesomeIcon className="text-gray-600 mx-2" icon={faDollar} />
						</span>
						{salary}
					</p>
				</div>
				<div className="card-actions">
					<Link to={`/job/${id}`}>
						<button
							className="btn btn-primary bg-gradiant "
							// onClick={() => navigate(`job/${id}`)}
						>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default JobItem;
