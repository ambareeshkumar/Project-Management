import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectsSelected";
import ProjectSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined,
    projects: [],
    tasks:[]
  });

  // const [isEditing, setIsEditing] = useState(false);
    
  // let newTitle
  
  // const handleEdit = (isEditing ) =>{
  //     setIsEditing(!isEditing)
  //     newTitle  = editTitle.current.value
  // }


  const handleProjectState = ()=>{
    setProjectState((prevStatus)=>{
      return {
        ...prevStatus,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject (projectData){
    setProjectState(prevState =>{

      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  const handleCancelAddProject = ()=>{
    setProjectState((prevStatus)=>{
      return {
        ...prevStatus,
        selectedProjectId: undefined,
      }
    })
  }

  const handleSelectProject = (id)=>{
    setProjectState((prevStatus)=>{
      return {
        ...prevStatus,
        selectedProjectId: id,
      }
    })
  }
  
  const handleDeleteProject =()=>{
    setProjectState((prevStatus)=>{
      return {
        ...prevStatus,
        selectedProjectId: undefined,
        projects: prevStatus.projects.filter((project)=> project.id !== prevStatus.selectedProjectId)
      }
    })
  }

  const handleAddTask = ( text ) => {
    setProjectState(prevState =>{

      const taskId = Math.random()
      const newTask = {
        id : taskId,
        text: text,
        projectId: prevState.selectedProjectId
      }

      return{
        ...prevState,
        tasks: [newTask,...prevState.tasks],
      }
    })
  }

  const handleDeleteTask = ( id ) =>{
    setProjectState((prevState)=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>task.id !== id)
      }
    })
  }

  const selectedProject = projectState.projects.find((project)=>project.id === projectState.selectedProjectId)
  
  let content = <SelectedProject project= {selectedProject} onDelete = {handleDeleteProject} onAddTask = {handleAddTask} onDeleteTask = {handleDeleteTask} tasks = {projectState.tasks}/>

  if (projectState.selectedProjectId === null){
    content = <NewProject onAdd = {handleAddProject} onCancel = {handleCancelAddProject}/>
  }
  else if (projectState.selectedProjectId === undefined){
    content = <NoProjectSelected  onStartAddProject={handleProjectState}/>
  }

  console.log(projectState)

  return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar 
        selectedProjectId={projectState.selectedProjectId}
        onStartAddProject = {handleProjectState}  
        projects = {projectState.projects}
        onSelectProject = {handleSelectProject}
        />  
        {/* <NewProject /> */}
        {content}
      </main>
  );
}

export default App;
