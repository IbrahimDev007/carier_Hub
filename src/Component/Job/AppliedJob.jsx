import React from "react";
import Banner from "./Banner";
import JobItem from "./JobItem";

const AppliedJob = () => {
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
                <div className="flex justify-center">
                <JobItem/>
                </div>
                
			</div>
		</div>
	);
};

export default AppliedJob;
