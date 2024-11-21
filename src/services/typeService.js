import axios from "axios";
import axiosAPi from "../config/axios";



const type_ENDPOINT="http://localhost:4000"
const findalltype=async ()=>
{
    return await axiosAPi.get(`${type_ENDPOINT}/types`)
}
const findOnetype=async (id)=>
    {
        return await axiosAPi.get(`${type_ENDPOINT}/types/${id}`)
    }

const addtype=async(data)=>
{
return await axiosAPi.post(`${type_ENDPOINT}/types`,data)
    
}
const Deletetype = async (id)=>
{
    return await axiosAPi.delete(`${type_ENDPOINT}/types/${id}`)
}
const updatetype = async (id, data) => {
    return await axiosAPi.patch(`${type_ENDPOINT}/types/${id}`, data);
  };
export default {findalltype,addtype,Deletetype,updatetype,findOnetype}