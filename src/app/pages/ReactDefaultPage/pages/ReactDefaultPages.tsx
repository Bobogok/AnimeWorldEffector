import React from "react";
// import logo from "../images/logo.svg";
// import "../styles/App.css";
// import "../styles/index.css";
// import UILoadingComponent from "../components/uiLoading/UILoadingComponent";
// import EffectsSequenceComponent from "../components/EffectsSequence/EffectsSequenceComponent";
// import { useStore } from "effector-react";
import DefaultLayout from "../../../components/layouts/DefaultLayout";

function ReactDefaultPage() {
  return (
    <DefaultLayout>
      <div className="main">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <UILoadingComponent />
          <EffectsSequenceComponent />
        </header> */}
      </div>
    </DefaultLayout>
  );
}

export default ReactDefaultPage;
