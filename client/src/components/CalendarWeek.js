import '../styles/Calendar.css';

import CalendarDay from "./CalendarDay";

function CalendarWeek(props) {
    return (
        <section className="calendar__week">
            <CalendarDay d={props.week.day1} pd={props.p_days}/>
            <CalendarDay d={props.week.day2} pd={props.p_days}/>
            <CalendarDay d={props.week.day3} pd={props.p_days}/>
            <CalendarDay d={props.week.day4} pd={props.p_days}/>
            <CalendarDay d={props.week.day5} pd={props.p_days}/>
            <CalendarDay d={props.week.day6} pd={props.p_days}/>
            <CalendarDay d={props.week.day7} pd={props.p_days}/>
        </section>
    )
}

export default CalendarWeek;