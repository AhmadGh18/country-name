// import React, { useEffect, useState } from "react";
// import countries from "country-flag-emoji-json";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import { faRefresh } from "@fortawesome/free-solid-svg-icons";
// export default function Name() {
//   const [randomCountries, setRandomCountries] = useState("");
//   const [textlength, setTextLength] = useState("");
//   const [filledIndices, setFilledIndices] = useState([]);
//   const [classNames, setClassNames] = useState(Array(26).fill(""));
//   const [correctCountries, setCorrectCountries] = useState(0);
//   const [incorrectCount, setIncorrectCount] = useState(0);
//   const [trueattemp, settrueattemp] = useState(0);
//   useEffect(() => {
//     const num = Math.floor(Math.random() * countries.length);
//     const randomCountry = countries[num];
//     setRandomCountries(randomCountry.image);
//     setTextLength(randomCountry.name.toLowerCase());
//   }, []);

//   function lose() {
//     Swal.fire({
//       title: "Game Over",
//       text: "You have lost the game!",
//       icon: "error",
//       confirmButtonText: "Try Again",
//     }).then(() => {
//       resetGame();
//     });
//   }

//   function win() {
//     settrueattemp((old) => old + 1);
//     Swal.fire({
//       title: "Congratulations!",
//       text: "You have won the game!",
//       icon: "success",
//       confirmButtonText: "Play Again",
//     }).then(() => {
//       resetGame();
//     });
//   }

//   function resetGame() {
//     setIncorrectCount(0);
//     setFilledIndices([]);
//     setClassNames(Array(26).fill(""));
//     setCorrectCountries(0);
//     setTextLength("");
//     const num = Math.floor(Math.random() * countries.length);
//     const randomCountry = countries[num];
//     setRandomCountries(randomCountry.image);
//     setTextLength(randomCountry.name.toLowerCase());
//   }
//   function showanother() {
//     resetGame();
//   }
//   function handleLetterClick(letter, index) {
//     if (filledIndices.length === textlength.length) {
//       win();
//       return;
//     }

//     const updatedClassNames = [...classNames];
//     updatedClassNames[index] = "stop";
//     setClassNames(updatedClassNames);

//     if (textlength.includes(letter)) {
//       const indicesToUpdate = textlength
//         .split("")
//         .map((char, i) => (char === letter ? i : -1))
//         .filter((index) => index !== -1 && !filledIndices.includes(index));

//       if (indicesToUpdate.length > 0) {
//         setFilledIndices([...filledIndices, ...indicesToUpdate]);
//         setCorrectCountries(correctCountries + indicesToUpdate.length);
//         if (correctCountries + indicesToUpdate.length === textlength.length) {
//           win(); // Check if the game has been won
//         }
//       }
//     } else {
//       setIncorrectCount(incorrectCount + 1);
//       if (incorrectCount + 1 >= 6) {
//         lose();
//       }
//     }
//   }

//   var letters = "abcdefghijklmnopqrstuvwxyz";
//   var realletters = letters.split("");

//   return (
//     <div className="cont">
//       <div className="navii">
//         <div>
//           <p>back</p>
//           <Link to="/">
//             <FontAwesomeIcon icon={faArrowAltCircleLeft} />
//           </Link>
//         </div>
//         <div>
//           <p>Show another flag</p>
//           <FontAwesomeIcon icon={faRefresh} onClick={showanother} />
//         </div>
//       </div>
//       <img src={randomCountries} alt="not" />
//       <div className="cont2">
//         {textlength.split("").map((e, i) => (
//           <div
//             className="aa"
//             key={i}
//             style={{
//               borderBottom: e === " " ? "none" : "2px black solid",
//             }}
//           >
//             {filledIndices.includes(i) ? e : null}
//           </div>
//         ))}
//       </div>
//       <div className="letters">
//         {realletters.map((e, i) => (
//           <div
//             className={classNames[i]}
//             key={i}
//             onClick={() => handleLetterClick(e, i)}
//           >
//             {e}
//           </div>
//         ))}
//       </div>
//       <p>InCorrect letters:{incorrectCount}</p>
//       <p>Correct countries:{trueattemp}</p>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import countries from "country-flag-emoji-json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  faArrowAltCircleLeft,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import audio from "./assets/725580__tenonic__marble-run-piano-intro.wav";

