import React from "react";
import { useState } from "react";
import image1 from './image1.jpg';
import image2 from './image2.png';


const Captcha=()=>{

const [user,setUser]=useState({
   username:"" 
})

const characters='abc123';

function generateString(length){
    let result ='';
    const charactersLength = characters.length;
    for(let i=0; i<length;i++){
        result += characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return result;
}

const captcha=generateString(6)

let handleChange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    user[name]=value;
    setUser(user);
}

const onSubmit=e=>{
    var element =document.getElementById('succesBTN')
    var inputData=document.getElementById('inputType')
    element.innerHTML='Checking...';
    inputData.disabled=true;
    element.disabled=true;


var myFunction=function(){
    if(captcha==user.username){
        element.style.background='green';
        element.innerHTML='Captcha Verified';
        element.disabled=true;
        element.style.cursor='not-allowed';
        inputData.style.display='non'
    }else{
        element.style.background='red';
        element.style.cursor='not-allowed';
        element.innerHTML='Not Matched';
        element.disabled=true;

        var myFunction=function(){
            element.style.background='#007bff';
            element.style.cursor='pointer';
            element.innerHTML='Captcha Verified';
            element.disabled=false;
            inputData.disabled=false;
            inputData='';
        }
        setTimeout(myFunction,5000);
    }
}
setTimeout(myFunction,5000);
}
    return(
        <>
        <div className="container">
         <h4 className="text-center mt-4 text-info"><b>Validate Captcha using React Js</b></h4>   
         <div className="row mt-4">
            <div className="col-md-4">     
            </div>

            <div className="col-md-8">
                <h4 id="caption" style={{marginTop:'162px',marginLeft:'25px',position:'absolute'}}>{captcha}</h4>

                <div className="form-group row">
                    <img src={image1} className="mt-3 mb-3" height='30' /><span className="font-weight-bold ml-3" style={{ marginTop:"50px"}} >Mariah Benchos</span>
                </div>
              {/* <div class="form-group row">
              <img src={image2} className="mt-3 mb-3" height="50"/> 
            </div> */}
            <div class="form-group row">
              <input type="text" id="inputType" className="form-control"placeholder="Enter Captcha"
                name="username"  onChange={handleChange} autocomplete="off" style={{width:"20%"}}
                />
              <button type="button" id="succesBTN" onClick={onSubmit} class="btn btn-primary ml-1">Verify Captcha</button>
            
            </div>



            </div>
         </div>
        </div>
        </>
    )
}
export default Captcha