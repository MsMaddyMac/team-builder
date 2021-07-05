import React, { useState } from "react";

const MemberForm = props => {
    const [info, setInfo] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = event => {
        setInfo({...info, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMembers(info);
        setInfo({ name: "", email: "", role: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name </label>
            <input
                name="name"
                id="name"
                type="text"
                placeholder="name"
                onChange={changeHandler}
                value={info.name}
            /><br /><br />
            <label htmlFor="email">Email </label>
            <input
                name="email"
                id="email"
                type="text"
                placeholder="email"
                onChange={changeHandler}
                value={info.email}
            /><br /><br />
            <label htmlFor="role">Role </label>
            <select
                name="role"
                id="role"
                type="text"
                onChange={changeHandler}
                value={info.role}
            >
                <option>Full Stack Developer</option>
                <option>Software Engineer</option>
                <option>UX Designer</option>
                <option>Cyber Security Developer</option>
            </select><br /><br />
            <button type="submit">Add New Member</button>
        </form>
    )

}

export default MemberForm;