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
    const hobbies = [
        "Art",
        "Gardening",
        "Stem",
        "Rock Climbing",
        "Music",
        "Movies",
        "Sports",
        "Astronomy",
        "Birdwatching",
        "Cooking",
        "Fishing",
        "Mindfulness",
        "Photography",
        "Traveling"
    ];
    const hid = [
        '6621c71b006491c6a2a20d58',
        '6621c642006491c6a2a20d57',
        '6621c777006491c6a2a20d5a',
        '6622837c032c79bd9eb4fdf1',
        '6621c750006491c6a2a20d59',
        '6621c7b2006491c6a2a20d5c',
        '6621c795006491c6a2a20d5b',
        '6631c0186d298a3e4716fa67',
        '6631bfbb6d298a3e4716fa66',
        '6631be8a6d298a3e4716fa60',
        '6631c03c6d298a3e4716fa69',
        '6631bef06d298a3e4716fa64',
        '6631beba6d298a3e4716fa62',
        '6631bf9c6d298a3e4716fa65'
    ];

    const submitUser = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3030/users/newuser`, { firstname, lastname, userName, password, chosen, profilepic });
            console.log(response);
            if (response.data.username === userName) {
                nav('/login');
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div aria-hidden="true" class="flex absolute -top-60 start-1/2 transform -translate-x-1/2">
                <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-full h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-pink-600/50 dark:to-pink-600"></div>
                <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-lavender-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-lavender-900/70 dark:via-pink-700/60 dark:to-pink-600/70"></div>
            </div>
            <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-10 mx-auto relative z-10">
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

                <div className="mt-5 max-w-lg mx-auto bg-pink-300 border-pink-300 rounded-xl shadow-sm dark:bg-pink-300 dark:border-pink-300">
                    {/* <!-- Card --> */}
                    <div className="flex flex-col border rounded-xl p-4 sm:p-4 lg:p-8 dark:border-neutral-700">
                        <h2 className="mb-8 text-xl text-center font-semibold text-pink-600 dark:text-neutral-600">
                            Fill With Your Credentials
                        </h2>

                        <form>
                            <div className="grid gap-2 lg:gap-2">
                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label className="block text-sm mb-2 text-white">First Name</label>
                                        <input type="text" onChange={(e) => setFirstName(e.target.value)} name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm text-white">Last Name</label>
                                        <input type="text" onChange={(e) => setLastName(e.target.value)} name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                {/* <!-- Grid --> */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label className="block mb-2 text-sm font text-white">Username</label>
                                        <input type="text" onChange={(e) => setUserName(e.target.value)} name="hs-email-contacts-1" id="hs-email-contacts-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label className="block mb-2 text-sm font text-white">Password</label>
                                        <input type="text" onChange={(e) => setPassword(e.target.value)} name="hs-phone-number-1" id="hs-phone-number-1" className="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                <div>
                                    <label className="block mb-2 text-sm font text-white">Select a hobby</label>
                                    <select onChange={(e) => setChosen(e.target.value)} id="communities" className="bg-white-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option>Choose a hobby to start!</option>
                                        {hobbies.map((hobby, index) => {
                                            return <option key={hid[index]} value={hid[index]}>{hobby}</option>
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font text-white">Select a profile picture</label>
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
                                <button onClick={submitUser} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">Submit Profile</button>
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