import React, { useEffect, useRef, useState } from 'react';
import { Table, Button, Modal, Tag } from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import tasksService from '../../services/tasksService';
import { useParams } from 'react-router-dom';
import { EditOutlined } from '@ant-design/icons';

export const ListTaskEmployee = () => {
  const { id } = useParams();
  const [taskUser, setTaskUser] = useState([]);
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [selectedtask, setselectedtask] = useState({status:""})
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    updatetaskuser(taskUser._id)//zidt oneproject._id
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  
  const fetchTaskUser = () => {
    tasksService.findtaskbyuser(id).then((res) => {
      setTaskUser(res.data.data);
      console.log(res, "ress");
    }).catch((err) => {
      console.log(err, "err");
    });
  };

  useEffect(() => {
    fetchTaskUser();
  }, []);
  const updatetaskuser=()=>{
    tasksService.updatetask(selectedtask?._id,selectedtask).then((res)=>{
      console.log(res , "res");
      if (res.status === 200 ){
        setselectedtask(res.data.data)
        fetchTaskUser()
        setIsModalOpen(false)
    }
  }).catch((err)=>{
    console.log(err , "err");
  })
}
  const modalRef = useRef(null);
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',  // Assuming task has a 'title' field
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_,record)=> (
        <>
        <Tag color={record?.status==="in progress" ? "red":(record?.status=="completed" ? "green" :"blue")}>
          {record?.status}
        </Tag>
        </>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Project',
     /*  dataIndex:'project', */
      render: (record) =><a>{record?.project?.title}</a>},
    
    

    {
      title: 'Update',
      key: 'update',
      render:(record , text)=>  <Button 
      type="primary"
       shape="round"
        icon={<EditOutlined />}  
      onClick={()=>{showModal(record?._id)
      setselectedtask(record)
        
      }}/>
    }

    // Uncomment if you need the delete functionality
    /* {
      title: 'Delete',
      key: 'delete',
      render: (record) => (
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
                // deleteTask(record._id);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your task has been deleted.",
                  icon: "success"
                });
              }
            });
          }}
        />
      ),
    }, */
  ];

  return (
    <>
      <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form">
                <h3 className="text-md mb-4">Tasks</h3>
                <Table columns={columns} dataSource={taskUser.map(task => ({ ...task, key: task._id }))} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Modal title="Update tasks" open={isModalOpen} onOk={updatetaskuser} onCancel={handleCancel}>
      <div className="form-group">
          <select
            className="col-md-12"
            value={selectedtask.status === 'hold' ? '' : selectedtask.status}
            onChange={(e) => setselectedtask({ ...selectedtask, status: e.target.value })}
            ref={modalRef}
          >
            <option disabled value="">Select an option</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>
        </div>
      </Modal>
    </>
  );}
