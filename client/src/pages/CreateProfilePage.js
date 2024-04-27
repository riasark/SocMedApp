import React from "react";
import DropDown from "../components/DropDown";
import axios from 'axios';

function CreateProfilePage() {

    return (
        <div class="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-2 mx-auto">
            <div class="max-w-xl mx-auto">
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-800">
                        Create Your User Profile
                    </h1>
                    <p class="mt-1 text-gray-600 dark:text-neutral-600">
                        Join An Endless Amount of Communities!
                    </p>
                </div>
            </div>

            <div class="mt-5 max-w-lg mx-auto">
                {/* <!-- Card --> */}
                <div class="text-center">
                    <div class="flex flex-col border rounded-xl p-4 sm:p-4 lg:p-8 dark:border-neutral-700">
                        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-600">
                            Fill With Your Credentials
                        </h2>

                        <form>
                            <div class="grid gap-2 lg:gap-2">
                                {/* <!-- Grid --> */}
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label for="hs-firstname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">First Name</label>
                                        <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1" class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label for="hs-lastname-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Last Name</label>
                                        <input type="text" name="hs-lastname-contacts-1" id="hs-lastname-contacts-1" class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                {/* <!-- Grid --> */}
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    <div>
                                        <label for="hs-email-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Username</label>
                                        <input type="text" name="hs-email-contacts-1" id="hs-email-contacts-1" class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>

                                    <div>
                                        <label for="hs-phone-number-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Password</label>
                                        <input type="text" name="hs-phone-number-1" id="hs-phone-number-1" class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" />
                                    </div>
                                </div>
                                {/* <!-- End Grid --> */}

                                <div>
                                    <DropDown></DropDown>
                                </div>
                                <div>
                                    <label for="hs-about-contacts-1" class="block mb-2 text-sm text-gray-700 font-medium dark:text-neutral-700">Bio</label>
                                    <textarea id="hs-about-contacts-1" name="hs-about-contacts-1" rows="4" class="py-3 px-4 block w-full border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral dark:border-neutral-700 dark:text-neutral-800 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"></textarea>
                                </div>
                            </div>
                            {/* <!-- End Grid --> */}

                            <div class="mt-6 grid">
                                <button type="submit" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Submit Profile</button>
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