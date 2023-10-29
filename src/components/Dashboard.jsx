import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {AiOutlineBell } from 'react-icons/ai'
import {FaUserCircle } from 'react-icons/fa'
 import {BsCaretDown} from 'react-icons/bs'


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="sidebar">
      <div style={{padding:"1.5rem"}} >Icon</div>
        < Link className="dash-section link-tag">Getting Started</ Link>
        <hr></hr>

        <div className="dash-section">
          <div className="link-tag" style={{display:"flex", gap:"1rem"}}> 
            <AiOutlineBell />
            <div>Insights</div>
            <BsCaretDown style={{marginLeft:"2rem", cursor:"pointer"}} />
          </div>
          <div className="link-tag" style={{display:"flex", gap:"1rem"}}> 
            <AiOutlineBell />
            <div >Contacts</div>
            
          </div>
          <Link className="link-tag">Priority Report</Link>
        </div>
        <hr></hr>

        <div className="dash-section">
        <div className="link-tag" style={{display:"flex", gap:"1rem"}}> 
            
            <div>Channels</div>
            <BsCaretDown style={{marginLeft:"3.2rem" , cursor:"pointer"}} />
          </div>
          <div className="link-tag" style={{display:"flex", gap:"1rem"}}> 
            
            <div>Build Flow</div>
            <BsCaretDown style={{marginLeft:"2.2rem", cursor:"pointer"}} />
          </div>
          <Link className="link-tag">Design Audit</Link>
          <Link className="link-tag">Integrations</Link>
        </div>
        <hr></hr>
        <Link className="dash-section link-tag">Knowledge Base</Link>
      </div>

      <div className="main-dash">
        <div className="dash-bar">
          <div style={{ padding: "1rem", fontSize: "1.5rem" }}>Dashboard</div>
          <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
            <Link className="link-tag">Help</Link>
            <Link className="link-tag"></Link>
            <Link className="link-tag"><AiOutlineBell /></Link>
            <div style={{display:"flex", gap:"1rem", cursor:"pointer", alignItems:"center"}}>
            <Link className="link-tag"><FaUserCircle /></Link>
            <div><BsCaretDown /></div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="pre">First steps</div>
          <div className="postt">Helpful tips</div>
          <div className="one">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <h1>Good evening</h1>
              <p>Your dashboard is customized with resources.</p>
              <br />
              <br />
              <button
                style={{
                  width: "10vw",
                  padding: "0.8rem",
                  borderRadius: "5%",
                  border: "none",
                  backgroundColor: "#1E90FF",
                  cursor: "pointer",
                  color: "white",
                }}
              >
                Explore Knowledge Center
              </button>
            </div>
          </div>
          <div
            className="two"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            <div>Icon</div>
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Recieve replies form your customers
            </div>
          </div>
          <div
            className="three"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            <div style={{ paddingBottom: "1rem" }}>Icon</div>
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              Make phones ring
            </div>
            <p>
              Send voice messages to any number around the world <br /> directly
              from your Dashboard
            </p>
          </div>
        </div>

        <div className="secondContainer">
          <div className="first">Popular Dashboard Solutions</div>
          <div
            className="second"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.6rem" }}>
              <div>Icon</div>
              <div>Campaign Builder</div>
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              Launch powerful SMS campaigns to your audience{" "}
            </div>
            <p>
              Create, personalize, and launch SMS campaigns from a simple
              step-by-step editor.
            </p>

            <div style={{ display: "flex", gap: "0.9rem" }}>
              <button
                style={{
                  padding: "0.3rem",
                  color: "#1E90FF",
                  fontWeight: "bold",
                  borderRadius: "5%",
                  border: "grey",
                }}
              >
                Start a mew campaign
              </button>
              <Link style={{textDecoration:'none', color: '#1E90FF',fontWeight:"bold"}}>Quick send SMS</Link>
            </div>
          </div>



          <div className="third"  style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "1rem",
            }}>
          <div style={{ display: "flex", gap: "0.6rem" }}>
              <div>Icon</div>
              <div>Campaign Builder</div>
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              Launch powerful SMS campaigns to your audience{" "}
            </div>
            <p>
              Create, personalize, and launch SMS campaigns from a simple
              step-by-step editor.
            </p>

            <div style={{ display: "flex", gap: "0.9rem" }}>
              <button
                style={{
                  padding: "0.3rem",
                  color: "#1E90FF",
                  fontWeight: "bold",
                  borderRadius: "5%",
                  border: "grey",
                }}
              >
                Start a mew campaign
              </button>
              <Link style={{textDecoration:'none', color: '#1E90FF',fontWeight:"bold"}}>Quick send SMS</Link>
            </div>
          </div>



          <div className="fourth" style={{
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              gap: "1rem",
            }}>
          <div style={{ display: "flex", gap: "0.6rem" }}>
              <div>Icon</div>
              <div>Campaign Builder</div>
            </div>
            <div style={{ fontSize: "1.5rem" }}>
              Launch powerful SMS campaigns to your audience{" "}
            </div>
            <p>
              Create, personalize, and launch SMS campaigns from a simple
              step-by-step editor.
            </p>

            <div style={{ display: "flex", gap: "0.9rem" }}>
              <button
                style={{
                  padding: "0.3rem",
                  color: "#1E90FF",
                  fontWeight: "bold",
                  borderRadius: "5%",
                  border: "grey",
                }}
              >
                Start a mew campaign
              </button>
              <Link style={{textDecoration:'none', color: '#1E90FF',fontWeight:"bold"}}>Quickly send SMS</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
