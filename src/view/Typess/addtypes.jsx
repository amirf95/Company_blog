import React, { useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import categoryService from '../../services/categoryService'
import Swal from 'sweetalert2'
import typeService from '../../services/typeService'

export const Addtypes = () => {
  const [name,setname]=useState("")
const ajouttypes=()=>
{
  let data={
    name:name
  }
  typeService.addtype(data).then((res)=>{

    console.log(res,"ress");
    if(res.status ===201)
    {
      Swal.fire({
        position: "Center",
        icon: "success",
        title: "Category has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
  }).catch((err)=>{
console.log(err,"err")

  })
}

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
          <span className="text-color">Add type</span>
          <h3 className="text-md mb-4">types</h3>
          <div className="form-group">
            <input name="name" type="text" className="form-control" placeholder=" Name"
            onChange={(e)=>setname(e.target.value)} />
            
          </div>
     
          <button className="btn btn-main" name="submit" type="submit"
          onClick={ajouttypes}
          >Add types</button>
          
        </div>
      </div>
      
    </div>
  </div>
</section>

    <Footer/>
    </>
  )
}
