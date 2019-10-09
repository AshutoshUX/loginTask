import React from 'react';
import { connect } from 'react-redux';
import EmployeeData from '../data/DashBoardPage.json'
import '../style.css';

class EmployeeList extends React.Component {

  render(){
    
    return(
        <div className="dashboard">
          <h1>--Employee List--</h1>
          {EmployeeData.user.map((detail,i)=>{
            return <div key={i}>
                    <h4>ID: {detail.id}</h4>
                    <h4>Name: {detail.name}</h4>
                    <h4>Age: {detail.age}</h4>
                    <h4>Gender: {detail.gender}</h4>
                    <h4>Email ID: {detail.email}</h4>
                    <h4>Phone No: {detail.phoneNo}</h4>
                    <p>*****</p>
                   </div>
          })}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return { value:state.usersStore };}


export default connect(mapStateToProps, null)(EmployeeList)
