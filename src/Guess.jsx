// import React from "react";
// import { useState, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import countries from "country-flag-emoji-json";
// export default function Guess() {
//   const [randomCountries, setRandomCountries] = useState(generateRandomFlags());
//   const [wantedIndex, setWantedIndex] = useState(Math.floor(Math.random() * 4));
//   const wanted = randomCountries[wantedIndex];
//   const [message, setmessage] = useState("");
//   const [correct, setcorrect] = useState(0);
//   const [wrong, setwrong] = useState(0);
//   const [heightscore, sethightsscore] = useState(0);
//   function generateRandomFlags() {
//     const shuffledCountries = countries.sort(() => Math.random() - 0.5);
//     return shuffledCountries.slice(0, 4);
//   }

//   useEffect(() => {
//     setRandomCountries(generateRandomFlags());
//     setWantedIndex(Math.floor(Math.random() * 4));
//     setmessage("");
//   }, []);

//   function handleclick(e, countryIndex) {
//     const clickedCountry = randomCountries[countryIndex];
//     setRandomCountries(generateRandomFlags()); // Generate new random flags
//     setWantedIndex(Math.floor(Math.random() * 4)); // Generate new "wanted" index
//     if (clickedCountry.name === wanted.name) {
//       setcorrect(correct + 1);
//       window.localStorage.setItem("heightscore", correct);
//     } else {
//       setwrong(wrong + 1);
//     }
//   }

//   return (
//     <div className="App">
//       <div>
//         <p>back</p>
//         <Link to="/">
//           <FontAwesomeIcon icon={faArrowAltCircleLeft} />
//         </Link>
//       </div>
//       <div className="hold">
//         {randomCountries.map((country, i) => (
//           <div key={i} className="flex h-40" onClick={(e) => handleclick(e, i)}>
//             <img src={country.image} />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center text-2xl font-body">
//         <p>
//           Which one is{" "}
//           <span className="text-red-600 font-bold">{wanted.name}</span>
//         </p>
//       </div>
//       <div className="scrores">
//         <p>correct: {correct}</p>

//         <p>wrong is :{wrong}</p>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import countries from "country-flag-emoji-json";
import audio from "./assets/725580__tenonic__marble-run-piano-intro.wav";

export default function Guess() {
  const [randomCountries, setRandomCountries] = useState(generateRandomFlags());
  const [wantedIndex, setWantedIndex] = useState(Math.floor(Math.random() * 4));
  const wanted = randomCountries[wantedIndex];
  const [message, setMessage] = useState("");
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  function generateRandomFlags() {
    const shuffledCountries = countries.sort(() => Math.random() - 0.5);
    return shuffledCountries.slice(0, 4);
  }

  useEffect(() => {
    setRandomCountries(generateRandomFlags());
    setWantedIndex(Math.floor(Math.random() * 4));
    setMessage("");
  }, []);

  function handleClick(e, countryIndex) {
    const clickedCountry = randomCountries[countryIndex];
    setRandomCountries(generateRandomFlags()); // Generate new random flags
    setWantedIndex(Math.floor(Math.random() * 4)); // Generate new "wanted" index
    if (clickedCountry.name === wanted.name) {
      setCorrect(correct + 1);
      window.localStorage.setItem("heightscore", correct);
    } else {
      setWrong(wrong + 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-300 font-body">
      <div className="mb-4">
        <Link
          to="/"
          className="flex items-center text-blue-500 hover:text-blue-700 transition"
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-2" />
          <span className="text-lg">Back</span>
        </Link>
      </div>
      <audio src={audio} autoPlay loop={true} muted={false} />

      <div className="grid grid-cols-2 gap-4 mb-6">
        {randomCountries.map((country, i) => (
          <div
            key={i}
            className="flex justify-center items-center border border-gray-300 shadow-md rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white"
            onClick={(e) => handleClick(e, i)}
          >
            <img
              src={country.image}
              alt={country.name}
              className="w-32 h-32 object-contain p-2"
            />
          </div>
        ))}
      </div>

      <div className="text-center mb-4">
        <p className="text-xl font-semibold">
          Which one is{" "}
          <span className="text-red-600 font-bold">{wanted.name}</span>?
        </p>
      </div>

      <div className="flex flex-col items-center text-lg">
        <p className="mb-1">Correct: {correct}</p>
        <p>Wrong: {wrong}</p>
      </div>
    </div>
  );
}
