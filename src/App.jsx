import { useState } from "react";
function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let fullTime;
  const format = ["am", "pm"];
  if (minutes < 10) {
     fullTime = date.toLocaleTimeString([], { hours: '2-digit', minutes: '2-digit' });

  }
  if (hours < 12) {
    fullTime = `${hours}:${minutes}${format[0]}`;
  } else {
    fullTime = `${hours}:${minutes}${format[1]}`;
  }
  const [userInput, setUserInput] = useState("");
  const [continent, setContinent] = useState("");
  const [error, setError] = useState('')
  const [countryName, setCountryName] = useState('')
  let [time, setTime] = useState('')
  
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSelect = (e) =>{
    setContinent(e.target.value)
  }

  const fetchData = () =>{     
        
    if(continent && userInput){
      setError('')

    fetch(`http://worldtimeapi.org/api/timezone/${continent}/${userInput}`)

     .then(response => response.json())
     .then(data=>{
      console.log(data)
      setCountryName(data.timezone)
      const dateTimeString = data.datetime;
      const dateTime = new Date(dateTimeString);
      const time = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTime(time)
     })
     .catch(error =>console.log(error))
   }
   else{
    console.log('please select a valid location')
    setError('please input a valid loacation')
   }
   setUserInput('')
  }

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

        <div className="mt-4 ml-4">
        <label>select region:</label><br />
        <select className="text-blue-500"
        onChange={handleSelect}
        >
          <option value='America'> America</option>
          <option value='Africa'>Africa</option>
          <option value='Asia'>Asia</option>
          <option value='Europe'>Europe</option>
          <option value='Australia'>Australia</option>
        </select>
</div>

<div className="text-[red] mt-[1rem] w-full pl-4">{error}</div>
        <div className="flex justify-center ml-3 mt-[1rem] pt-[10px] h-[60px] bg-slate-200 w-[360px] rounded-full">

          <input
            className="w-[280px] h-[40px] p-4 outline-orange-500 rounded-full"
            onChange={handleInputChange}
            value={userInput}
          ></input>

          <svg
          onClick={fetchData}
          className="w-[40px] pl-1 pb-2 text-blue-500"
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

        </div>

        <div className="bg-slate-200 w-[90%] h-[180px] rounded-lg ml-4 mt-8">

          <div>
            <header className="text-center pt-4 text-[20px] font-bold">{countryName}</header>
            </div>

            <div>
              <p className="text-[4rem] px-3 font-bold text-center text-blue-500">{time}</p>
            </div>

        </div>
        
      
    </>
  );
}

export default App;
