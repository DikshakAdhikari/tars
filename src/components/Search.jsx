import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { ImageList } from "./ImageList";
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
        const res = await axios.get(
          `https://api.unsplash.com/search/collections?page=1&query=${search}&client_id=Xk9Cndf2-xRQ2C5dMozVGMku2WILQUbuifTIrajc8cs`
        );
        // console.log(search);
        //  console.log(res.data.results[0]);
        setResult(res.data.results);
        setShowModal(false);
      } catch (err) {
        console.log(err);
      }
    };
    fun();
  }, [search]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
          {result.map((img) => (
            <div key={img.id}>
              <Images
                img={img}
                setImgContent={setImgContent}
                setShowModal={setShowModal}
              />
            </div>
          ))}
        </div>
        {showModal && (
          <PopupDisplay img={imgContent} setShowModal={setShowModal} />
        )}
      </div>
    </div>
  );
};
