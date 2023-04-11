import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faCalendar, faDollar, faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

const JobCart = () => {
    return (
        <div className="mr-3">
        <div className="bg-gray-300 p-2 rounded-md">
          <p>
            <span className="my-2">Job Details</span>
          </p>
          <hr />
          {/* <p className="divide-x-4">lol</p> */}
          <p><span > <FontAwesomeIcon className="text-violet-500 mx-1" icon={faDollar} />Sallery:</span>lore</p>
          <p><span><FontAwesomeIcon className="text-violet-500 mx-1" icon={faCalendar} />JobTitle:</span>lore</p>
          <p className="my-3"><span>Contact Information</span></p>
          <hr />
          {/* <p className="divide-y-8 divide-gray-500 divide-solid"></p> */}
          <p>
          <p><span><FontAwesomeIcon className="text-violet-500 mx-1" icon={faPhone} />Phone:</span>lore</p>
          <p><span><FontAwesomeIcon className="text-violet-500 mx-1" icon={faMailBulk} />Email:</span>lore</p>
          <p><span><FontAwesomeIcon className="text-violet-500 mx-1" icon={faAddressCard} />Adress:</span>lore</p>
          </p>
        </div>
        <button className="w-full btn btn-gradiant bg-gradiant my-4 btn-primary">
            Apply Now
        </button>
    </div>
    );
};

export default JobCart;