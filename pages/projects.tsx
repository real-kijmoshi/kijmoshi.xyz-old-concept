import projects from "@/public/json/projects.json";

interface Project {
  name: string;
  description: string;
  github: string;
  demo?: string;
}
function Projects() {
  return (
    <>
      <h1 className={`text-center text-3xl`}>Some of my work</h1>

      <div className={`flex flex-row flex justify-around mt-20 flex-wrap`}>
        {projects.map((project: Project, i: number) => {
          return (
            <div
              key={i}
              className={`w-1/4 h-20 m-10 text-center flex flex-col justify-center`}
            >
              <h1 className={`text-2xl`}>{project.name}</h1>
              <span className={`text-ms`}>{project.description}</span>
              <div className={`space-x-1 text-xs mt-3 text-cyan-400`}>
                <a href={project.github} className={`hover:text-cyan-600`}>
                  Github
                </a>
                {project.demo && (
                  <a href={project.demo} className={`hover:text-cyan-600`}>
                    Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;
