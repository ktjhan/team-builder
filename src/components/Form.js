import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: dodgerblue;
`;

const Form = props => {
  const [member,setMember] = useState ({
    name: '',
    image: '',
    email: '',
    role: ''
  });

  const changeHandler = e => {
    setMember({...member,[e.target.name]: e.target.value})
  }

  const submitHandler = e => {
    e.preventDefault()
    props.addTeamMate(member)
    setMember({
    name: '',
    image: '',
    email: '',
    role: '',
 });
  }

  return (
  <form onSubmit={submitHandler}>
    <label htmlFor="title">Members Name</label>
    <input
      id="name"
      type="text"
      name="name"
      onChange={changeHandler}
      placeholder="Name"
      value={member.name}></input>
    <label htmlFor="title">Email</label>
    <input
      id="email"
      type="text"
      name="email"
      onChange={changeHandler}
      placeholder="Email"
      value={member.email}></input>
    <label htmlFor="title">Role</label>
    <input
      id="role"
      type="text"
      name="role"
      onChange={changeHandler}
      placeholder="Role"
      value={member.role}></input>

    <button type="submit">Add Note</button>
  </form>
);

}

export default Form;
