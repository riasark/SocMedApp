<<<<<<< HEAD
function Feed() {
    return (
        <div className="relative"><h1>HI</h1></div>
=======
import Post from "./Post"
import greendale from "../icons/greendale-flag.jpg"
import troy from "../icons/troy.jpg"
import annie from "../icons/annie.jpg"
import britta from "../icons/britta.jpg"

function Feed() {

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div class="max-w-[85rem] p-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-3 sm:gap-6">
                        <Post pfp={troy} hobby_pic={greendale} username="@troy_barnes" hobby="Greendale Community College" text="sometimes I think I lost something really important to me and it turns out I already ate it"></Post>
                        <Post pfp={annie} hobby_pic={greendale} username="@AnnieEdison" hobby="Greendale Community College" text="I hope you've got an army of raisins 'cause I've got a major scoop!"></Post>
                        <Post pfp={britta} hobby_pic={greendale} username="@britta-no-filter-perry" hobby="Greendale Community College" text="if loving worms is stupid I don't wanna be smart!!!!!!!"></Post>
                    </div>
                </div>
            </div>
        </div>
>>>>>>> page-test
    )
}

export default Feed;