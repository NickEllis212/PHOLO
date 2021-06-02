import React, {useState, useContext} from 'react';
import '../../shared/components/UIElements/PlaceListCard.css';
import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button'
import PlaceListCard from '../../shared/components/UIElements/PlaceListCard';
import { LoginContext } from '../../shared/context/login-context'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  
} from '../../shared/Util/validators';
import { useForm } from '../../shared/hooks/form-hook'; //custom hook is used for validating data.
import './Login.css';

const Login = () => {
const login = useContext(LoginContext);
const [isLogin, setIsLogin] = useState()
const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );
  const switchModeHandler = () => {
      if (!isLogin) {
          setFormData({
              ...formState.inputs,
              name: undefined

          }, formState.inputs.email.isValid && formState.inputs.password.isValid )
      } else{
          setFormData({
              ...formState.inputs,
              name:{
                  value: '',
                  isValid: false
              }
          }, false)
      }
      setIsLogin(prevMode => !prevMode) //switches to prev mode if not logged in
  };


  const authSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // logs the state in console 
    login.login();
  };

  return (
    <PlaceListCard className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
          {!isLogin && <Input 
          element="input" 
          id="name" 
          id="name" 
          type="text" 
          label="Name" 
          validators={[VALIDATOR_REQUIRE()]} 
          errorText="Please enter your name"
          onInput={inputHandler}/>}  {/*if in signup mode then this will render a new input for the username*/}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail" 
          validators={[VALIDATOR_EMAIL()]} // has to be an email otherwise login will not be highlighted 
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]} // this means password must be more than 5 words
          errorText="Please enter a valid password, at least 5 characters." //if not ...
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid} > {/*if the form is not valid then the button gets disabled*/} 
          {isLogin ? 'Login' : 'Sign Up'} {/*checks if user is signed in if not display sign up*/} 
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}> Go to {isLogin ? 'Sign Up' : 'Login'}</Button> {/*checks if user is signed in if not display sign up*/}
    </PlaceListCard>
  );
};

export default Login;
