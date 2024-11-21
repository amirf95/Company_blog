
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './layouts/Footer';
import { NavBar } from './layouts/NavBar';
import { About } from './view/About';
import { Contact } from './view/Contact';
import { Home } from './view/Home';
import { Project } from './view/Project/Project';
import { Addcategory } from './view/Categories/Addcategory';
import { SignIn } from './view/Auth/SignIn';
import { SignUp } from './view/Auth/SignUp';
import { AddProject } from './view/Project/AddProject';
import { AddTask } from './view/Task/AddTask';
import { ListCategories } from './view/Categories/ListCategories';
import { ListProjects } from './view/Project/ListProjects';
import { ListTasks } from './view/Task/ListTasks';
import { ListEmployees } from './view/ListUsers/ListEmployees';
import { Listtypes } from './view/Typess/Listtypes';
import { Addtypes } from './view/Typess/addtypes';
import { Listpermission } from './view/Permission/Listpermission';
import { Addpermission } from './view/Permission/addpermission';
import { Detailproject } from './view/Project/detailproject';
import { ListPermissionUser } from './view/Permission/ListPermissionUser';
import { ListTaskEmployee } from './view/Task/ListTaskEmployee';
import { Updateproject } from './view/Project/Updateproject';
import { UpdateTask } from './view/Task/UpdateTask';
import { UpdateCategory, Updatecategory } from './view/Categories/Updatecategory';
import { Updatetypes } from './view/Typess/Updatetypes';



function App() {
  return (
    <>
<BrowserRouter>
<Routes>
<Route path='/' element ={<Home/>}/>
<Route path='/about' element ={<About/>}/>
<Route path='/contact' element ={<Contact/>}/>
<Route path='/projects' element ={<Project/>}/>
<Route path='/addcategory' element ={<Addcategory/>}/>
<Route path='/signin' element ={<SignIn/>}/>
<Route path='/signup' element ={<SignUp/>}/>
<Route path='/addproject' element ={<AddProject/>}/>
<Route path='/addTask' element ={<AddTask/>}/>
<Route path='/listcategories' element ={<ListCategories/>}/>
<Route path='/listprojects' element ={<ListProjects/>}/>
<Route path='/listTasks' element ={<ListTasks/>}/>
<Route path='/listEmployees' element ={<ListEmployees/>}/>
<Route path='/listtypes' element ={<Listtypes/>}/>
<Route path='/addtypes' element ={<Addtypes/>}/>
<Route path='/listpermission' element ={<Listpermission/>}/>
<Route path='/addpermission' element ={<Addpermission/>}/>
<Route path='/detailproject/:id' element ={<Detailproject/>}/>
<Route path='/listpermissionuser/:id' element ={<ListPermissionUser/>}/>
<Route path='/listtaskemployee/:id' element ={<ListTaskEmployee/>}/>
<Route path='/updateproject/:id' element ={<Updateproject/>}/>
<Route path='/updatetask/:id' element ={<UpdateTask/>}/>
<Route path='/updatecategory/:id' element ={<UpdateCategory/>}/>
<Route path='/updatetype/:id' element ={<Updatetypes/>}/>





</Routes>











</BrowserRouter>
    </>
  );
}

export default App;
