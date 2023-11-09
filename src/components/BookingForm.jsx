import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

import './BookingForm.css';
import { ChakraProvider } from "@chakra-ui/react";


const BookingForm = ({availableTimes, setDate, submitForm}) => {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: availableTimes[0],
            guests: 1,
            occasion: 'birthday'
        },
        onSubmit: (values) => {
            submitForm(values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Required'),
            time: Yup.string().required('Required'),
            guests: Yup.string().required('Required'),
            occasion: Yup.string().required('Required'),
        }),
      });

      useEffect(() => {
        if(formik.values.date){
            const newDate = new Date(formik.values.date);
            setDate(newDate);
        }
      }, [formik.values.date]);

    return (
    <div className='form'>
        <h1>Book Now</h1>
       <form onSubmit={formik.handleSubmit}>
            <ChakraProvider>
            <div className="form-container">
                    <FormControl isInvalid={formik.getFieldMeta('date').touched && !!formik.getFieldMeta('date').error}>
                        <FormLabel htmlFor="firstName">Choose date</FormLabel>
                        <Input
                        id="date"
                        name="date"
                        type="date"
                        {...formik.getFieldProps("date")}
                        />
                        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                    <FormControl size={'sm'}>
                        <FormLabel htmlFor="type">Choose time</FormLabel>
                        <Select id="type" name="type" {...formik.getFieldProps("time")}>
                            {availableTimes.map((item, index)=>(
                                <option value={item} key={index}>{item}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl isInvalid={!!formik.getFieldMeta('guests').error}>
                        <FormLabel htmlFor="email">Number of guests</FormLabel>
                        <NumberInput
                            id="guests"
                            name="guests"
                            placeholder={1}
                            min={1}
                            max={10}  
                            defaultValue={1}
                            alt={'guests-input'}
                            onChange={(valueString) => {formik.setFieldValue('guests', valueString)}}
                            // {...formik.getFieldProps("guests")}
                        >
                            <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="type">Occasion</FormLabel>
                        <Select id="type" name="type" {...formik.getFieldProps("occasion")}>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        </Select>
                    </FormControl>
                </div>
                <div className="button-container">
                    <Button 
                        type="submit" 
                        background="#F4CE14" 
                        width='xs' 
                        isDisabled={(formik.values == formik.initialValues) || !formik.isValid}
                        aria-label="Make Your reservation"
                    >
                            Make Your reservation
                    </Button>
                </div>
            </ChakraProvider>
        </form>
    </div>)
}


export default BookingForm;


