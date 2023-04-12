import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobData } from "../../FakeDb/fakeDb";
import Banner from "./Banner";
import JobItem from "./JobItem";

const AppliedJob = () => {
	const loderData = useLoaderData();

	const [userData, setUserData] = useState([]);
	const [applyData, setApplyData] = useState([]);
	useEffect(() => {
		const jobArr = [];
		const localJobdata = getJobData();
		for (const key in localJobdata) {
			const item = loderData.find((job) => job.id === key);
			jobArr.push(item);
		}
		setApplyData(jobArr);
		setUserData(jobArr);
	}, [loderData]);

	const handleChangeValue = (e) => {
		console.log(e.target.value);
		const selectedJob = e.target.value;
		const newUserData = applyData.filter(
			(user) => user.remote_or_onsite === selectedJob
		);
		setUserData(newUserData);
		console.log(userData);
	};

	return (
		<div>
			<Banner>
				<h2 className="text-2xl font-semibold">Applied Job</h2>
			</Banner>
			<div>
				<div className="flex justify-end">
					<select
						className="select select-info w-full max-w-xs"
						onChange={(e) => handleChangeValue(e)}
					>
						<option disabled selected>
							Select Type
						</option>
						<option value={"Remote"}>Remote</option>
						<option value={"Onsite"}>Onsite</option>
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
