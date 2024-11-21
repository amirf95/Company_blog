import React, { useEffect, useState } from 'react'
import {  Table,  Button } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import usersService from '../../services/usersService';
export const ListEmployees = () => {
   
const[users,setusers]=useState([])


const fetchusers=()=> 
{
  usersService.findbyrole().then((res)=>{
console.log(res,"ress users");
setusers(res.data.data)
  }).catch((err)=>{
    console.log(err,"err");
  
  })
}
useEffect(() => {
  

fetchusers()
}, [])

const columns = [
    {
      title: 'firstname',
      dataIndex: 'firstName',
      key: 'firstname',
      render: (text) => <a>{text}</a>,
    },
    
    {
        title: 'lastname',
        dataIndex: 'lastName',
        key: 'lastname',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: (text) => <a>{text}</a>,
      },
    
      {
        title: 'address',
        dataIndex: 'address',
        key: 'address',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'role',
        dataIndex: 'role',
        key: 'role',
        render: (text) => <a>{text}</a>,
      },
      
    {
      title: 'Update',
      key: 'update',
      render:(record , text)=>  <Button type="primary" shape="round" icon={<EditOutlined />}  />
    },
    {
      title: 'delete',
      key: 'delete',
      render:(record , text)=>  <Button danger shape="round" icon={<DeleteOutlined />}  />
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
            
            <h3 className="text-md mb-4">Employees</h3>
            <Table columns={columns} dataSource={users} />;
       
           
          </div>
        </div>
        
      </div>
    </div>
  </section>
  
      <Footer/>
      
      </>
    )
}
