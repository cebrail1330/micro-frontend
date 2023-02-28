import React, {useState} from "react";
import {Calendar} from "primereact/calendar";


const TkCalendar = props => {
    const [date, setDate] = useState();

    console.log("da", date)
    return (
        <div>
            <Calendar value={date} onChange={e => setDate(e.value)}/>
        </div>
    )
}

export default TkCalendar;
