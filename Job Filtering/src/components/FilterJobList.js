import React from 'react';

const FilterJobList = ({filters, onClickRemoveTag, clearAllFilterTags}) => {

    return (
        <div className="bg-white flex items-center shadow-md -mt-20 relative z-10 mb-12 mx-10 px-6 py-5 rounded">
            <div className="flex flex-wrap sm:flex-row">
                {filters.map( (tag, index) => (
                    <div key={index} className="flex items-center bg-teal-100 text-teal-600 font-bold mr-4 pl-3 rounded mb-4 md:mb-0">
                        <span>{tag}</span>
                        <span className="bg-teal-500 p-2 text-white cursor-pointer ml-2 text-2xl leading-none rounded-r hover:bg-black" onClick={() => onClickRemoveTag(tag)}>&times;</span>
                    </div>
                ))}
            </div>

            <span className="font-bold text-gray-600 text-base hover:underline hover:text-teal-500 ml-auto cursor-pointer" onClick={clearAllFilterTags}>Clear</span>
        </div>
    );
}

export default FilterJobList
