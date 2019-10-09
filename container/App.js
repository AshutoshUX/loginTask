import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
//
import Navbar from '../component/Navbar';
import EmployeeList from './EmployeeList';
import FormPage from './FormPage';
import Login from '../data/Login.json'
import '../style.css';



class App extends React.Component {
  render() {

    const { email, password } = this.props.value;
    let isAuthenticated = email === Login.username && password === Login.password;

    function PrivateRoute({ children, ...rest }) {
      return (
        <Route
          {...rest}
          render={({ location }) =>
            isAuthenticated ? (
              children
            ) : (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              )
          }
        />
      );
    }

    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" exact component={FormPage} />
          <PrivateRoute path="/EmployeeList">
            <EmployeeList />
          </PrivateRoute>
        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  return { value: state.usersStore };
}

export default connect(mapStateToProps, null)(App)