import React, { useEffect, useState } from 'react'
import {  Table,  Button } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import categoryService from '../../services/categoryService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export const ListCategories = () => {

const[categories,setcategories]=useState([])


const fetchCategories=()=> 
{
  categoryService.findAllCategories().then((res)=>{
console.log(res,"ress categories");
setcategories(res.data.data)
  }).catch((err)=>{
    console.log(err,"err");
  
  })
}
useEffect(() => {
  

fetchCategories()
}, [])

const deleteCategory = (id) => {
  categoryService.deleteCategory(id)
    .then((res) => {
      fetchCategories();
    })
    .catch((err) => {
      console.log(err, "err delete");
    });
}
const updateCategory = (id, updatedData,res) => {
  categoryService.updateCategory(id, updatedData)
    .then((res) => {
      fetchCategories(); 
    })
    .catch((err) => {
      console.log(err, "err update");
    });
};



const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Update',
    key: 'update',
    render:(record , text)=>  <Link to={`/updatecategory/${record?._id}`}><Button type="primary" shape="round" icon={<EditOutlined />}  /></Link>
  },
  {
    title: 'delete',
    key: 'delete',
    render: (record, text) => (
      <Button
        danger
        shape="round"
        icon={<DeleteOutlined />}
        onClick={() => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              deleteCategory(record._id)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
  
              // Call your delete function here, e.g.:
              // deleteUser(record.id);
            }
          });
        }}
      />
    )
  }
];

  return (
    <>
          <NavBar/>
 <section className="contact-form-wrap section">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div id="contact-form" className="contact__form" >
          {/* form message */}
          <div className="row">
            <div className="col-12">
              
            </div>
          </div>
          <span className="text-color">Add Category</span>
          <h3 className="text-md mb-4">Category</h3>
          <Table columns={columns} dataSource={categories} />;
     
         
        </div>
      </div>
      
    </div>
  </div>
</section>

    <Footer/>
    
    </>
  )
}

