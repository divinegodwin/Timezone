import { useState, useEffect } from "react";
function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let fullTime;
  const format = ["am", "pm"];
  if (minutes < 10) {
    fullTime = `${hours}:0${minutes}${format[0]}`;
  }
  if (hours < 12) {
    fullTime = `${hours}:${minutes}${format[0]}`;
  } else {
    fullTime = `${hours}:${minutes}${format[1]}`;
  }
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const myKey = "AIzaSyCvfHXY8kwClaF4GLYsjUSw-fzWRamaWo";

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/timezone/json?location=${userInput}&timestamp=1331161200&key=${myKey}`
    )
      .then(function (response) {
        response.json();
      })
      .then(function (data) {
        console.log(data);
      })
      .catch((error) => {
        console.warn(error);
      });
      
  }, []);

  return (
    <>
      <div>
        <div className="bg-orange-500 h-[300px] w-full">
          <div>
            <p className="text-white text-center pt-[5rem] font-bold">
              Local Time
            </p>
          </div>
          <div className="flex justify-center">
            <p className="font-bold text-[60px] pt-[1rem] text-white">
              {fullTime}
            </p>
          </div>
        </div>

        <div className="flex justify-center ml-3 mt-[2rem] pt-[10px] h-[60px] bg-slate-200 w-[360px] rounded-full">
          <input
            className="w-[280px] h-[40px] p-4 outline-orange-500 rounded-full"
            onChange={handleInputChange}
            value={userInput}
          ></input>

          <svg
          className="w-[40px] pl-1 pb-2"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </div>

        <div className="bg-slate-200 w-[90%] h-[200px] rounded-lg ml-4 mt-8"></div>
        
      </div>
    </>
  );
}

export default App;
