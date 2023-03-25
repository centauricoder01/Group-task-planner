import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";
import { GrEdit } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getSprint } from "../Redux/TaskRedux/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { sprint } = useSelector((ele) => ele.Task);
  const { user } = useSelector((ele) => ele.Auth);

  console.log(sprint, user.institute);
  useEffect(() => {
    dispatch(getSprint(user.institute));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="mainTaskDiv">
        <div className="singleTaskDiv">
          <h1>Bug</h1>
          <div className="singleDiv">
            <div className="firstDiv">
              <p>status</p>
              <div>
                <GrEdit />
                <AiFillDelete />
              </div>
            </div>
            <p>This is my work to be done by me only, noone will touch it.</p>
            <p>Rajendra Patel</p>
          </div>
          <div className="singleDiv">
            <div className="firstDiv">
              <p>status</p>
              <div>
                <GrEdit />
                <AiFillDelete />
              </div>
            </div>
            <p>This is my work to be done by me only, noone will touch it.</p>
            <p>Rajendra Patel</p>
          </div>
          <div className="singleDiv">
            <div className="firstDiv">
              <p>status</p>
              <div>
                <GrEdit />
                <AiFillDelete />
              </div>
            </div>
            <p>This is my work to be done by me only, noone will touch it.</p>
            <p>Rajendra Patel</p>
          </div>
          <div className="singleDiv">
            <div className="firstDiv">
              <p>status</p>
              <div>
                <GrEdit />
                <AiFillDelete />
              </div>
            </div>
            <p>This is my work to be done by me only, noone will touch it.</p>
            <p>Rajendra Patel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
