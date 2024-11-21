import React, { useEffect, useState } from 'react';
import { Footer } from '../../layouts/Footer';
import { NavBar } from '../../layouts/NavBar';
import categoryService from '../../services/categoryService';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import projectService from '../../services/projectService';
import Swal from 'sweetalert2';
import tasksService from '../../services/tasksService';
import usersService from '../../services/usersService';

export const UpdateTask = () => {
  const { id } = useParams(); // Get task ID from URL parameters
  const [task, setTask] = useState({}); // Task state
  const [projects, setProjects] = useState([]);
  const [user,setuser]=useState([])
  const [filteredProjects, setFilteredProjects] = useState([]);
  const[filtreduser,setfiltreduser]=useState([])
  const navigate = useNavigate();

  // Fetch all projects for the dropdown
  const fetchProjects = () => {
    projectService.findallProjects().then((res) => {
      const fetchedProjects = res.data.data;
      setProjects(fetchedProjects);
      setFilteredProjects(
        fetchedProjects.map((proj) => ({
          label: proj.title,
          value: proj._id,
        }))
      );
    }).catch((err) => {
      console.error(err, "Error fetching projects");
    });
  };

  const fetchUser=()=>{
    usersService.findallusers().then((res)=>{
      const fetcheduser=res.data.data;
      setuser(fetcheduser)
      setfiltreduser(
        fetcheduser.map((usr)=>({
          label:usr.firstName,
          value:usr._id,
        }))
      )
    }).catch((err) => {
      console.error(err, "Error fetching users");
  })
  }
  // Fetch the task details by ID
  const fetchTask = () => {
    tasksService.findtaskbyuser().then((res) => {
      const fetchedTask = res.data;
      setTask(fetchedTask);
      setProjects(fetchedTask.project); // Set the current project
    }).catch((err) => {
      console.error(err, "Error fetching task");
    });
  };

  useEffect(() => {
    fetchProjects();
    fetchUser();
    fetchTask();
  }, [id]);

  // Update the task data
  const updateTask = () => {
    const data = {
      name: task.name,
      description: task.description,
      duration: task.duration,
      status: task.status,
      project: task.project, // Assign selected project
      user:task.user,
    };

    tasksService.updatetask(id, data).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/listTasks"); // Navigate back to task list
      }
    }).catch((err) => {
      console.error(err, "Error updating task");
      Swal.fire({
        position: "center",
        icon: "error",
        title: err.message,
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <>
      <NavBar />
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="contact-form" className="contact__form">
                <span className="text-color">Task</span>
                <h3 className="text-md mb-4">Update Task</h3>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    onChange={(e) => setTask({ ...task, name: e.target.value })}
                    value={task.name || ''}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="description"
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                    value={task.description || ''}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="duration"
                    type="text"
                    className="form-control"
                    placeholder="Duration"
                    onChange={(e) => setTask({ ...task, duration: e.target.value })}
                    value={task.duration || ''}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={(e) => setTask({ ...task, status: e.target.value })}
                    value={task.status || ''}
                  >
                    <option>Select Status</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <Select
                    onChange={(e) => setTask({ ...task, project: e.value })}
                    options={filteredProjects}
                    value={filteredProjects.find(proj => proj.value === task.project) || ''}
                  />
                </div>
                
                <div className="form-group">
                  <Select
                    onChange={(e) => setTask({ ...task, user: e.value })}
                    options={filtreduser}
                    value={filtreduser.find(usr => usr.value === task.user) || ''}
                  />
                </div>
                <button
                  className="btn btn-main"
                  name="submit"
                  type="submit"
                  onClick={updateTask}
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
  );
};
//jawha behhy
