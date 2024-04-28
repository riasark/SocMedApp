import '../styles/Calendar.css';
import React, { useState, useEffect } from "react";

function CalendarDay(props) {
    const [colors, setColors] = useState([]);
    const [today , setToday] = useState();

    useEffect(() => {
        if (props.pd !== undefined) {
            const day = props.d.day;
            if (props.pd.hasOwnProperty(day)) {
                setColors(props.pd[day]);
            }
        }
        // if (props.d.day === new Date().toLocaleDateString('en-us', {day: "numeric" })) {console.log(props.d.day);}
        if (props.d.day === parseInt(new Date().toLocaleDateString('en-us', {day: 'numeric'}))) { setToday(true); }
    
    }, [props.pd, props.d.day]);
    return (
        <div class={`${props.d.active ? '' : 'inactive'} ${today && props.d.active ? 'calendar__day today' : 'calendar__day'}`}>
            <span class="calendar__date">{props.d.day}</span>
            <span class={`${today && props.d.active ? 'calendar__task calendar__task--today' : 'calendar__task'}`}>  
            {colors.map((color) => (
                <span class={`${props.d.active ? '' : 'opacity-50'} ${props.d.active ? color : ''} end-0 block size-3.5 rounded-full ring-2 ring-white dark:ring-neutral-900`}></span>           
            ))}
            </span>
        </div>
    )
}

export default CalendarDay;