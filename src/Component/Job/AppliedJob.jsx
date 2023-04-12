import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobData } from "../../FakeDb/fakeDb";
import Banner from "./Banner";
import JobItem from "./JobItem";

const AppliedJob = () => {
	const [userData, setUserData] = useState(useLoaderData());
	const [applyData, setApplyData] = useState([]);
	useEffect(() => {
		const jobArr = [];
		const localJobdata = getJobData();
		for (const key in localJobdata) {
			const item = userData.find((job) => job.id === key);
			jobArr.push(item);
		}
		console.log(jobArr);
		setApplyData(jobArr);
	}, [userData]);

	return (
		<div>
			<Banner>
				<h2 className="text-2xl font-semibold">Applied Job</h2>
			</Banner>
			<div>
				<div className="flex justify-end">
					<select className="select select-info w-full max-w-xs">
						<option disabled selected>
							Select language
						</option>
						<option>English</option>
						<option>Japanese</option>
						<option>Italian</option>
					</select>
				</div>
				<div className="flex items-center flex-col">
					{userData.map((job) => (
						<JobItem job={job} key={job.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default AppliedJob;
