import React, { useEffect, useState } from 'react'
import {  Table,  Button } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';

import Swal from 'sweetalert2';
import typeService from '../../services/typeService';
import { Link } from 'react-router-dom';
export const Listtypes = () => {

const[types,settypes]=useState([])


const fetchtypes=()=> 
{
  typeService.findalltype().then((res)=>{
console.log(res,"ress types");
settypes(res.data.data)
  }).catch((err)=>{
    console.log(err,"err");
  
  })
}
useEffect(() => {
  

fetchtypes()
}, [])

const deletetypes = (id) => {
  typeService.Deletetype(id)
    .then((res) => {
      fetchtypes();
    })
    .catch((err) => {
      console.log(err, "err delete");
    });
}
const updatetype = (id, updatedData,res) => {
  typeService.updatetype(id, updatedData)
    .then((res) => {
      fetchtypes(); 
    })
    .catch((err) => {
      console.log(err, "err update");
    });
};



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
    {
      title: 'Update',
      key: 'update',
      render: (record ,text ) => 
        <Link to={`/updatetype/${record?._id}`}><Button type="primary" shape="round" icon={<EditOutlined />}  /></Link>
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
              deletetypes(record._id)
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
          <span className="text-color"> types</span>
          <h3 className="text-md mb-4">types</h3>
          <Table columns={columns} dataSource={types} />;
     
         
        </div>
      </div>
      
    </div>
  </div>
</section>

    <Footer/>
    
    </>
  )
}

