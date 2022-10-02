import React from 'react';
import './Book.css';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const Appointments = () => {
  let times = ['9:00 AM Appointment',
                '10:00 AM Appointment',
                '11:00 AM Appointment',
                '12:00 PM Appointment',
                '1:00 PM Appointment',
                '2:00 PM Appointment',
                '3:00 PM Appointment',
                '4:00 PM Appointment',
                '5:00 PM Appointment'];

  let apptList = [];

  for (let i = 0; i < times.length; i++) {
    let container = document.createElement("div");
    container.classList.add("slot");

    let time = document.createElement("p");
    time.textContent = times[i];

    let apptBtn = document.createElement("button");
    apptBtn.classList.add("slotBtn");
    apptBtn.textContent = "Click to book";

    container.appendChild(time);
    container.appendChild(apptBtn);

    apptList.push(container);
  }

  return (<div>{apptList}</div>);
}


const Book = () =>{
  const [value, onChange] = useState(new Date());
  const [day, setDay] = useState('');

  return (
    <div className='bookContainer'>
      
      <div className='bookingDesc'>
        <h1>Check availability and 
        book appointments</h1>
      </div>
    
      <div className='bookingBox'>
        <div id="calendar">
          <Calendar onChange={onChange} 
          value={value} onClickDay={(val,ev)=>
          setDay(val.toLocaleDateString().toString())}/>
        </div>
      </div>


      {day !== '' ? <div className='apptInfo'>
        <div className="apptHeading">
            <h1>View availability for {day}: </h1>
        </div>

        <div className="appts">
          <div className='slot'>
            <p>9:00 AM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>10:00 AM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>11:00 AM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>12:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>1:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>2:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>3:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>4:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>

          <div className='slot'>
            <p>5:00 PM Appointment</p>
            <button className='slotBtn'>Click to book</button>
          </div>
        </div>

      </div>
       : null }
      


    </div>
  )
}

export default Book;