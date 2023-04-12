const customLoader = async () => {
    const fetchCatagory = await fetch('/catagory.json');
    const catagoryData = await fetchCatagory.json();
    const fetchjob = await fetch('/job.json');
    const jobData = await fetchjob.json();

    return { catagoryData, jobData }
}


export default customLoader;