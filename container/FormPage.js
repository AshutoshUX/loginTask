import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
//importin Actions
import Login from '../data/Login.json';
import { Redirect } from 'react-router-dom';
import { updateEmailAction, updatePassAction, resetAction } from "../actions/manageDetails";
import '../style.css';


class FormPage extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            isAuthenticated : false
        }
    }

    componentDidMount = () => {
        this.props.actions.resetAction();
    }
    
    onFormSubmit = (event) =>{
        event.preventDefault();
    return this.state.username === "hruday@gmail.com" && this.state.password === "hrudady123" 
        ?{}:window.alert("Please enter valid Mail/Password");
    }


    login = (event) => {
        const { username, password } = this.state;
        let isAuthenticated = username === Login.username && password === Login.password;
       this.setState({isAuthenticated : isAuthenticated});
    }

    handleEmailChange = (event) => {
        this.setState({ username: event.target.value });
        this.props.actions.updateEmailAction(event.target.value);
    }

    handlePassChange = (event) => {
        this.setState({ password: event.target.value });
        this.props.actions.updatePassAction(event.target.value);
    }

    render() {

        const { isAuthenticated} = this.state;

        if (isAuthenticated) {
          return <Redirect to='/EmployeeList'/>;
        }

        return (
            <Form onSubmit={this.onFormSubmit} className="formBox">
                <FormGroup>
                    <Label for="logEmail">Email</Label>
                    <Input
                        type="email" name="email" id="logEmail"
                        placeholder="Enter a Valid MailID"
                        value={this.state.username}
                        onChange={this.handleEmailChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="logPassword">Password</Label>
                    <Input type="password" name="password" id="logPassword"
                        placeholder="Enter a Valid Password"
                        value={this.state.password}
                        onChange={this.handlePassChange} />
                </FormGroup>

                <Button type="submit" onClick={this.login}>Login</Button>
                 
            </Form>)
    }
}

function mapStateToProps(state) {
    return { value: state.usersStore };
}


function mapDispatchToProps(dispatch) {
    //console.log("in Dispatch",dispatch);
    return {
        actions: bindActionCreators({ updateEmailAction, updatePassAction, resetAction }, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FormPage);