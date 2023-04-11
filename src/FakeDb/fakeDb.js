import { json } from "react-router-dom";

const addedjobLocal = (id) => {
    const jobcart = getJobData()
    let quantity = jobcart[id]
    if (!quantity) {
        jobcart[id] = 1;
        localStorage.setItem('jobcart', JSON.stringify(jobcart))
    }
    else return;

}

const getJobData = () => {
    let jobData = {};
    const jobcartData = localStorage.getItem('jobcart')
    if (jobcartData) {
        jobData = JSON.parse(jobcartData)
    }

    return jobData

}


export { addedjobLocal, getJobData }