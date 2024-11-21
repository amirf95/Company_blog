import React, { useEffect, useRef, useState } from 'react'
import {  Table,  Button ,Modal, Select, Tag} from 'antd';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { EditOutlined,DeleteOutlined } from '@ant-design/icons';
import projectService from '../../services/projectService';
import Swal from 'sweetalert2';
import PermissionService from '../../services/PermissionService';
export const Listpermission = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const [oneproject,setoneproject]=useState({})
 const [selectedpermission, setselectedpermission] = useState({status:""})
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    updateStatusPermission(oneproject._id)//zidt oneproject._id
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const[Permission,setPermission]=useState([])
  const fetchpermisssion=()=> 
    {
      PermissionService.findallPermission().then((res)=>{
    console.log(res,"ress perrr");
    setPermission(res.data.data)
      }).catch((err)=>{
        console.log(err,"err");
      
      })
    }
    useEffect(() => {
      
    
  
      fetchpermisssion()
    }, [])
    const deletpermission =(id)=>
    {
      PermissionService.DeletePermission(id)
      .then((res)=>
      {
        fetchpermisssion();
      }).catch((err)=>
      {
        console.log(err,"err delete")
      });
    }
    const modalRef = useRef(null);
    const [status, setstatus] = useState("")
  const updateStatusPermission = () => {
    
    PermissionService.updatePermission(selectedpermission?._id,selectedpermission).then((res)=>{
      console.log(res , "res");
      if (res.status === 200 ){
        setselectedpermission(res.data.data)
        fetchpermisssion();
        setIsModalOpen(false)
      }
    }).catch((err)=>{
      console.log(err , "err");
    })
  }
const columns = [
    {
      title: 'reason',
      dataIndex: 'reason',
      key: 'reason',
      render: (text) => <a>{text}</a>,
    },
    
    {
        title: 'datedeb',
        dataIndex: 'datedeb',
        key: 'datedeb',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'datefin',
        dataIndex: 'datefin',
        key: 'datefin',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'status',
        dataIndex: 'status',
        key: 'status',
        render: (_,record)=>(
          <>
          <Tag color={record?.status==="Denied" ? "red":(record?.status=="Accept"?"green":"blue")}>
            {record?.status}
          </Tag>
          </>
        )
      },
   
      {
        title: 'types',
        render: (record) =><a>{record?.type?.name}</a>,
      },
      {
        title: 'user',
        render: (record) =><a>{record?.user?.firstName}</a>,
      },
     
    {
      title: 'Update',
      key: 'update',
      render:(record , text)=>  <Button 
      type="primary"
       shape="round"
        icon={<EditOutlined />}  
      onClick={()=>{showModal(record?._id)
      setselectedpermission(record)
        
      }}/>
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
                deletpermission(record._id)
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
            
            <h3 className="text-md mb-4">Permissions</h3>
            <Table columns={columns} dataSource={Permission} />;
       
           
          </div>
        </div>
        
      </div>
    </div>
  </section>
  
      <Footer/>
      <Modal title="Update Status" open={isModalOpen} onOk={updateStatusPermission} onCancel={handleCancel}>
      <div className="form-group">
          <select
            className="col-md-12"
            value={selectedpermission.status === 'hold' ? '' : selectedpermission?.status}
            onChange={(e) => setselectedpermission({ ...selectedpermission, status: e.target.value })}
            ref={modalRef}
          >
            <option disabled value="">Select an option</option>
            <option value="Denied">Denied</option>
            <option value="Accept">Accept</option>
          </select>
        </div>
      </Modal>
      </>
    )
}
//il title ghalet+il modification ili ysir ghalet khter yattik hold oui 
//Cannot read properties of undefined (reading 'value')
//TypeError: Cannot read properties of undefined (reading 'value')