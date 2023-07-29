import React,{useState, useEffect} from 'react'
import { View } from './View';
import TextField from "@mui/material/TextField";
import { Button } from '@mui/material';
import './Table.css'

//getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const Table = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [first_Name, setFirst_Name]=useState('');
  const [middle_Name, setMiddle_Name]=useState('');
  const [last_Name, setLast_Name]=useState('');
  const [position, setPosition]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [number, setNumber]=useState('');
  const [isbn, setIsbn]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      first_Name,
      middle_Name,
      last_Name,
      position,
      email,
      password,
      number,
      isbn
    }
    setbooks([...books,book]);
    setFirst_Name('');
    setMiddle_Name('');
    setLast_Name('');
    setPosition('');
    setEmail('');
    setPassword('');
    setNumber('')
    setIsbn('');
  }

  // delete book from LS
  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }

 // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div >
     <div >
        <div >
          <form onSubmit={handleAddBookSubmit}>
          
            <TextField label="First Name" type="text" required className='m-1'
            onChange={(e)=>setFirst_Name(e.target.value)} value={first_Name}/>
           
            <TextField label="Middle Name" type="text" required  className='m-1'
            onChange={(e)=>setMiddle_Name(e.target.value)} value={middle_Name}/>

            <TextField label="Last Name" type="text" required    className='m-1'
            onChange={(e)=>setLast_Name(e.target.value)} value={last_Name}/>

            <TextField label="Position"  type="text" required   className='m-1'
            onChange={(e)=>setPosition(e.target.value)} value={position}/> 

           <TextField label="Email" type="email"  required    className='m-1'
            onChange={(e)=>setEmail(e.target.value)} value={email}/> 

            <TextField label="Password" type="password" required   className='m-1'
            onChange={(e)=>setPassword(e.target.value)} value={password}/> 

            <TextField label="Mobile Number" type="Number" required  className='m-1'
            onChange={(e)=>setNumber(e.target.value)} value={number}/>
            
            <TextField label="Salary" type='Number'  required  className='m-1'
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}/>
            <br></br>   
            <br></br> 
            <Button type="submit" variant="contained" className="button" >
            Save
          </Button>
          <br></br> 
          <br></br> 
          </form>
        </div>
        <div>
          {books.length>0&&<>
            <div >
              <table  className='table'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>position</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Number</th>
                    <th>Salary</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>
      </div>
    </div>
  )
}

export default Table











{/* 

 import React,{useState, useEffect} from 'react'
 import { View } from './View';


  getting the values of local storage
 const getDatafromLS=()=>{ 
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const Table = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [isbn, setIsbn]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      author,
      isbn
    }
    setbooks([...books,book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

  // delete book from LS
  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>BookList App</h1>
      <p>Add and view your books using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>ISBN#</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default Table */}