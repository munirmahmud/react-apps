import React from 'react';

const JobList = ({job, handleTagClick}) => {
    const langAndTools = [job.role, job.level, ...job.languages, ...job.tools];

    return (
        <div className={`flex flex-col bg-white shadow-md my-16 mx-10 p-6 rounded ${job.featured && 'border-l-4 border-teal-400 border-solid'} md:flex-row md:my-5`}>
            <div className="mr-5 -mt-16 mb-4 md:mt-0 md:mb-0">
                <img className="h-20 w-20 md:h-full md:w-full" src={job.logo} alt={job.company} />
            </div>

            <div className="flex justify-center flex-col">
                <h3 className="font-bold text-teal-400">
                    <span className="mr-3">{job.company}</span>
                    {job.isNew && <span className="bg-teal-400 text-teal-100 font-bold rounded-full py-1 px-2 ml-2 uppercase">New</span>}
                    {job.featured && <span className="bg-gray-900 text-white font-bold rounded-full py-1 px-2 ml-3 uppercase">Featured</span>}
                </h3>
                <h2 className="font-bold text-xl">{job.position}</h2>
                <p className="text-gray-700">
                    {job.postedAt} &bull; {job.contract} &bull; {job.location}
                </p>
            </div>

            <div className="flex items-center mt-4 pt-4 border-t border-gray-500 border-solid md:ml-auto md:border-0 md:mt-0 md:pt-0">
                {langAndTools ? langAndTools.map((langAndTool, index) => <span key={index} className="bg-teal-100 hover:bg-teal-500 hover:text-white text-teal-600 font-bold ml-4 px-3 py-2 rounded cursor-pointer" onClick={() => handleTagClick(langAndTool)}>{langAndTool}</span>) : ''}
            </div>
        </div>
    )
}

export default JobList;
