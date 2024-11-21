import axios from "axios";
import axiosAPi from "../config/axios";



const AUTH_ENDPOINT="http://localhost:4000"
/*const findbyrole=async ()=>
{
    return await axiosAPi.get(`${CATEGORY_ENDPOINT}/users/role?role=Employee`)
   findbyrole("Employee").then((res)=>
{
console.log(res,"all employees");
setAllEmployees(res.data.data);


}
    
    ).catch(err)=>
        console.log("error fetching employees :",err);




}


const addUsers=async(data)=>
{
return await axiosAPi.post(`${CATEGORY_ENDPOINT}/users`,data)
    
}

const deleteusers = async (id)=>
{
    return await axiosAPi.post(`${CATEGORY_ENDPOINT}/users/role?role=Employee${id}`)
}*/
const signup = async (data)=>
    {
        return await axiosAPi.post(`${AUTH_ENDPOINT}/users`,data)
    }
    const signin = async (data)=>
        {
            return await axiosAPi.post(`${AUTH_ENDPOINT}/auth/signin`,data)
        }
        const findallusers=async ()=>
            {
                return await axiosAPi.get(`${AUTH_ENDPOINT}/users`)
            }

            const findbyrole=async ()=>
                {
                    return await axiosAPi.get(`${AUTH_ENDPOINT}/users/role?role=Employee`)
                }
export default {signup,signin,findallusers,findbyrole}
