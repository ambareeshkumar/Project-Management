import NewProjectButton from "./NewProjectButton"


export default function ProjectSidebar ({onStartAddProject, projects, onSelectProject, selectedProjectId}) {

    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 ">Your projects</h2>
            <div>
                <NewProjectButton onClick={onStartAddProject}>
                    + Add project
                </NewProjectButton>
            </div>
            <ul  className="mt-4">
               {projects.map((project)=>{
                
                let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200";

                if (project.id === selectedProjectId){
                    cssClass += ' bg-stone-800 text-stone-200'
                }
                else{
                    cssClass+= ' text-stone-400 '
                }

                return(
                    <li key={project.id}>
                        <button
                        className={cssClass}
                        onClick={()=>onSelectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                )
               }
               )}
            </ul>
        </aside>
    )
}