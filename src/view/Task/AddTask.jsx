import React, { useEffect, useState } from 'react'
import { NavBar } from '../../layouts/NavBar'
import { Footer } from '../../layouts/Footer'
import tasksService from '../../services/tasksService'
import Swal from 'sweetalert2'
import projectService from '../../services/projectService'
import Select from 'react-select'
import usersService from '../../services/usersService'

export const AddTask = () => {

  const [name, setname] = useState([])
  const [duration, setduration] = useState([])
  const [status, setstatus] = useState([])
  const [description, setdescription] = useState([])

  const [project, setproject] = useState([])
  const [filtedproject, setfiltredproject] = useState([]);
  const [user, setuser] = useState([])
  const [filtreduser, setfiltreduser] = useState([]);

  const fetchproject = () => {
    projectService.findallProjects().then((res) => {
      console.log(res, "ress categories");
      const fetchedproject = res.data.data;
      setproject(fetchedproject);
      // Set filtered categories after fetching
      setfiltredproject(
        fetchedproject.map((res) => {
          return {
            label: res.title,
            value: res._id
          };
        })
      );
    }).catch((err) => {
      console.log(err, "err");
    });
  };

  useEffect(() => {
    fetchproject();
  }, []);
  const fetchUser = () => {
    usersService.findbyrole().then((res) => {
      console.log(res, "ress users");
      const fetcheduser = res.data.data;
      setuser(fetcheduser);
      // Set filtered categories after fetching
      setfiltreduser(
        fetcheduser.map((res) => {
          return {
            label: res.firstName,
            value: res._id
          };
        })
      );
    }).catch((err) => {
      console.log(err, "err");
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const ajoutTask = () => {
    if (!project) {
      console.error("Project is required.");
      return;
    }
    if (!user) {
      console.error("User is required.");
      return;
    }
      

    let data={
      name:name,
      duration:duration,
      description:description,
      status:status,
      project:project,
      user:user,
    }
    console.log("Task data being sent:", data); // Log the data for debugging
//badalha let data----const data ken maaa il file 
    tasksService.addtasks(data).then((res) => {
      console.log(res, "ressss");
      if (res.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Project has been saved",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }).catch((err) => {
      console.log(err, "errr");
    });
  };





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
             <span className="text-color">Task</span>
             <h3 className="text-md mb-4">AddTask</h3>
             <div className="form-group">
             <input name="name" type="text" className="form-control" placeholder="name"
                    onChange={(e) => setname(e.target.value)} />             </div>
             <div className="form-group">
             <input name="name" type="text" className="form-control" placeholder="duration"
                    onChange={(e) => setduration(e.target.value)} />               </div>
             <div className="form-group">
             <select  className="form-control" placeholder="status" onChange={(e) => setstatus(e.target.value)} >     
                    <option>Select Status</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>          </div>
             <div className="form-group">
             <input name="name" type="text" className="form-control" placeholder="description"
                    onChange={(e) => setdescription(e.target.value)} />             </div>
             <div className="form-group">
                  <Select onChange={(e) => setproject(e.value)} options={filtedproject} />
                </div>
                <div className="form-group">
                  <Select onChange={(e) => setuser(e.value)} options={filtreduser} />
                </div>
        
             
          <button className="btn btn-main" name="submit" type="submit"
          onClick={ajoutTask}
          >Add task</button>
           </div>
         </div>
         
       </div>
     </div>
   </section>
   
       <Footer/>
    
    
    
    
    
    </>
  )
}
//tamel page jdydyda auth service 
//badal il status fil affichage
//nizlen al il bouton myzidch task jdyda
//5edmet il update fil task all status akahaw 
//projects mich 93da todhhor
//famma prob