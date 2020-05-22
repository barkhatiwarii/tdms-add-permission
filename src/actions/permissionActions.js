
import axios from "axios";
import { GET_PERMISSIONS,GET_PERMISSION } from "./type";

export const createPermission=(newPermission,history)=>async dispatch=>{
	
		const res=await axios.post("http://localhost:8080/api/permission",newPermission);
		history.push("/dashboard");
	
};

// export const getAssignments=()=>async dispatch=>{
// 	const res=await axios.get("http://localhost:8086/ytdms/assignment/all");
// 	dispatch({
// 		type:GET_ASSIGNMENTS,
// 		payload:res.data
// 	})
// };

// export const deleteAssignment = id => async dispatch => {
//   await axios.delete(`http://localhost:8086/ytdms/assignment/${id}`);
//   dispatch({
//     type: DELETE_ASSIGNMENT,
//     payload: id
//   });
// };

// export const getAssignment=(id,history)=>async dispatch=>{
// 	const res=await axios.get(`http://localhost:8086/ytdms/assignment/${id}`);
// 	console.log('res',res);
// 	dispatch({
// 		type:GET_ASSIGNMENT,
// 		payload:res.data
// 	})
// };



