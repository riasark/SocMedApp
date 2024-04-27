import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateProfilePage() {
    const nav = useNavigate();
    const [chosen, setChosen] = useState('');
    const [profilepic, setProfilePic] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const pfps = ['annie', 'boat', 'britta', 'camera', 'coolgirl', 'coolguy', 'man', 'troy', 'woman'];
    const hobbies = ["Art", "Gardening", "Stem", "Rock Climbing", "Music", "Movies", "Sports"];
    const hid = [
    '6621c71b006491c6a2a20d58', 
    '6621c642006491c6a2a20d57', 
    '6621c777006491c6a2a20d5a', 
    '6622837c032c79bd9eb4fdf1',
    '6621c750006491c6a2a20d59',
    '6621c7b2006491c6a2a20d5c',
    '6621c795006491c6a2a20d5b'
    ];

    const submitUser =  async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:3030/users/newuser`, {firstname, lastname, userName, password, chosen, profilepic});
            console.log(response);
            if(response.data.username === userName){
                nav('/login');
            }
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-20 mx-auto">
            <div className="max-w-xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-800">
                        Create Your User Profile
                    </h1>
                    <p className="mt-1 text-gray-600 dark:text-neutral-600">
                        Join An Endless Amount of Hobbies!
                    </p>
                </div>
            </div>

            <div className="mt-5 max-w-lg mx-auto">
                {/* <!-- Card --> */}
                <div className="text-center">
                    <div className="flex flex-col border rounded-xl p-4 sm:p-4 lg:p-8 dark:border-neutral-700">
                        <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-600">
                            Fill With Your Credentials
                        </h2>

                        <form>
                            <div className="grid gap-2 lg:gap-2">
                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">First Name</label>
                                        <input type="text" onChange={(e) => setFirstName(e.target.value)}  name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Last Name</label>
                                        <input type="text" onChange={(e) => setLastName(e.target.value)}  name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Username</label>
                                        <input type="text" onChange={(e) => setUserName(e.target.value)}  name="hs-email-contacts-1" id="hs-email-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label  className="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Password</label>
                                        <input type="text" onChange={(e) => setPassword(e.target.value)}  name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700">Select a hobby</label>
                                    <select onChange={(e) => setChosen(e.target.value)} id="communities" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Choose a hobby to start!</option>
                                        {hobbies.map((hobby, index) => {
                                            return <option key={hid[index]} value={hid[index]}>{hobby}</option>
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-neutral-700">Select a profile picture</label>
                                    <select onChange={(e) => setProfilePic(e.target.value)} id="profile-pic" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Choose a profile picture</option>
                                        {pfps.map((pfp, index) => {
                                            return <option key={index} value={pfp}>{pfp}</option>
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* <!-- End Grid --> */}

                            <div className="mt-6 grid">
                                <button onClick={submitUser} type="submit"  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit Profile</button>
                            </div>
                        </form>

                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </div>
    )
}

export default CreateProfilePage;