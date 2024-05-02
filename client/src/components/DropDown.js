import React from "react";

function DropDown() {

    const hobbies = ["Art", "Gardening", "Stem", "Rock Climbing", "Music", "Movies", "Sports"];

    return (
        <form className="mt-2 max-w-lg mx-auto">
            <label for="communities" className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700">Select an option</label>
            <select id="communities" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option select>Choose a hobby to start!</option>
                {hobbies.map((hobby) => {
                    return <option value={hobby}>{hobby}</option>
                })}
            </select>
        </form>
    )
}

export default DropDown;