export default function Name() {
  const [randomCountries, setRandomCountries] = useState("");
  const [textlength, setTextLength] = useState("");
  const [filledIndices, setFilledIndices] = useState([]);
  const [classNames, setClassNames] = useState(Array(26).fill(""));
  const [correctCountries, setCorrectCountries] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [trueattemp, setTrueAttempt] = useState(0);

  useEffect(() => {
    resetGame();
  }, []);

  function resetGame() {
    setIncorrectCount(0);
    setFilledIndices([]);
    setClassNames(Array(26).fill(""));
    setCorrectCountries(0);
    setTextLength("");
    const num = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[num];
    setRandomCountries(randomCountry.image);
    setTextLength(randomCountry.name.toLowerCase());
  }

  function win() {
    setTrueAttempt((old) => old + 1);
    Swal.fire({
      title: "Congratulations!",
      text: "You have won the game!",
      icon: "success",
      confirmButtonText: "Play Again",
    }).then(resetGame);
  }

  function lose() {
    Swal.fire({
      title: "Game Over",
      text: "You have lost the game!",
      icon: "error",
      confirmButtonText: "Try Again",
    }).then(resetGame);
  }

  function handleLetterClick(letter, index) {
    if (filledIndices.length === textlength.length) {
      win();
      return;
    }

    const updatedClassNames = [...classNames];
    updatedClassNames[index] = "bg-red-300 cursor-not-allowed"; // Disable used letters visually
    setClassNames(updatedClassNames);

    if (textlength.includes(letter)) {
      const indicesToUpdate = textlength
        .split("")
        .map((char, i) => (char === letter ? i : -1))
        .filter((index) => index !== -1 && !filledIndices.includes(index));

      if (indicesToUpdate.length > 0) {
        setFilledIndices([...filledIndices, ...indicesToUpdate]);
        setCorrectCountries(correctCountries + indicesToUpdate.length);
        if (correctCountries + indicesToUpdate.length === textlength.length) {
          win();
        }
      }
    } else {
      setIncorrectCount(incorrectCount + 1);
      if (incorrectCount + 1 >= 6) {
        lose();
      }
    }
  }

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="flex flex-col items-center p-4 bg-gradient-to-b bg-gray-200 min-h-screen">
      <div className="flex justify-between w-full max-w-4xl mb-4">
        <div className="flex items-center gap-2">
          <p>Back</p>
          <Link to="/">
            <FontAwesomeIcon
              icon={faArrowAltCircleLeft}
              className="text-2xl hover:text-green-600"
            />
          </Link>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={resetGame}
        >
          <p>Show Another Flag</p>
          <FontAwesomeIcon
            icon={faRefresh}
            className="text-2xl hover:text-green-600"
          />
        </div>
      </div>
      {randomCountries && (
        <img
          src={randomCountries}
          alt="Country Flag"
          className="w-32 h-32 mb-4 shadow-lg"
        />
      )}
      <div className="flex gap-2 mb-4 overflow-x-auto w-full">
        {textlength.split("").map((char, i) => (
          <div
            key={i}
            className="w-full h-10 border-b-2 flex items-center justify-center text-xl font-semibold"
            style={{ borderBottom: char === " " ? "none" : "2px solid black" }}
          >
            {filledIndices.includes(i) ? char : ""}
          </div>
        ))}
      </div>
      <audio src={audio} autoPlay loop={true} muted={false} />

      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-4 mb-4">
        {letters.map((e, i) => (
          <button
            key={i}
            className={`w-12 h-12 flex items-center justify-center border rounded-lg font-bold transition-transform hover:bg-green-300 hover:scale-105 ${classNames[i]}`}
            onClick={() => handleLetterClick(e, i)}
            disabled={classNames[i].includes("cursor-not-allowed")}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="mt-4 text-lg">
        <p>Incorrect Attempts: {incorrectCount}</p>
        <p>Correct Guesses: {trueattemp}</p>
      </div>
    </div>
  );
}
