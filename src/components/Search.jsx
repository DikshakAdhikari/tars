import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
export const Search = ({setResult}) => {
    const [search, setSearch] = useState("");

    useEffect(()=> {
        const fun= async ()=> {
            try{
                const res=  await axios.get(`https://api.unsplash.com/search/collections?page=1&query=${search}&client_id=Xk9Cndf2-xRQ2C5dMozVGMku2WILQUbuifTIrajc8cs`);
                console.log(search);
           console.log(res.data.results[0]);
           setResult(res.data.results)

            }catch(err){
                console.log(err);
               
            }
           
        }
        fun();
    },[search])


  return (


    <div style={{ display: "flex", justifyContent:"space-around", alignItems: "center" }}>
      {/* <div
        style={{
          fontSize: "30px",
          position: "fixed",
          margin: "30px",
          left: "28vw",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Image Gallery
      </div> */}
      <div
        style={{
          display: "flex",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            borderRadius: "20px",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "white",
          }}
        >
          <div style={{ fontSize: "20px", color: "grey" }}>
            <BiSearchAlt2 />
          </div>
          <input
            type="text"
            placeholder="Search Images here"
            onChange={(e)=> setSearch(e.target.value)}
            style={{
              border: "none",
              padding: "20px",
              color: "#36454F",
              fontSize: "20px",
              outline: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};
