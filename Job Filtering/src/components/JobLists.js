import React, { useEffect, useState } from 'react';
import data from '../assets/data.json';
import FilterJobList from './FilterJobList';
import JobList from './JobList';


const JobLists = () => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        setJobs(data);
    }, []);

    const filterByTags = ({role, level, languages, tools}) => {
        if(filters.length === 0) {
            return true;
        }
        
        const tags = [role, level];

        languages.length && tags.push(...languages);
        tools.length && tags.push(...tools);

        return filters.every(filter => tags.includes(filter));        
    }

    const filteredJobs = jobs.filter(filterByTags);

    const handleTagClick = (tag) => {
        if(filters.includes(tag)) return;

        setFilters([...filters, tag]);
    };

    const clearAllFilterTags = () => {
        setFilters([]);
    }

    const onClickRemoveTag = passedTag => {
        setFilters(filters.filter(tag => tag !== passedTag));
    };

    return (
        <>
            {filters.length > 0 && <FilterJobList filters={filters} onClickRemoveTag={onClickRemoveTag} clearAllFilterTags={clearAllFilterTags} />}

            <div className="job-lists">
                {jobs.length === 0 ? (
                    <h3>Jobs are loading...</h3>
                ) : (
                    filteredJobs.map(job => <JobList key={job.id} job={job} handleTagClick={handleTagClick} />)
                )}
            </div>
        </>
    )
};


export default JobLists;
