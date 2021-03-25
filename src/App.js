import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import sorry from "./assets/sorry.png";
import background from "./assets/background.png";

const App = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-2">
            <img src={logo} alt="logo" class="logo ml-5" />
          </div>
        </div>
        <div class="row ml-5">
          <div class="col-md-6">
            <img src={sorry} alt="sorry" class="sorry-img" />
          </div>
          <div class="col-md-6">
            <img src={background} alt="background" class="background" />
            <p class="message">
              Sorry{" "}
              <span class="text">
                for the inconvenience caused! <br />
                We are currently in our
              </span>{" "}
              rebranding
              <span class="text"> phase.</span>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p class="connect">
              Feel free to connect with us at
              <span class="email"> info@blackspektro.com</span>
            </p>
          </div>
        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-3 mt-5">
            <p class="credit">
              Illustration credit:
              <a href="https://storyset.com/people" target="_blank">
                Illustration by Freepik Storyset
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
