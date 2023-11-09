import { getByText, render, screen, fireEvent, waitFor, firstSelect } from "@testing-library/react";
import BookingForm from './BookingForm';
import {updateTimes, initializeTimes} from './Main';
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";


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

test('guests input should have min and max values', () => {
    const { container } = render(<BookingForm availableTimes={[]}/>);
    const inputEl = container.querySelector(`input[name="guests"]`);
    expect(inputEl).toHaveAttribute('aria-valuemin');
    expect(inputEl).toHaveAttribute('aria-valuemax');
})

test('button should be disable if there are not changes', () => {
    const { getByText } = render(<BookingForm availableTimes={[]}/>);
    const button = getByText('Make Your reservation');
    expect(button).toHaveAttribute('disabled');
});


test('guests should show error when it has no value after touching it', async () => {
    const { container, getByText } = render(<BookingForm availableTimes={[]}/>);
    const inputEl = container.querySelector(`input[name="guests"]`);
    fireEvent.change(inputEl, {target: {value: ''}});

    await waitFor(() => expect(getByText('Required')).toBeInTheDocument());
});

test('button should be enabled when form is completed and function should be called when clicking on submit', async () => {
    const submitForm = jest.fn();
    const { container, getByText } = render(<BookingForm availableTimes={['17:00']} setDate={jest.fn()} submitForm={submitForm}/>);

    const inputDate = container.querySelector(`input[name="date"]`);
    fireEvent.change(inputDate, {target: {value: '2023-11-01'}});

    const inputTime = container.querySelector(`select[name="time"]`);
    fireEvent.change(inputTime, {target: {value: '17:00'}});

    const inputGuests = container.querySelector(`input[name="guests"]`);
    fireEvent.change(inputGuests, {target: {value: '5'}});

    const inputOccasion = container.querySelector(`select[name="occasion"]`);
    fireEvent.change(inputOccasion, {target: {value: 'anniversary'}});

    const button = getByText('Make Your reservation');
    expect(button).not.toHaveAttribute('disabled');
    fireEvent.submit(button);

    await waitFor(() => expect(submitForm).toHaveBeenCalledWith({"date": "2023-11-01", "guests": "5", "occasion": "anniversary", "time": "17:00"}));
});


