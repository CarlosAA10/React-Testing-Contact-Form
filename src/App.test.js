import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'; 

test("renders App without crashing", () => {
  render(<App />);
});

test('test if the user can type in the first input box', () => {
  // Arrange
  const {getByLabelText} = render(<ContactForm />); 

  // Act
  // make sure the input appears on screen : passing

  const nameInput = getByLabelText(/First Name*/i); 

  // Act 
  // make sure you can type in the first name field
  fireEvent.change(nameInput, {target: {value:'Chungus'} }); 


  // Assert
  // expect(nameInput).toBeVisible(); 
  expect(nameInput.value).toBe('Chungus'); 

})

test('test if the user can type in the Last Name input field', () => {
  // Arrange
  const {getByLabelText} = render(<ContactForm />); 

  // Act 
  // Make sure you can type in the Last Name field
  const lastNameInput = getByLabelText(/Last Name*/i); 
  fireEvent.change(lastNameInput, {target: {value:'Mungus'} }); 

  // Assert
  expect(lastNameInput.value).toBe('Mungus')

})

test('test if the user can type in the email input field', () => {
  // Arrange 
  const {getByLabelText} = render(<ContactForm />); 

  // Act 
  // make sure the User can type in the email field
  const emailInput = getByLabelText(/Email*/i); 
  fireEvent.change(emailInput, {target: {value:'Chungus@mungus.com'} }); 

  // Assert 
  expect(emailInput.value).toBe('Chungus@mungus.com'); 
})

test('test if the submit button can be clicked', () => {
  const {getByText} = render(<ContactForm />); 

  // Act 
  // Make sure submit button is clicked
  const submitInput = getByText(/submit/i); 
  fireEvent.click(submitInput); 
})
