import React, { useEffect, useState } from 'react'
import {  Table,  Button, Tag } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import projectService from '../../services/projectService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
export const ListProjects = () => {
  const[projects,setprojcets]=useState([])
  const fetchprojects=()=> 
    {
      projectService.findallProjects().then((res)=>{
    console.log(res,"ress projects");
    setprojcets(res.data.data)
      }).catch((err)=>{
        console.log(err,"err");
      
      })
    }
    useEffect(() => {
      
    
  
      fetchprojects()
    }, [])
    const deleteproject =(id)=>
    {
      projectService.deleteProjects(id)
      .then((res)=>
      {
        fetchprojects();
      }).catch((err)=>
      {
        console.log(err,"err delete")
      });
    }
//the columns of the table
    const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'File',
        dataIndex: 'file',
        key: 'file',
        render: (text,record) =>  <img src={`http://localhost:4000/file/projects/${record?.file}`} 
        //Adjust il image display
        alt="project file"
        style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }} />//Adjust il image display
        
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
      

      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        rrender: (_,record)=>(
          <>
          <Tag color={record?.status==="In Progress" ? "red":(record?.status=="Completed"?"green":"blue")}>
            {record?.status}
          </Tag>
          </>
        )
      },
      {
        title: 'category',
        render: (record) =><a>{record?.category?.name}</a>,
      },
     //update project 
    {
      title: 'Update',
      key: 'update',
      render:(record , text)=><Link to={`/updateproject/${record?._id}`}><Button type="primary" shape="round" icon={<EditOutlined />}  /></Link>  
    },
    {
      title: 'delete',
      key: 'delete',
      render: (record, text) => (
        //button notification success
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
                deleteproject(record._id)
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                //miss button failed delete
    
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
            
            <h3 className="text-md mb-4">List Projects</h3>
            <Table columns={columns} dataSource={projects} />;
       
           
          </div>
        </div>
        
      </div>
    </div>
  </section>
  
      <Footer/>
      
      </>
    )
}
