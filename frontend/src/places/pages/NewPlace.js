import React, {  } from 'react';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/Util/validators';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hook'


const NewPlace = () => {
 const [formState, inputHandler] = useForm({
    title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      address: {
        value: '',
        isValid: false
      }
    }, false);

 


  
  const placeSubmitHandler = event => {
    event.preventDefault(); // prevents a page relaod when submitted
    console.log(formState.inputs); // send this to the backend but for now console logs the submitted form to insure things get submitted properly.
  };

  return (
      <div>
        <h1 className="center" style={{color: 'white'}}>Add New Place</h1>
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]} //tells user that a title is requd
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} //ensure the user puts a description in the box
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]} //requires an address 
        errorText="Please enter a valid address."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
      </div>
  );
};

export default NewPlace;
