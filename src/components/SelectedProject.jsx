import Tasks from "./Tasks"
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';





export default function SelectedProject({project, onDelete, onAddTask, onDeleteTask, tasks}){

    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-us',{
        year:"numeric",
        month:"short",
        day:'numeric'
    })
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-x-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <EditIcon size = "large" onClick={()=>console.log('logged')}/>
                    <button className="text-stone-600 hover:text-stone-950 " onClick={onDelete}>Delete</button>
                </div>
            </header>
            <p className="mb-4 text-stone-400">{formattedDate}</p>
            <p className="text-stone-600 whitespace-pre-wrap">{project.desc}</p>
            <Tasks onAddTask = {onAddTask} onDeleteTask = {onDeleteTask} tasks={tasks}/>
        </div>

    )
}