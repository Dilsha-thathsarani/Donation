import React, { useState } from "react";
import PayNow from "./PayNow";
import "./Style/card.css";

export default function Card(props) {
  const { projects } = props;
  const [darkMode, setDarkMode] = useState(false);
  const [clickBtnId, setClickBtnId] = useState("");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [donateAmount, setDonateAmount] = useState("");

  const handleDonate = (id) => {
    setClickBtnId(id);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <div className="top-header">
          <div className="logo"></div>
          <div className="toggle-btn">
            <span className="toggle-icon">
              {!darkMode ? <div className="sun" /> : <div className="moon" />}
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* header */}
        <div className="header-banner">
          <div className="header-image" />
          <div className="header-text">
            <h1>We want give them a better tommorow!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button className="header-btn">Get Started</button>
          </div>
        </div>

        {/* title */}
        <div className="title-section">
          <div className="title-logo" />
          <div className="title-text">Projects</div>
        </div>

        {/* cards set */}
        <div className="cards-container">
          {projects?.map((project, index) => (
            <div className="card" key={index}>
              {clickBtnId === project.id ? (
                <>
                  {paymentComplete ? (
                    <div className="">
                      <div className="successful"></div>
                      <div className="donate">
                        You have successfully made the donation!
                      </div>
                    </div>
                  ) : (
                    <PayNow
                      setClickBtnId={setClickBtnId}
                      donateAmount={donateAmount}
                      setDonateAmount={setDonateAmount}
                    />
                  )}
                </>
              ) : (
                <>
                  <div className="card-image">
                    <img src={project.urls.small} alt="random" />
                  </div>
                  <span className="card-title">{project.title}</span>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    className={`range ${
                      project.target_amount >= 30000 &&
                      project.target_amount < 44999
                        ? "orange-bg"
                        : project.target_amount > 45000
                        ? "green-bg"
                        : ""
                    }`}
                    name="rangeInput"
                    value={project.target_amount}
                  />
                  <div className="price">
                    <span>$ {project.target_amount}</span>
                    <span className="secondary-text"> Raised</span>
                  </div>
                </>
              )}

              <div className="button-wrap">
                <button
                  className="donate-now"
                  disabled={clickBtnId === project.id && donateAmount === ""}
                  onClick={() => {
                    if (clickBtnId !== project.id) {
                      handleDonate(project.id);
                    } else {
                      if (paymentComplete) {
                        setPaymentComplete(false);
                        setClickBtnId("");
                        setDonateAmount("");
                      } else {
                        setPaymentComplete(true);
                      }
                    }
                  }}
                  style={{
                    background:
                      clickBtnId === project.id
                        ? paymentComplete
                          ? "#AF93FF"
                          : "#F8C16F"
                        : "",
                  }}
                >
                  {clickBtnId === project.id ? (
                    <>{paymentComplete ? "Done" : "Pay Now"}</>
                  ) : (
                    "Donate Now"
                  )}
                </button>
              </div>
            </div>
          ))}
          <button className="load-btn">More Projects</button>
        </div>
      </div>
    </div>
  );
}
