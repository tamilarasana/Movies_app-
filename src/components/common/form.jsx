import React, { Component } from 'react';
import  Joi  from "joi-browser";

class Form extends Component {
    state = { 
        errors: {},
        data: {}
     };

     validate = () => {
        const options = {  abortEarly:false };
        const { error }  = Joi.validate(this.state.data, this.schema, options);
       // console.log(result);  
       if(!error) return null;
        const errors = {};
        for(let item of error.details) errors[item.path[0]] = item.message;
         return errors;
        // const {data} = this.state;
        // if(data.username.trim() === '')
        //     errors.username = "Username is required.";
        // if (data.password.trim() === '')
        //     errors.password = "Password is requird.";
        // return Object.keys(errors).length === 0 ? null : errors;
      }
      
     
      validateProperty = ({name, value}) => {
        const obj = { [name]: value};
        const schema = {[name]:  this.schema[name]};
        const {error} =  Joi.validate(obj, schema);
        return error ?  error.details[0].message :  null;
        // if(error) return null;
        // return error.details[0].message;
    
        // if(name === 'username'){
        //   if(value.trim() === "") return  'Username is required.';
        // }
        // if(name === 'password'){
        //   if(value.trim() === "") return  'Password is required.';
        // }
      }
    
      handleChange = ({ currentTarget: input }) => {
    
        const errors  = {...this.state.errors};
        const errorMessage =  this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        // data.username = e.currentTarget.value;
        // data.password = e.currentTarget.value;
        data[input.name] = input.value;
    
        this.setState({ data, errors });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({errors: errors || {} })
        if (errors) return;
        this.doSubmit();
      };

}
 
export default Form;