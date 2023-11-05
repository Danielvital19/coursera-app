import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import BookingPage from './BookingPage';

const Specials = () => {
    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Specials;