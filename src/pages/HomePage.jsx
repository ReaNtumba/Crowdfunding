import React, { useState, useEffect } from "react"
import { allProjects } from "../data"
import ProjectCard from "../components/ProjectCard"
//ALL PROJECTS: map function uses the data object you gave it to 
//travel through array and returns the div and the items in the div

function HomePage() {
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
      .then((results) => {
        return results.json()
      })
      .then((data) => {
        setProjectList(data)
      })
  }, []) //comment: run when page first loads
  return (
    <div>
      {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} />
      })}
    </div>
  )
}



export default HomePage;
