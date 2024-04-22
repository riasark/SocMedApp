function Post(props) {
    return (
    
        <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800" href="/">
        <div class="p-4 md:p-5">
            <div class="flex justify-between items-center">
            <div>
                <h3 class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                {props.username}
                </h3>
                <p class="text-sm text-gray-500 dark:text-neutral-500">
                {props.text}
                </p>
            </div>
            </div>
        </div>
        </a>


    )
}

export default Post;