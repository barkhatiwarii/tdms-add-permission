import { Link } from 'react-router-dom';
import React, { Component } from "react";
import DocumentModule from "./DocumentModule";
import UserModule from './UserModule';
import GroupModule from './GroupModule';
import AssignmentModule from './AssignmentModule';
import TaskModule from './TaskModule';
class ListModules extends Component {

    render() {

        return (




            <div class="container  px-4 py-4" id="module_list_container" >
                  <h3 className="font-weight-bold text-center py-3">View Permissions</h3>
                <div className="row row-cols-2 ">

                    <div class="col">
                   <DocumentModule />

                    </div>

                    <div className="col"> 
                   <UserModule />
                   </div>


                    <div class="col">
                        <GroupModule />
                   </div>

                   <div class="col"> 
                    <AssignmentModule />
                       </div>

                </div>
                <div class="col ml-5">  
                <TaskModule />
                </div>
            </div>




        );
    }

}

export default ListModules;