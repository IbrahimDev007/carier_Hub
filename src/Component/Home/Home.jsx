import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroContent from "../HeroContent/HeroContent";
import Jobcatagory from "../JobCatgory/Jobcatagory";

const Home = () => {
	const catagory = useLoaderData();

	return (
		<>
			<HeroContent />
			<div className=" mt-6">
				<div className="leading-snug text-center my-8">
					<h1 className="text-3xl">Job Category List</h1>
					<p className="text-lg">
						Explore thousands of job opportunities with all the information you
						need. Its your future
					</p>
				</div>
				<div className="flex  flex-col justify-center items-center lg:px-10 lg:flex-row">
					{catagory.map((catagory, index) => (
						<Jobcatagory key={index} catagory={catagory} />
					))}
				</div>
			</div>
		</>
	);
};

export default Home;
