import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { addedjobLocal, getJobData } from "../../FakeDb/fakeDb";
import Header from "../Header/Header";
import Banner from "./Banner";
import JobCart from "./JobCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const JobDesc = () => {
	const Jobdata = useLoaderData();
	const { id } = useParams();

	const job = Jobdata.find((job) => id === job.id);
	const {
		job_description,
		job_responsibility,
		educational_requirements,
		experiences,
		salary,
		job_title,
		contact_information,
		location,
	} = job;
	const handleAddJob = (id) => {
		const handleData = getJobData();
		const exist = id in handleData;
		if (exist) {
			toast("Wow so easy!");
		} else {
			addedjobLocal(id);
		}
	};

	return (
		<div>
			<Header />
			<Banner>
				<h2 className="text-2xl font-semibold">Job Details</h2>
			</Banner>

			<div className="grid grid-cols-1  lg:grid-cols-[3fr,1fr]  gap-4 my-3">
				<div className="bg-violet-100 flex justify-center flex-col ml-3 p-4 rounded-md">
					<p className="my-2">
						<span className="font-bold">Job Description:</span>{" "}
						{job_description}
					</p>
					<p className="my-2">
						<span className="font-bold">Job Responsibility:</span>
						{job_responsibility}
					</p>
					<div className="text-left ">
						<span className="my-2">Educational Requirements:</span>
						<p>{educational_requirements}.</p>
						<span className="my-2">Experience:</span>
						<p className="my-2">{experiences}</p>
					</div>
				</div>
				<JobCart
					salary={salary}
					contact={contact_information}
					location={location}
					title={job_title}
					handleAddJob={handleAddJob}
					id={id}
				/>
			</div>
		</div>
	);
};

export default JobDesc;
