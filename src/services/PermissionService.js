
import axiosAPi from "../config/axios";



const Permission_ENDPOINT="http://localhost:4000"
const findallPermission=async ()=>
{
    return await axiosAPi.get(`${Permission_ENDPOINT}/permissions`)
}
const findpermissionbyuser=async (user)=>
    {
        return await axiosAPi.get(`${Permission_ENDPOINT}/permissions/user/${user}`)
    }


const addPermission=async(data)=>
{
return await axiosAPi.post(`${Permission_ENDPOINT}/permissions`,data)
    
}
const DeletePermission = async (id)=>
{
    return await axiosAPi.delete(`${Permission_ENDPOINT}/permissions/${id}`)
}
const updatePermission = async (id, data) => 
    {
    return await axiosAPi.patch(`${Permission_ENDPOINT}/permissions/${id}`, data);
  };
export default {findallPermission,addPermission,DeletePermission,updatePermission,findpermissionbyuser}