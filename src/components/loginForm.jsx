import React, { Component } from "react";
import Input from "./common/input";
import  Joi  from "joi-browser";
class LoginForm extends Component {
  // username = React.createRef();

  state = {
    account: {
      username: "",     
      password: "",
    },
    errors : {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  }
  validate = () => {
    const options = {  abortEarly:false };
    const { error }  = Joi.validate(this.state.account, this.schema, options);
   // console.log(result);  
   if(!error) return null;
    const errors = {};
    for(let item of error.details) errors[item.path[0]] = item.message;
     return errors;
    // const {account} = this.state;
    // if(account.username.trim() === '')
    //     errors.username = "Username is required.";
    // if (account.password.trim() === '')
    //     errors.password = "Password is requird.";
    // return Object.keys(errors).length === 0 ? null : errors;
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {} })
    if (errors) return;
  };

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
    const account = { ...this.state.account };
    // account.username = e.currentTarget.value;
    // account.password = e.currentTarget.value;
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.value}
            label="Username"
            onChange={this.handleChange}
            error = {errors.username}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error = {errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
