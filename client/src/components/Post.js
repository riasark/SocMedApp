function Post(props) {

    const date = new Date(props.time).toLocaleString();
    // date.toDateString();

    return (
    
        <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="/">
        <div class="p-4 md:p-5 flex flex-wrap">
            <div class="pb-5 w-[80px]">
                <div class="relative inline-block">
                <img class="inline-block size-[46px] rounded-full" src={props.hobby_pic} alt="Hobby"></img>
                <span class=" absolute bottom-0 end-0 block p-2 rounded-full transform translate-y-1/2 translate-x-1/2 bg-white dark:bg-neutral-900 dark:ring-neutral-900">
                    <img class="inline-block size-[32px] rounded-full" src={props.pfp} alt="Profile"></img>
                </span>
                </div>
            </div>
            <div class="flex justify-between items-center">
            <div>
                <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                <ol class="flex items-center whitespace-nowrap">
                    <li class="inline-flex items-center">
                        <a class="flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        {props.username}
                        </a>
                        <svg class="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </li>
                    <li class="inline-flex items-center">
                        <a class="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" href="/">
                        {props.hobby}
                        </a>
                    </li>
                    </ol>
                </h3>
                <p class="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                {props.text}
                </p>
            </div>
            </div>
            <div class="ml-auto mt-auto flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500">
                <h1>{date}</h1>
            </div>
        </div>
        </a>


    )
}

export default Post;