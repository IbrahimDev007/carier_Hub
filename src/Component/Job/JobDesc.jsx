import React from "react";
import Banner from "./Banner";
import JobCart from "./JobCart";


const JobDesc = () => {
	return (
		<div>
			<Banner>
				<h2 className="text-2xl font-semibold">Job Details</h2>
			</Banner>

			<div className="grid grid-cols-1  lg:grid-cols-2 lg:grid-cols-[3fr,1fr]  gap-4 my-3">
				<div className="bg-violet-100 flex justify-center flex-col ml-3 p-4 rounded-md">
					<p className="my-2">
						<span className="font-bold">Job Description:</span> A UI/UX (User
						Interface/User Experience) designer is responsible for designing and
						creating engaging and effective interfaces for software and web
						applications. This includes designing the layout, visual design, and
						interactivity of the user interface.
					</p>
					<p className="my-2">
						<span className="font-bold">Job Responsibility:</span>
						Collaborating with cross-functional teams: UI/UX designers often
						work closely with other teams, including product management,
						engineering, and marketing, to ensure that the user interface is
						aligned with business and technical requirements. You will need to
						be able to effectively communicate your design ideas and gather
						feedback from other team members.
					</p>
					<div className="text-left ">
						<p className="font-bold my-2">Educational Requirements:</p>
						<p>Bachelor degree to complete any reputational university.</p>
						<p className="font-bold my-2">Experience:</p>
						<p className="my-2">2-3 Years in this field.</p>
					</div>
				</div>
				<JobCart/>
			</div>
		</div>
	);
};

export default JobDesc;
