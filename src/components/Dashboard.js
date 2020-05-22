import React, { Component } from 'react'
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import CreatePermissionButton  from "./permissions/CreatePermissionButton";
import ListPermissionButton from "./permissions/ListPermissionButton";

 class Dashboard extends Component 
 {
     render(){
         return (
             <div className="container">
                 <h1> Dashboard</h1>
                 <br/><br/>
                 <CreatePermissionButton/><br/> <br/>
                 <ListPermissionButton/><br/><br/>
                 <AssignPermissionButton/><br/>
             </div>
         );
     }
 }
export default Dashboard;