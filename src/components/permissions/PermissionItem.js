import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { connect } from "react-redux";
import { PropTypes } from "prop-types";
// import { deleteAssignment } from "../.././actions/assignmentActions";
class PermissionItem extends Component
{

// onDeleteClick = id => {
//     console.log("-------> method called.");
//     this.props.deleteAssignment(id);
//   };
	render(){
        const { permission }=this.props;
		return(
			 
                                
                                <tr>
                                    <td>#</td>
                                    <td>{assignment.permissionName}</td>
                                    <td>
                                    {/* <button type="button" className="btn btn-light" onClick={this.onDeleteClick.bind(this,
                                                  assignment.id
                                                   )}>Delete</button>&nbsp;&nbsp; */}
                                    {/* <Link to={`/updateAssignment/${assignment.assignmentIdentifier}`}>
                                    <button type="button" className="btn btn-light">Edit</button>&nbsp;&nbsp;
                                    </Link>
                                    */}test
                                    </td>
                                    </tr>
            );
            }
}
PermissionItem.propTypes = {
  deleteAssignment: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteAssignment }
)(AssignmentItem);
