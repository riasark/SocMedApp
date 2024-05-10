import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import gradientBackground from '../components/GradientBackground';

function LoginPage() {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3030/login', { username, password });
            if (response.data.username === username) {
                console.log(response.data);
                nav(`/home?userId=${response.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div aria-hidden="true" class="flex absolute -top-60 start-1/2 transform -translate-x-1/2">
                <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-full h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-pink-600/50 dark:to-pink-600"></div>
                <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-lavender-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-lavender-900/70 dark:via-pink-700/60 dark:to-pink-600/70"></div>
            </div>
            <div className="max-w-[85rem] px-4 py-2 sm:px-6 lg:px-8 lg:py-20 mx-auto relative z-10">
                {/* <div className="mt-5 max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700"> */}
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-3xl dark:text-neutral-800">
                            Sign In
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-neutral-600">
                            Don't have an account yet?
                        </p>
                        <a className="text-pink-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="http://localhost:3000/createProfile">
                            Sign up here
                        </a>
                    </div>
                </div>

                <div className="mt-5 max-w-lg mx-auto bg-pink-300 border-pink-300 rounded-xl shadow-sm dark:bg-pink-300 dark:border-pink-300">
                    <div className="flex flex-col border rounded-xl p-4 sm:p-4 lg:p-8 dark:border-pink-300">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-y-4">
                                <div>
                                    <label htmlFor="username" className="block text-sm mb-2 dark:text-white">Username</label>
                                    <div className="relative">
                                        <input type="username" id="username" name="username" value={username} onChange={handleUsernameChange} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-pink-500 focus:ring-pink-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="email-error"></input>
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center">
                                        <label htmlFor="password" className="block text-sm mb-2 dark:text-white">Password</label>
                                        <a className="text-sm text-pink-600 decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                                    </div>
                                    <div className="relative">
                                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" required aria-describedby="password-error"></input>
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                            <svg className="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                </div>

                                <div className="flex items-center">
                                    <div className="flex">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-pink-600 focus:ring-pink-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"></input>
                                    </div>
                                    <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">Remember me</label>
                                    </div>
                                </div>

                                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage