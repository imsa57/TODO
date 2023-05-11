import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/Home.css";
import Modal from "./Modal";
import Signup from "./Signup";
import Login from "./Login";

const Home = () => {
  const ulRef = useRef();
  const [show, setShow] = useState(false);
  const [showTab, setShowTab] = useState("");
  const [work, setWork] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [zone, setZone] = useState("");
  const [priority, setPriority] = useState("");

  const [datas, setDatas] = useState([]);

  const hourRef = useRef();
  const minutesRef = useRef();
  const zoneRef = useRef();
  const priorityRef = useRef();

  useEffect(() => {
    setHours(hourRef.current.value);
    setMinutes(minutesRef.current.value);
    setZone(zoneRef.current.value);
    setPriority(priorityRef.current.value);
  }, []);

  let obj = {
    work: work,
    time: `${hours}:${minutes} ${zone}`,
    priority,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDatas([...datas, obj]);
  };

  const completed = (index) => {
    ulRef.current.children[index].style.backgroundColor = "green";
    ulRef.current.children[index].style.color = "white";
    ulRef.current.children[index].children[1].children[1].setAttribute(
      "disabled",
      true
    );
  };

  const Delete = (index) => {
    datas.splice(index, 1);
    setDatas([...datas]);
  };

  return (
    <div className="container">
      <header>
        <div className="profile">
          <div className="img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.YQGwtpOGecZajkbh2HMMGAHaHa&pid=Api&P=0"
              alt="hii"
            />
          </div>
          <p>MD SARFRAJ ANSARI</p>
        </div>
        <div className="buttons">
          <button
            to="/login"
            className="login"
            onClick={() => {
              setShow(true);
              setShowTab("login");
            }}
          >
            Login
          </button>
          <button
            to="/signup"
            className=""
            onClick={() => {
              setShow(true);
              setShowTab("signup");
            }}
          >
            Signup
          </button>

          <Modal isOpened={show} onClose={() => setShow(false)}>
            {showTab === "signup" ? (
              <Signup onClose={() => setShow(false)} />
            ) : (
              <Login onClose={() => setShow(false)} />
            )}
          </Modal>
        </div>
      </header>
      <div className="form">
        <h1>Add Your Todo</h1>
        <form id="form-data" onSubmit={handleSubmit}>
          <div className="inputDiv">
            <label htmlFor="">Work</label>
            <input
              type="text"
              className="work"
              name="work"
              onChange={(e) => setWork(e.target.value)}
              required
            />
          </div>
          <div className="inputDiv select">
            <label htmlFor="">Time</label>
            <div className="timeInput">
              <select
                name="hours"
                id=""
                className="time"
                onChange={(e) => setHours(e.target.value)}
                ref={hourRef}
              >
                {Array.from(Array(12), (i, index) => (
                  <option value={index + 1} key={i}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                name="minutes"
                id=""
                className="time"
                style={{ margin: "0 10px" }}
                onChange={(e) => setMinutes(e.target.value)}
                ref={minutesRef}
              >
                {Array.from(Array(59), (i, index) => (
                  <option value={index + 1} key={i}>
                    {index + 1}
                  </option>
                ))}
              </select>
              <select
                name="am_pm"
                id=""
                className="time"
                onChange={(e) => setZone(e.target.value)}
                ref={zoneRef}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div className="priority inputDiv">
            <label htmlFor="">Priority</label>
            <div>
              <select
                name="priority"
                id=""
                className="time"
                onChange={(e) => setPriority(e.target.value)}
                ref={priorityRef}
              >
                <option value="High">High</option>
                <option value="Modrate">Modrate</option>
                <option value="Low">Low</option>
              </select>
            </div>
          </div>
          <button type="submit">+</button>
        </form>
      </div>
      <div className="show-todo">
        <h1 className="heading">Your Todo</h1>
        <div className="listContainer">
          <ul ref={ulRef}>
            {datas.length > 0 ? (
              datas.map((list, index) => (
                <li key={index}>
                  <div className="text">
                    <h2 className="work-text">{list.work}</h2>
                    <h6 className="work-time">
                      {list.time}{" "}
                      <span
                        className="priority"
                        style={
                          list.priority === "High"
                            ? { backgroundColor: "red" }
                            : list.priority === "Modrate"
                            ? { backgroundColor: "yellowgreen" }
                            : { backgroundColor: "purple" }
                        }
                      >
                        {list.priority}
                      </span>
                    </h6>
                  </div>
                  <div className="button" title="Delete">
                    <button onClick={() => Delete(index)} className="delete">
                      <i className="fa-solid fa-trash"></i>
                    </button>

                    <button
                      onClick={() => completed(index)}
                      className="complete"
                      title="Compelete"
                    >
                      <i className="fa-solid fa-circle-check"></i>
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <h1 className="noTodo">NO TODO.....</h1>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
