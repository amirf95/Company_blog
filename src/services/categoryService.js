import axios from "axios";
import axiosAPi from "../config/axios";



const CATEGORY_ENDPOINT="http://localhost:4000"
const findAllCategories=async ()=>
{
    return await axiosAPi.get(`${CATEGORY_ENDPOINT}/categories`)
}
const findCategoryByID=async (id)=>
    {
        return await axiosAPi.get(`${CATEGORY_ENDPOINT}/categories/${id}`)
    }


const addCategory=async(data)=>
{
return await axiosAPi.post(`${CATEGORY_ENDPOINT}/categories`,data)
    
}
const deleteCategory = async (id)=>
{
    return await axiosAPi.delete(`${CATEGORY_ENDPOINT}/categories/${id}`)
}
const updateCategory = async (id, data) => {
    return await axiosAPi.patch(`${CATEGORY_ENDPOINT}/categories/${id}`, data);
  };
export default {findAllCategories,addCategory,deleteCategory,updateCategory,findCategoryByID}