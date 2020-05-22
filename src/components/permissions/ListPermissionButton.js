import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const ListPermissionButton=()=>{
	return (
		<React.Fragment>
		<Link to="/listPermission" className="btn btn-lg btn-info">
			List Permissions
		</Link>
		</React.Fragment>
	);
}


export default ListPermissionButton;