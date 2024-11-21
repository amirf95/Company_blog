
import axiosAPi from "../config/axios";



const PROJECT_ENDPOINT="http://localhost:4000"
const findallProjects=async ()=>
{
    return await axiosAPi.get(`${PROJECT_ENDPOINT}/projects`)
}


const addProjects=async(data)=>
{
return await axiosAPi.post(`${PROJECT_ENDPOINT}/projects`,data)
    
}
const deleteProjects = async (id)=>
{
    return await axiosAPi.delete(`${PROJECT_ENDPOINT}/projects/${id}`)
}
const oneproject = async (id)=>
    {
        return await axiosAPi.get(`${PROJECT_ENDPOINT}/projects/${id}`)
    }
const updateproject=async(id,data)=>
{
    return await axiosAPi.patch(`${PROJECT_ENDPOINT}/projects/${id}`,data)
}
export default {findallProjects,addProjects,deleteProjects,oneproject,updateproject}