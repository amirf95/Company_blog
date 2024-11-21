import React, { useEffect, useState } from 'react'
import { Footer } from '../../layouts/Footer'
import { NavBar } from '../../layouts/NavBar'
import categoryService from '../../services/categoryService';
import Select from 'react-select'
import { useNavigate, useParams } from 'react-router-dom';
import projectService from '../../services/projectService';
import Swal from 'sweetalert2';
export const Updateproject = () => {
    const{id}=useParams()//tjib il id 
    const[file,setfile]=useState('')
    const[category,setcategory]=useState('')
            //FUNCTION update 
    const[oneproject,setoneproject]=useState({})
            const fetchOneproject=()=>{
        projectService.oneproject(id).then((res)=>{
            console.log(res,"ress");
            setoneproject(res.data.data)
        }).catch((err)=>{
            console.log(err,"err")
        })
    }
    useEffect(()=>{
        fetchOneproject()

    },[])
    const [categories, setcategories] = useState([]);
  const [filtredcategories, setfiltredcategories] = useState([]);

    const fetchCategories = () => {
        categoryService.findAllCategories().then((res) => {
          console.log(res, "ress categories");
          const fetchedCategories = res.data.data;
          setcategories(fetchedCategories);
          // Set filtered categories after fetching
          setfiltredcategories(
            fetchedCategories.map((res) => {
              return {
                label: res.name,
                value: res._id
              };
            })
          );
        }).catch((err) => {
          console.log(err, "err");
        });
      };
    
      useEffect(() => {
        fetchCategories();
      }, [id]);
      const navigate=useNavigate()
      const projectUpdate=()=>{
        const data = new FormData();
    data.append("title", oneproject?.title);
    data.append("description", oneproject?.description);
    data.append("file", file);
    data.append("duration", oneproject?.duration);
    data.append("status", oneproject?.status);
    data.append("category", category);

    projectService.updateproject(id,data).then((res)=>{
        console.log(res,"res")
        //kenet 201 mfhemtch aleh 
        if (res.status === 200) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Project has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/listprojects")//thez lil lien 
          }
    }).catch((err)=>{
        console.log(err,"err");
        Swal.fire({
            position: "center",
            icon: "error",
            title: err.message,
            showConfirmButton: false,
            timer: 1500
        })
    })
      }
  return (
    <>
    <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form">
                <span className="text-color">Project</span>
                <h3 className="text-md mb-4">Update Project</h3>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Title"
                    
                    onChange={(e) => setoneproject({ ...oneproject,title:e.target.value})} value={oneproject.title  || ''} />
                    
                </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Description"
                     onChange={(e) => setoneproject({...oneproject,description:e.target.value})} value={oneproject?.description } />
                </div>
                <div className="form-group">
                  <input name="name" type="file" className="form-control" placeholder="File"
                     onChange={(e) => setfile(e.target.files[0])}  />
                </div>
                <div className="form-group">
                  <input name="name" type="text" className="form-control" placeholder="Duration"
                     onChange={(e) =>setoneproject({...oneproject,duration:e.target.value})}  value={oneproject?.duration } />
                </div>
                <div className="form-group">
                  <select className="form-control" placeholder="Status" 
                    onChange={(e) =>setoneproject({...oneproject,status:e.target.value})} value={oneproject?.status}>
                    
                    <option>Select Status</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <Select  onChange={(e) => setcategory(e.value)}  options={filtredcategories}  />
                </div>
                <button className="btn btn-main" name="submit" type="submit"
                  onClick={projectUpdate} >Update</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
//famma mochkla fil saisie fil champ  --> fixed
//titels-->fixed
/*new problem analyse :
*1)ki tsyr il affichage mta il page mtwarich les champ il 9dom mtaa status 
category ou il file 
*2)mtsyr il modification ken myt3abew les champs il kol 
3) ul message mta3 il success myoddhhorcch ---->fixed
4)navigate mthezekch lil list project  ---->fixed
*/