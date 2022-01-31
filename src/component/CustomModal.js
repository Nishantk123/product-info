import React, { useState } from "react";
import axios from 'axios';

const CustomModal = ({ handleModalClose }) => {
    
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const handleSubmit = () =>{

    let data ={
        name: name,
        job: job
    }
    axios({
        method:"POST",
        url:"https://reqres.in/api/users",
        data: data
    })
    .then(res =>{
        console.log(res.data);
        handleModalClose()
    })

  }
  console.log(name, job);
  return (
    <div className="modal d-block" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleModalClose}
            ></button>
          </div>
          <div className="modal-body">
            <h5>Enter user detail</h5>
            <input
              className="form-control my-3"
              placeholder="Enter your name"
              onChange={(e) => handleName(e)}
            />
            <input
              className="form-control my-3"
              placeholder="Enter your job"
              onChange={(e) => handleJob(e)}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleModalClose}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
             Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
