import React from 'react';

const LanguageSelect = () => {
    return (
        <div className="">
            <select
                id="language-select"
                className="py-2 px-1 text-base border-gray-300 rounded-md focus:outline-none"
                defaultValue="English"
            >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
            </select>
        </div>
    );
};

export default LanguageSelect;
