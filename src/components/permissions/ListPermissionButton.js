import React, { Component } from "react";
import { Link } from 'react-router-dom';

const ListPermissionButton =()=> {
    return (
		<React.Fragment>

        <Link className="btn btn-lg btn-info" to="/assignmodulelist">
           List Permission
        </Link>
		</React.Fragment>

    );
}

export default ListPermissionButton;