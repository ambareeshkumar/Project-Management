import NewProjectButton from "./NewProjectButton";
import NoProjectSelectedImg from '../assets/no-projects.png'

export default function NoProjectSelected ({onStartAddProject}){

    return(
        <div className="mt-24 text-center w-2/3">
            <img 
            src = {NoProjectSelectedImg}
             alt = "Empty project task list"
             className="object-contain w-16 h-16 mx-auto"
             />
            <h2 className="text-xl font-bold text-stone-500 my-4">No Projects Selected</h2>
            <p>Select a project or get started with a new one</p>
            <p className="text-stone-400 mt-4" >
                <NewProjectButton onClick={onStartAddProject}>
                    Create new project
                </NewProjectButton>
            </p>
        </div>
    )
}