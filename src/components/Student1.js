import React, { useState, } from "react";
import axios from "axios";

function Student1() {
    const [formData, setFormData] = useState({
        Sid: "",
        Sfname: "",
        Slname: "",
        Sbdate: "",
        Sgender: "",
        Saddress: "",
        Sphone: "",
        Semail: "",
        Spid: "",
        Scid: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
            console.log("Student created:", response.data);
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form">
                <div className="form-body">
                    <div className="username">
                        <label className="form_label" htmlFor="StudentID">Student ID</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="StudentID" 
                            name="Sid" 
                            value={formData.Sid} 
                            placeholder="Student ID" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Firstname">
                        <label className="form_label" htmlFor="Firstname">Firstname</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="StudentFirstname" 
                            name="Sfname" 
                            value={formData.Sfname} 
                            placeholder="Student Firstname" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Lastname">
                        <label className="form_label" htmlFor="Lastname">Lastname</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="StudentLastname" 
                            name="Slname" 
                            value={formData.Slname} 
                            placeholder="Student Lastname" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Birthdate">
                        <label className="form_label" htmlFor="Birthdate">Birthdate</label>
                        <input 
                            className="form_input" 
                            type="date" 
                            id="StudentBirthdate" 
                            name="Sbdate" 
                            value={formData.Sbdate} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Gender">
                        <label className="form_label" htmlFor="Gender">Gender</label>
                        <select 
                            className="form_input" 
                            id="StudentGender" 
                            name="Sgender" 
                            value={formData.Sgender} 
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="Address">
                        <label className="form_label" htmlFor="Address">Address</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="StudentAddress" 
                            name="Saddress" 
                            value={formData.Saddress} 
                            placeholder="Student Address" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Phone">
                        <label className="form_label" htmlFor="Phone">Phone</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="StudentPhone" 
                            name="Sphone" 
                            value={formData.Sphone} 
                            placeholder="Student Phone" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="Email">
                        <label className="form_label" htmlFor="Email">Email</label>
                        <input 
                            className="form_input" 
                            type="email" 
                            id="StudentEmail" 
                            name="Semail" 
                            value={formData.Semail} 
                            placeholder="Student Email" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="ParentID">
                        <label className="form_label" htmlFor="ParentID">Parent ID</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="ParentID" 
                            name="Spid" 
                            value={formData.Spid} 
                            placeholder="Parent ID" 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="ClassID">
                        <label className="form_label" htmlFor="ClassID">Class ID</label>
                        <input 
                            className="form_input" 
                            type="text" 
                            id="ClassID" 
                            name="Scid" 
                            value={formData.Scid} 
                            placeholder="Class ID" 
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <button type="submit" className="btn bg-info" onClick={handleSubmit}>Register</button>
                <button type="button" className="btn bg-info" >Delete</button>
                <button type="button" className="btn bg-info" >Update</button>
                <button type="button" className="btn bg-info" >View</button>
                
            </div>
        </form>
    );
}

export default Student1;
