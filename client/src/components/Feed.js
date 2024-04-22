import Post from "./Post"

function Feed() {
    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                        <Post username="@troy_barnes" text="sometimes I think I lost something really important to me and it turns out I already ate it"></Post>
                        <Post username="@AnnieEdison" text="I hope you've got an army of raisins 'cause I've got a major scoop!"></Post>
                        <Post username="@britta-no-filter-perry" text="if loving worms is stupid I don't wanna be smart!!!!!!!"></Post>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feed;