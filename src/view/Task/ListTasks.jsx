import React, { useEffect, useState } from 'react'
import {  Table,  Button, Tag } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import tasksService from '../../services/tasksService';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export const ListTasks = () => {
  const[tasks,settasks]=useState([])
  const [onetask,setonetask]=useState({})
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    updateStatustask(onetask._id)//zidt oneproject._id
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  
  
  const fetchtasks=()=> 
    {
      tasksService.findalltasks().then((res)=>{
    console.log(res,"ress tasks");
    settasks(res.data.data)
      }).catch((err)=>{
        console.log(err,"err");
      
      })
    }
    useEffect(() => {
      
    
  
      fetchtasks()
    }, [])
    const deletetask = (id) => {
      tasksService.deletetasks(id)
        .then((res) => {
          fetchtasks();
        })
        .catch((err) => {
          console.log(err, "err delete");
        });
    }
    const [status, setstatus] = useState("")
    const updateStatustask = (id) => {
      let data = {
        status: status,
      }
      tasksService.updatetask(id,data).then((res)=>{
        console.log(res , "res");
      }).catch((err)=>{
        console.log(err , "err");
      })
    }
    
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },

    
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (_,record)=>(
          <>
          <Tag color={record?.status==="in progress" ? "red":(record?.status=="completed"?"green":"blue")}>
            {record?.status}
          </Tag>
          </>
        )
      },
      {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'projects',
        render: (record) =><a>{record?.project?.title}</a>,
      },

      {
        title: 'user',
        render: (record) =><a>{record?.user?.firstName}</a>,
      },
    {
      title: 'Update',
      key: 'update',
      render:(record , text)=> <Link to={`/updatetask/${record?._id}`}><Button type="primary" shape="round" icon={<EditOutlined />}  /></Link>
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
                deletetask(record._id)
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
            
            <h3 className="text-md mb-4">Tasks</h3>
            <Table columns={columns} dataSource={tasks} />;
       
            
          </div>
        </div>
        
      </div>
    </div>
  </section>
  
      <Footer/>
      
      </>
    )
}
