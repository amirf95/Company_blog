import React, { useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import { Link, useNavigate } from 'react-router-dom'
import usersService from '../../services/usersService'
import Swal from 'sweetalert2'

export const SignIn = () => {
  const[email,setemail]= useState("")
    const [password,setpassword]=useState("")
  const navigate=useNavigate()
    const connexion=()=>
    {
      let data={
      email:email,
      password:password
      }
      usersService.signin(data).then((res)=>
      {
        console.log(res, "ress");
        if(res.status ===201){
          Swal.fire({
            position: "center",
            icon: "success",
            title: " Login Successfully ",
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem("user" , JSON.stringify(res.data))


          navigate("/projects")
        }
      }).catch(err=>{
        console.log(err,"errrr")
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 1500
        });
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
          <span className="text-color">Signin</span>
          <h3 className="text-md mb-4">Signin</h3>
          <div className="form-group">
            <input name="name" type="text" className="form-control" placeholder=" email" 
            onChange={(e)=>setemail(e.target.value)}/>
          </div>
          <div className="form-group">
            <input name="name" type="password" className="form-control" placeholder=" password"
             onChange={(e)=>setpassword(e.target.value)} />
          </div>
          
     
          <button className="btn btn-main" name="submit" type="submit"
          onClick={connexion}>Signin</button>

        </div>
        <div> already have account <Link to="/signup"><span>signup</span></Link> </div>

      </div>
      
    </div>
  </div>
</section>

    <Footer/>
    
    </>
  )
}
