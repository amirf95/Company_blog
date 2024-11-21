import React, { useEffect, useState } from 'react'
import { Footer } from '../../layouts/Footer'
import { NavBar } from '../../layouts/NavBar'
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import typeService from '../../services/typeService';




export const Updatetypes = () => {
    const{id}=useParams()//tjib il id 
    const [type,settype]=useState({})
    
    const fetchType=()=>{
    typeService.findalltype().then((res)=>{//findonetype
        const fetchedType=res.data.data
        
        settype(fetchedType)
    }).catch((err)=>{
        console.log(err,"err fetching type")
    })
    }
    useEffect(()=>{
        fetchType()
    },[id])
    const navigate=useNavigate()
    const typeUpdate=()=>{
        const data={
            name:type.name,
        }
    typeService.updatetype(id,data).then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Type has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/listtypes");
        }
      }).catch((err) => {
        console.error(err, "Error updating Task");
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
    }
  return (
    <>
    <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form">
                <span className="text-color">Type</span>
                <h3 className="text-md mb-4">Update Type</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Type Name"
                    onChange={(e) => settype({ ...type, name: e.target.value })}
                    value={type.name || ''}
                  />
                </div>
                <button
                  className="btn btn-main"
                  name="submit"
                  type="submit"
                  onClick={typeUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
//nja7 