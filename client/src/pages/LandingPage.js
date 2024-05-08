import React from "react";

function LandingPage() {
    return (
        // < !--Hero -- >
        <div class="relative">
            {/* <!-- Gradients --> */}
            <div aria-hidden="true" class="flex absolute -top-60 start-1/2 transform -translate-x-1/2">
                <div class="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-full h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-pink-600 dark:to-pink-600"></div>
                <div class="bg-gradient-to-tl from-blue-50 via-blue-100 to-lavender-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-lavender-900/70 dark:via-pink-700/60 dark:to-pink-600/70"></div>
            </div>
            {/* <!-- End Gradients --> */}

            <div class="relative z-10">
                <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-16">
                    <div class="max-w-2xl text-center mx-auto my-20">
                        <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-pink-600 to-pink-600 text-transparent dark:from-pink-300 dark:to-pink-600">
                            A New Way to Connect With People
                        </p>

                        {/* <!-- Title --> */}
                        <div class="mt-6 max-w-4xl">
                            <h1 class="block font-serif text-pink-300 text-8xl md:text-8xl lg:text-9xl">
                                Hobbify
                            </h1>
                        </div>
                        {/* <!-- End Title --> */}

                        {/* <!-- Buttons --> */}
                        <div class="mt-8">
                            <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-pink-600 text-white hover:bg-pink-700 disabled:opacity-50 disabled:pointer-events-none" href="/login">
                                Get started
                                <svg class="flex-shrink-0 size-4" xmlns="localhost:3000/login" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </a>
                        </div>
                        {/* <!-- End Buttons --> */}
                    </div>
                </div>
            </div>
        </div>
        // <!--End Hero-- >
    )
}

export default LandingPage;