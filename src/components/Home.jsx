import React,{useState,useEffect} from "react";
import {Grid,Card,CardContent} from "@mui/material";
import Select from "react-select";
import { statusData,studentData } from "../Data";
import { Notification } from "./Notification";
import { ResultList } from "./ResultList";

export const Home=()=>{
    const [data,setData]=useState([]);
    const [name,setName]=useState(studentData[0]);
    const [passData,setPassData]=useState([]);
    const [failData,setFailData]=useState([]);
    const [status,setStatus]=useState("")

    const handleNameChange=(selOpt)=>{
              setName(selOpt)
    }
    const handleStatusChange=(selOpt)=>{
              setStatus(selOpt.label)
    }
     useEffect(()=>{
        if(status!=="")
          if(status==="pass"){
            setPassData([...passData,name])
          }else{
            setFailData([...failData,name])
          }
          const filtered= data.filter((item)=>item.value!==name.value)
          setData(filtered)
     },[name])  
    useEffect(()=>{
        setData(studentData)
    },[])
    return(
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Select onChange={handleNameChange} options={data}/>
            </Grid>
            <Grid item xs={6}>
             <Select  onChange={handleStatusChange} options={statusData}/>
            </Grid>
            <Grid item xs={6}>
              <Notification mytime={3000} msg={status ==="pass" ?`Hey ${name.label},
              Congratulations!!!  for your great achievment.`:`Hi ${name.label},please connect with your college`}/>
            </Grid>          
            <Grid item xs={6}>
                <Notification mytime={5000}  msg={status==="pass"?` Dear Parent ,Your ward ${name.label} has completed the Certification with pickupBiz Learning.we would like to congrtulations you and your family`:``}/>
            </Grid>
            <Grid item xs={6}>
                 <ResultList  studentData={passData}/>
            </Grid>         
            <Grid item xs={6}>
            <ResultList  studentData={failData}/>
            </Grid>

        </Grid>
    )
}