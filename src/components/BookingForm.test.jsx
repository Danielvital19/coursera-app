import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './Main';


test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('test updateDates function', () => {
    const initialTimes = updateTimes(0, new Date());
    expect(initialTimes.length).not.toBe(0);
})

test('test initializeTimes function', () => {
    const initialTimes = initializeTimes();
    expect(initialTimes.length).not.toBe(0);
})