import React from 'react';
import Calendar from 'react-calendar';
import utilStyles from "../../styles/utils.module.css";

const CalendarComponent = ({onChange,value, clickDayFunction, calendarType, startDate}) => (
    <Calendar
        calendarType={calendarType}
        onClickDay={clickDayFunction}
        defaultActiveStartDate={startDate}
        tileClassName={utilStyles.calendarTiles}
        className={utilStyles.calendarClass}
        value={value}
        onChange={onChange}
        minDate={new Date('January 1,  2020 23:15:30')}
        maxDate={new Date('December 30, 2020 23:15:30')}
    />
);

export default CalendarComponent;