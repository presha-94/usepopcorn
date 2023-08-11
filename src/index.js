import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxrating={5}
//         messages={["terrible ", "bad", "okay", "good", "great"]}
//         className="test"
//         onRating={setMovieRating}
//       />
//       <p>the movie rating is {movieRating}</p>
//     </div>
//   );
// }
root.render(
  <React.StrictMode>
    <>
      <App />
      {/* <StarRating
        maxrating={5}
        messages={["terrible ", "bad", "okay", "good", "great"]}
        className="test"
      />
      <Test /> */}
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
