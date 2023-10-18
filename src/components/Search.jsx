import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Images } from "./Images";
import PopupDisplay from "./PopupDisplay";
export const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [imgContent, setImgContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fun = async () => {
      try {
        if (search === "") {
          //console.log(result.length);
          const res = await axios.get(
            `https://api.unsplash.com/photos?page=1&per_page=30&client_id=Xk9Cndf2-xRQ2C5dMozVGMku2WILQUbuifTIrajc8cs`
          );
          setResult(res.data);
          //console.log(res.data);
        } else {
          const res = await axios.get(
            `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${search}&client_id=Xk9Cndf2-xRQ2C5dMozVGMku2WILQUbuifTIrajc8cs`
          );
          // console.log(search);
          // console.log(res.data.results[0]);
          setResult(res.data.results);
          setShowModal(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, [search]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center",backgroundColor:"#FFF0F5"}}
    >
      <div
        style={{
          fontSize: "40px",
          position: "static",
          marginTop: "20px",
          left: "10px",
          color: "#002D62",
          fontStyle: "italic",
          fontWeight: "bold",
        }}
      >
        Image Gallery
      </div>
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
            borderRadius: "10px",
            padding:"3px",
            alignItems: "center",
            width: "420px",
            backgroundColor: "white",
          }}
        >
          <div style={{fontSize: "30px", display:"flex",paddingLeft:"10px", color: "grey" }}>
            <BiSearchAlt2 />
          </div>
          <input
            type="text"
            placeholder="Search Images here"
            onChange={(e) => setSearch(e.target.value)}
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

      <div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {search != "" && result.length < 1 ? (
            <div style={{ fontSize: "30px", display: "flex", gap: "5px" }}>
              No results found for{" "}
              <div style={{ fontWeight: "bold" }}>{search}</div>
            </div>
          ) : (
            result.map((img) => (
              <div key={img.id}>
                <Images
                  img={img}
                  setImgContent={setImgContent}
                  setShowModal={setShowModal}
                />
              </div>
            ))
          )}
        </div>
        {showModal && (
          <PopupDisplay img={imgContent} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};
