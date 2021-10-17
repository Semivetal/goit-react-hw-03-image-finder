import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LoaderSpinner from "react-loader-spinner";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="Loader">
      <LoaderSpinner
        type="Puff"
        color="#046d0c"
        height={100}
        width={100}
        timeout={5000}
        margin-left={300}
      />
    </div>
  );
}
