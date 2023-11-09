import React, { useReducer} from "react";
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import BookingPage from './BookingPage';
import { fetchData, submitAPI } from '../helpers/api'
import ConfirmedBooking from "./ConfirmedBooking";

export const updateTimes = (times, date) => {
    const timesOfDate = fetchData(date)
    return timesOfDate;
 };

 export const initializeTimes = () => {
    const todaysTimes = fetchData(new Date())
     return todaysTimes;
  };


const Main = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        const response = submitAPI(formData);
        if(response){
            navigate('booking/confirmed');
        }
    }

    return (
        <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setDate={dispatch} submitForm={submitForm}/>}></Route>
            <Route path="/booking/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
    )
}

export default Main;