import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
    const [FormData, setFormData] = useState({
        title: '',
        description: '',
        goal:'',
        image:'',
        is_open: true,
        is_active: true,
    });


const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [id]: value,
}));
};

const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();

     
        postData().then((response)=>{
            window.localStorage.setItem("token", response.token)
            navigate('/');
        } )
        
    }

const postData = async () =>{
    const token = window.localStorage.getItem("token")
    const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`,{
        method: "post",
        headers: {
         "Content-Type": "application/json",
         "Authorization": `token ${token}`
        },
        body:JSON.stringify(credentials)
    })
    return response.json();
    }

    return (
        <form>
            <div>
                <label htmlFor="Title">Title:</label>
                <input onChange={handleChange} type="text" id='title' placeholder="title"></input>
            </div>

            <div>
                <label htmlFor="Description">Description:</label>
                <input onChange={handleChange} type="text" id='description' placeholder="Description"></input>
            </div>

            <div>
            <label htmlFor="Goal">Goal:</label>
                <input onChange={handleChange} type="text" id='goal' placeholder="Goal"></input>
            </div>

            <div>
            <label htmlFor="Image">Image:</label>
                <input onChange={handleChange} type="text" id='image' placeholder="Image here"></input>
            </div>

        
            <button type="submit" onClick={handleSubmit}>Submit Form</button>

        </form>
    )
};

export default ProjectForm;