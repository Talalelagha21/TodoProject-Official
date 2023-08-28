"use client"

import React, { FormEventHandler, useState  } from 'react';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { useRouter } from 'next/navigation';


interface MyCalendarProps {
    start: any,
    end: any,
}



const MyCalendar= () => {
    const router = useRouter();
    const [modalOpenDelete, setModalOpenDelete] = useState<boolean>(false)
    const localizer = momentLocalizer(moment)
    const [eventsList, setEventsList] = useState<any[]>([]);

    function handleSelect (props: MyCalendarProps) {
        const {start, end} = props;
        const title = window.prompt('New Event name')
        if (title) {
            var newEvent = {
                start: start,
                end: end,
                title: title 
            }
            let updateEventsList = eventsList;
            updateEventsList.push(newEvent);
            setEventsList(updateEventsList);
            router.refresh();
        }
        
    };

    const handleDoubleClick: FormEventHandler<HTMLFormElement> = async (e) => {
        setModalOpenDelete(true)
      };
      
   

    return (
        <div className='pl-5 pt-5 w-[98%] h-[90%]'>
        <Calendar
        selectable
        defaultView="week"
        views={["month", "week", "day"]}
        defaultDate={new Date()}
        localizer={localizer}
        events={eventsList}
        onSelectSlot={handleSelect}
        onDoubleClickEvent= {handleDoubleClick} 
        
        />
        
        </div>
    )
}

export default MyCalendar