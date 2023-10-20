import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";

const YcPosts = () => {
    const [jobId, setJobId] = useState([]);
    const [jobPostings, setJobPostings] = useState([]);
    const [currentPage, setCurrentPage]= useState(1);
   
    
  
    useEffect(() => {
      const fun = async () => {
        try {
          const res = await axios.get(
            "https://hacker-news.firebaseio.com/v0/jobstories.json"
          );
  
          //console.log(res.data);
          setJobId(res.data);
       
            let arr = [];
            for (let i = 0; i < jobId.length; i++) {
              const id = await axios.get(
                `https://hacker-news.firebaseio.com/v0/item/${jobId[i]}.json`
              );
              console.log(id.data.title);
              arr.push(id.data);
            }
            setJobPostings(arr);
          
        } catch (err) {
          console.log(err);
        }
      };
      fun();
    }, []);


    
    const pages= jobPostings.length/6;

    return (
      <div >
        {jobPostings.slice(currentPage*6-6, currentPage*6).map((job,index) => (
          <div
           style={{border:"3px solid black", margin:"25px", padding:"20px"}}
            key={job.id}
          >
            <div style={{fontWeight:"bold", margin:"5px", fontSize:"20px"}} >{job.title}</div>
            <div style={{margin:"5px", fontSize:"20px"}}>By {job.by}</div>
          </div>
        ))}
        <div style={{margin:"25px", }}>
          {currentPage*6 === pages*6 ? <div></div> : 
        <button style={{padding:"17px",borderRadius:"10px", backgroundColor:"red", fontSize:"15px", color:"white", border:"none", cursor:"pointer", fontWeight:"bold"} } onClick={()=> {
          setCurrentPage(currentPage+1)
        }}  >Load more jobs</button>
      }


        </div>
      </div>
    );
}

export default YcPosts
