import axios from "axios";
import axiosAPi from "../config/axios";



const CATEGORY_ENDPOINT="http://localhost:4000"
const findalltasks=async ()=>
{
    return await axiosAPi.get(`${CATEGORY_ENDPOINT}/tasks`)
}
const findtaskbyuser=async (user)=>
    {
        return await axiosAPi.get(`${CATEGORY_ENDPOINT}/tasks/user/${user}`)
    }

const addtasks=async(data)=>
{
return await axiosAPi.post(`${CATEGORY_ENDPOINT}/tasks`,data)
    
}
const deletetasks = async (id)=>
{
    return await axiosAPi.delete(`${CATEGORY_ENDPOINT}/tasks/${id}`)
}

const updatetask = async (id,data)=>
    {
        return await axiosAPi.patch(`${CATEGORY_ENDPOINT}/tasks/${id}`,data)
    }
export default {findalltasks,addtasks,deletetasks,findtaskbyuser,updatetask}