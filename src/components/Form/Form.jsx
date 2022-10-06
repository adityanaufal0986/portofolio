import "./Form.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="auth">
          <label className="title">Your Name</label>
          <input type="text"></input>
        </div>
        <div className="auth">
          <label className="title">Email</label>
          <input type="email"></input>
        </div>
        <div className="auth">
          <label className="title">Subject</label>
          <input type="text"></input>
        </div>
        <div className="auth">
          <label className="title">Masssage</label>
          <textarea rows="6" placeholder="Type your massage here" />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
