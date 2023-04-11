import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAddressCard,
	faCalendar,
	faDollar,
	faMailBulk,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

const JobCart = ({ salary, contact, location, title, id, handleAddJob }) => {
	return (
		<div className="mr-3">
			<div className="bg-gray-300 p-2 rounded-md">
				<p>
					<span className="my-2">Job Details</span>
				</p>
				<hr />
				{/* <p className="divide-x-4">lol</p> */}
				<p>
					<span className="mr-2">
						<FontAwesomeIcon className="text-violet-500 mx-1" icon={faDollar} />
						Sallery:
					</span>
					{salary}
				</p>
				<p>
					<span className="mr-2">
						<FontAwesomeIcon
							className="text-violet-500 mx-1"
							icon={faCalendar}
						/>
						JobTitle:
					</span>
					{title}
				</p>
				<p className="my-3">
					<span className="mr-2">Contact Information</span>
				</p>
				<hr />
				{/* <p className="divide-y-8 divide-gray-500 divide-solid"></p> */}
				<p>
					<p>
						<span className="mr-2">
							<FontAwesomeIcon
								className="text-violet-500 mx-1"
								icon={faPhone}
							/>
							Phone:
						</span>
						{contact.phone}
					</p>
					<p>
						<span className="mr-2">
							<FontAwesomeIcon
								className="text-violet-500 mx-1"
								icon={faMailBulk}
							/>
							Email:
						</span>
						{contact.email}
					</p>
					<p>
						<span className="mr-2">
							<FontAwesomeIcon
								className="text-violet-500 mx-1"
								icon={faAddressCard}
							/>
							Adress:
						</span>
						{location}
					</p>
				</p>
			</div>
			<button
				className="w-full btn btn-gradiant bg-gradiant my-4 btn-primary"
				onClick={() => handleAddJob(id)}
			>
				Apply Now
			</button>
		</div>
	);
};

export default JobCart;
