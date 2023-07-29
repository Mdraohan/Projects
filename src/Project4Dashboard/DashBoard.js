import React, { useState } from "react";
import "./DashBoard.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const DashBoard = (deleteRow) => {
  const [rows ,setRows] =useState( [
    {
      First_Name: "Raohan",
      Middle_Name: "Abdul Gani",
      Last_Name: "Mohammad",
      Position: "manager",
      Email: "raohan@gmail.com",
      Password: "49494949",
      Number: "7385155645",
      Salary: "90,000",
    },
    {
      First_Name: "Raohan",
      Middle_Name: "Abdul Gani",
      Last_Name: "Mohammad",
      Position: "manager",
      Email: "raohan@gmail.com",
      Password: "49494949",
      Number: "7385155645",
      Salary: "90,000",
    },
    {
      First_Name: "Raohan",
      Middle_Name: "Abdul Gani",
      Last_Name: "Mohammad",
      Position: "manager",
      Email: "raohan@gmail.com",
      Password: "49494949",
      Number: "7385155645",
      Salary: "90,000",
  }
  ]
  )
  const [formState,setFormState]=useState({
    First_Name: " ",
    Middle_Name: " ",
    Last_Name: " ",
    Position: " ",
    Email: " ",
    Password: " ",
    Number: " ",
    Salary:" ", 
  })

  const handlerChange=(e)=>{
    setFormState({
      ...formState,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
   
  }
  const handlerDeleteRow =(targetIndex)=>{
    setRows(rows.filter((_,idx)=>idx !==targetIndex))
  }

  // const handleSubmit=(newRow)=>{
  //   setRows([...rows,newRow])
  // }
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
      >
        {/* <div className="text_field">
          <TextField label="First Name" value={formState.First_Name}  onChange={handlerChange}/>
          <TextField label="Middle Name" value={formState.Middle_Name} onChange={handlerChange}/>
          <TextField label="Last Name" value={formState.Last_Name} onChange={handlerChange}/>
          <TextField label="Position" type="number" value={formState.Position} onChange={handlerChange}/>
          <TextField label="Email" type="email" value={formState.Email} onChange={handlerChange}/>
          <TextField label="Password" type="password" value={formState.Password} onChange={handlerChange}/>
          <TextField label="Number" value={formState.Number} onChange={handlerChange}/>
          <TextField id="outlined-disabled" label="Salary" value={formState.Salary} onChange={handlerChange}/>
          <Button variant="contained" className="button" onClick={handleSubmit} >
            Save
          </Button>
        </div> */}
        <div className="text_field">
          <TextField label="First Name"   onChange={handlerChange}/>
          <TextField label="Middle Name" onChange={handlerChange}/>
          <TextField label="Last Name"  onChange={handlerChange}/>
          <TextField label="Position" type="number"   onChange={handlerChange}/>
          <TextField label="Email" type="email" onChange={handlerChange}/>
          <TextField label="Password" type="password"  onChange={handlerChange}/>
          <TextField label="Number"  onChange={handlerChange}/>
          <TextField id="outlined-disabled" label="Salary"  onChange={handlerChange}/>
          <Button variant="contained" className="button" onClick={handleSubmit} >
            Save
          </Button>
        </div>
      </Box>
      {/* table */}
      <div className="table_size">
        <div className="table_wrapper">
          <table className="table" rows={rows} deleteRow={handlerDeleteRow}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Middle name</th>
                <th className="expand">Last name</th>
                <th className="expand1">Position</th>
                <th className="expand2">Email</th>
                <th>Password</th>
                <th>Mobile Number</th>
                <th>Salary</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row,idx)=>{
                // const statusText=
                // row.status.charAt(0).toUpperCase()+row.status.slice(1)
                return(
                   <>
                    <tr key={idx}>
                      <td>{row.First_Name}</td>
                      <td>{row.Middle_Name}</td>
                      <td>{row.Last_Name}</td>
                      <td>{row.Position}</td>
                      <td>{row.Email}</td>
                      <td>{row.Password}</td>                      
                      <td>{row.Number}</td>
                      <td>{row.Salary}</td>
                      <td>
                     <span className="actions">
                    <DeleteIcon onClick={()=>deleteRow(idx)}/>
                    <EditIcon />
                  </span>
                 </td>
                </tr>
                </>
                )
              })}           
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
