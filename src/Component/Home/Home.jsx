import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import HeroContent from "../HeroContent/HeroContent";
import FetureJob from "../Job/FetureJob";
import Jobcatagory from "../JobCatgory/Jobcatagory";

const Home = () => {
	const { catagoryData, jobData } = useLoaderData();
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<HeroContent />
			<div className=" mt-6">
				<div className="leading-snug text-center my-8">
					<h1 className="text-3xl font-bold">Job Category List</h1>
					<p className="text-lg">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className="flex  flex-col justify-center items-center lg:px-10 gap-3 lg:flex-row">
					{catagoryData.map((catagory, index) => (
						<Jobcatagory key={index} catagory={catagory} />
					))}
				</div>
				<div className=" mt-6">
					<div className="leading-snug text-center my-8">
						<h1 className="text-3xl font-bold">Featured Jobs</h1>
						<p className="text-lg">
							Explore thousands of job opportunities with all the information
							you need. Its your future
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 mt-8 justify-items-center items-center">
						{toggle
							? jobData
									.slice(0, 4)
									.map((job) => <FetureJob key={job.id} job={job} />)
							: jobData.map((job) => <FetureJob key={job.id} job={job} />)}
					</div>
					<div className="flex justify-center">
						<button
							className="btn btn-primary bg-gradiant  "
							onClick={() => setToggle(!toggle)}
						>
							{toggle ? "See All" : "See Less"}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
