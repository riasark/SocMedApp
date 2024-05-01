import '../styles/Calendar.css';
import CalendarWeek from "./CalendarWeek";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


function CalendarComponent() {

    const location = useLocation()

    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');

    function generateCalendar(year, month) {
        const calendar = [];
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the total number of days in the month
        const firstDayOfMonth = new Date(year, month, 1).getDay(); // Get the day of the week for the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        
        // let currentDate = 1; // Start with the first day of the month
        const startingDate = new Date(year, month, 1 - firstDayOfMonth);

        
        // Generate each week
        for (let week = 0; week < 5; week++) {
            const weekObj = {};
    
            // Generate each day in the week
            for (let day = 0; day < 7; day++) {
                const currentDate = startingDate.getDate();
                const currentMonth = startingDate.getMonth();
    
                if (currentMonth !== month) {
                    // Day belongs to the previous or next month
                    weekObj[`day${day + 1}`] = { active: false, day: currentDate };
                } else {
                    // Day belongs to the current month
                    weekObj[`day${day + 1}`] = { active: true, day: currentDate };
                }
    
                startingDate.setDate(currentDate + 1); // Move to the next day
            }
    
            calendar.push(weekObj);
        }
    
        return calendar;
    }

    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    const general = {month: "numeric", year: "numeric"}

    let current = new Date().toLocaleDateString('en-us',general);
    current = current.split("/");

    const today = new Date().toLocaleDateString('en-us', options);
    const date = today.split(", ");
    const month = today.split(" ")[1];

    const [cal, setCal] = useState(generateCalendar(parseInt(current[1]), parseInt(current[0])));
    
    const [postDays, setPostDays] = useState({});

    const [hids, setHids] = useState([]);
    // const [temp, setTemp] = useState({});

    const hobbyColors = {
        '6621c642006491c6a2a20d57': ["Gardening", "bg-lime-500"],
        '6621c71b006491c6a2a20d58': ["Art", "bg-purple-300"],
        '6621c750006491c6a2a20d59': ["Music", "bg-amber-300"],
        '6621c777006491c6a2a20d5a': ["Stem", "bg-red-700"],
        '6621c795006491c6a2a20d5b': ["Sports", "bg-blue-800"],
        '6621c7b2006491c6a2a20d5c': ["Movies", "bg-rose-400"],
        '6622837c032c79bd9eb4fdf1': ["Rock Climbing", "bg-indigo-300"], 
        '6631be8a6d298a3e4716fa60': ["Cooking", "bg-teal-200"],
        '6631beba6d298a3e4716fa62': ["Photography", "bbg-yellow-200"],
        '6631bef06d298a3e4716fa64': ["Mindfulness", "bg-orange-200"],
        '6631bf9c6d298a3e4716fa65': ["Traveling", "bg-pink-200"],
        '6631bfbb6d298a3e4716fa66': ["Birdwatching", "bg-cyan-200"],
        '6631c0186d298a3e4716fa67': ["Astronomy", "bg-lavender-200"],
        '6631c03c6d298a3e4716fa69': ["Fishing", "bg-peach-200"]
    }

    useEffect(() => {
       
    
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/users/${userId}/feed`);
                if (Array.isArray(response.data)) {
                    let ids = [];
                    let updatedPostDays = { ...postDays }; // Create a copy of postDays to collect changes
                    response.data.forEach((post) => {
                        let i = 0
                        if (!ids.includes(post.hobby)) {ids.push(post.hobby);}
                        let post_date = new Date(post.timestamp).toLocaleDateString('en-us', { month: "numeric", day: "numeric" }).split("/");
                        post_date[0] === current[0] ? post_date = post_date[1] : post_date = -1;
                        if (post_date !== -1) {
                            if (updatedPostDays.hasOwnProperty(post_date)) {
                                if (!updatedPostDays[post_date].includes(hobbyColors[post.hobby][1])) {
                                    updatedPostDays[post_date].push(hobbyColors[post.hobby][1]);
                                }
                            } else {
                                updatedPostDays[post_date] = [hobbyColors[post.hobby][1]];
                            }
                        }
                    });
                    // Update the state once after collecting all changes
                    setPostDays(updatedPostDays);
                    setHids(ids);
                }
            } catch (error) {
                console.log("Error retrieving user posts: ", error);
            }
        };
        
    
        
        fetchUserPosts();
      }, [location.search, userId]);

    return (
        <div class="w-full lg:ps-64">
             <div class="p-4 sm:p-6 space-y-4 sm:space-y-6 content-center">
                <main class="calendar-contain">

                    <section class="title-bar">
                    <button class="title-bar__burger">
                        <span class="burger__lines">Toggle Menu</span>
                    </button>
                    <span class="title-bar__year">
                        {month} {current[1]} 
                    </span>
                    <span class="title-bar__month">
                        {month}
                    </span>
                    {/* <div class="title-bar__controls">
                        <div class="title-bar__minimize"></div>
                        <div class="title-bar__maximize"></div>
                        <div class="title-bar__close"></div>
                    </div> */}
                    </section>

                    <aside class="calendar__sidebar">
                    {/* <div class="sidebar__nav">
                        <span class="sidebar__nav-item"><img class="icon icons8-Plus-Math" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAWUlEQVRYR+2WMQoAIAgA9f+PrsWmEMQSEa7Z8rzEUmle2pxfABhvYFkPpQtJb7TEAGAAAxgoM3AO/v1YXoPPm4TtANHKy64AAAxgAANjDERB3bjXXzEA8w1s3k4WIU0YaEoAAAAASUVORK5CYII="></img></span>
                        <span class="sidebar__nav-item"><img class="icon icons8-Share" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+klEQVRYR+2W0VEdMQxFDxUQKoBUkFABUAFQAaGDUEFCBQkVABUAFRAqgFRAUgFQQTJnxprx2/V67f3h5+nnzfNK8vXVteQN3tk23nl/1gCWMrAD/AD2UwlvgTPgtbekSwB8AJ4Bf3Nz84+9IJYAuAJOgAfgKGNgD7gGvvSwsATAH2Ab2MpOKxsvgN9kodl6AHha6279tRyAa5ZFE4R6UBez1gogaM8T/gKO08JNJsjw+ZmAVEG0AMg3Pwf8/wRsDjK/AZ+TBr6lbxfA1xqCOQDS7um0A8BTa1L+fSBC/0u/lsfJ0mQ55gCE4KyplPaYJ1czVWHWAHidLoG/mfB6AIQgvTGnqXSj+BoAaTusBTegCRbusnKthNUABP157Rv2XHGxVd/XylAD8C+lmtNJDVQ0KH2KeaaSDxuL104hhsrnmIhh5bWMxmWHHMWXABjwODFsdhtAdMWXANSGzaSYMkpCvE3DqgQgar902DiW7ZKl+JEWSgBKCUITttvhO2Coh1r8qKeUAASFpWHTMu+jhKX4UQmnRFgaNp7Ufu9Aqpk+MYxyP9mTyZVnW+0a2vu9RrZSBeWLJ9qr31wTqKaf3+18ce0iRtr1s7WP3ow9TcauJr0CqpkbullMzqpzD4BIZHLBeOpPafF3OqWbCrLZlgBoTt7iuAawZuA/xAh3Ifk/Dm0AAAAASUVORK5CYII="></img></span>
                        <span class="sidebar__nav-item"><img class="icon icons8-Up" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVRYR+3VwQ2DMAyF4Z8NOkI36AodpZ2sjMAoHaWdoJWlIEXI4RHnwMWROAH2ZxuSiZPXdHJ+EjDagUcZ4Rwd5QjAkr9K4icQQkQBdfK1+BAiAvCShxG9gG3b6xGExtED8Gb+K6VbnNA3cRTQCl4DzNKNOALYC7oFdCMUQFXkAboQCvAGbkDrF2sBasQXuAIfb7NSgAtwB5bGTrcHWBFWhF3uUgC1wyqAen/4NExAdiA7kB3IDmQH5GGjHhg9DVV8eT8Bf2HqNiEP+isaAAAAAElFTkSuQmCC"></img></span>
                        <span class="sidebar__nav-item"><img class="icon icons8-Down" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4UlEQVRYR+2WgQnCMBBFXzdwBSdwBUfRyXQER3EUN1AOEgnxLrkkhYCkUFpI7/+Xf1fajcnHNtmfBTCawDu0sFunuzAYL4CVwEpgJbAS+P8EDsAZeBj/DbUELsAznKpE7WMkxSfgCtwVhRKAmN+AF3AM1x+JGkAUkUINwgKo1X1BagDyYElMA3Cbi7gHoASRAzSZtwBYEClAs3krgAYhQxbnI73XBrbrLdCK0p3m69bbYv79e2cgF9Agms17WpCCdPU830lvAlFHIORw93xvALO33oXRBLw+uw/hsHEUmJ7ABzErNiGyzfJcAAAAAElFTkSuQmCC"></img></span>
                    </div> */}
                    <h2 class="sidebar__heading">{date[0]},<br></br>{date[1]}</h2>
                    <ul class="sidebar__list">
                        {hids.map((hid) => (
                            <li class="sidebar__list-item"><span class="list-item__time"><span class={`${hobbyColors[hid][1]} end-0 block size-3.5 rounded-full ring-2 ring-white dark:ring-neutral-900`}></span>           
                            </span>{hobbyColors[hid][0]}</li>
                        ))}
                    </ul>
                    </aside>


                    <section class="calendar__days">
                    <section class="calendar__top-bar">
                        <span class="top-bar__days">Mon</span>
                        <span class="top-bar__days">Tue</span>
                        <span class="top-bar__days">Wed</span>
                        <span class="top-bar__days">Thu</span>
                        <span class="top-bar__days">Fri</span>
                        <span class="top-bar__days">Sat</span>
                        <span class="top-bar__days">Sun</span>
                    </section>

                    {cal.map((week) => (
                        <CalendarWeek week={week} p_days={postDays}/>
                    ))}

                    </section>

                </main>
            </div>
        </div>
    )
}

export default CalendarComponent;