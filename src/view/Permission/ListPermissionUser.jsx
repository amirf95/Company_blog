import React, { useEffect, useRef, useState } from 'react';
import { NavBar } from '../../layouts/NavBar';
import { Footer } from '../../layouts/Footer';
import { useParams } from 'react-router-dom';
import { Table  , Button, Modal, Tag} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PermissionService from '../../services/PermissionService';

export const ListPermissionUser = () => {
    const { id } = useParams();
  const [permissionemployee, setpermissionemployee] = useState([]);
  const[isModalOpen,setIsModalOpen]=useState(false);
  const [selectedpermission,setselectedpermission]=useState({status:""});

  const showModal=()=>{
    setIsModalOpen(true);
  };

  const handleOk = () => { 
    updatepermissionemployee(permissionemployee._id)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
    const fetchpermissionemployee =  () => {
      PermissionService.findpermissionbyuser(id).then((res)=>{
        setpermissionemployee(res.data.data);
        console.log(res,"ress");
      }).catch((err)=>{
        console.log(err, "err"); 
      });
    };
    useEffect(()=>{
      fetchpermissionemployee();
    },[]);

  const updatepermissionemployee=()=>{
    PermissionService.updatePermission(selectedpermission?._id,selectedpermission).then((res)=>{
      console.log(res , "res");
    if (res.status === 200 ){
      setselectedpermission(res.data.data)
      fetchpermissionemployee()
      setIsModalOpen(false)
    }
  }).catch((err)=>{
      console.log(err , "err");
    })
  }
  const modalRef=useRef(null);
    
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
      title: 'datefin',
      dataIndex: 'datefin',
      key: 'datefin',
      render: (text) => <a>{text}</a>,
    },
          
    {
      title: 'type',
      render: (record) =><a>{record?.type?.name}</a>,
    },

    {
      title: 'Update',
      key: 'update',
      render:(record, text)=>  <Button 
      type="primary" 
      shape="round" 
      icon={<EditOutlined />} 
      onClick={()=>{showModal(record?._id)  
      setselectedpermission(record)

      }}/>
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
            <Table columns={columns} dataSource={permissionemployee.map(Permission =>({...Permission,key:Permission._id}))} />;
          </div>
        </div>
      </div>
    </div>
  </section>
      <Footer/>
      <Modal title="Update permisssions" open={isModalOpen} onOk={updatepermissionemployee} onCancel={handleCancel}>
      <div className="form-group">
          <select
            className="col-md-12"
            value={selectedpermission.status === 'hold' ? '' : selectedpermission.status}
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
    
  
);}