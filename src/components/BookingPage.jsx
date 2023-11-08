
import BookingForm from './BookingForm';

const BookingPage = ({availableTimes, setDate, submitForm}) => {
    return (
    <>
        <BookingForm availableTimes={availableTimes} setDate={setDate} submitForm={submitForm}/>
    </>)
}

export default BookingPage;