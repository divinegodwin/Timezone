

function App() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let fullTime;

  const format = ["am", "pm"];
  if (minutes < 10) {
    fullTime = `${hours}:0${minutes}:${format[0]}`;
  }
  if (hours < 12) {
    fullTime = `${hours}:${minutes}:${format[0]}`;
  } else {
    fullTime = `${hours}:${minutes}:${format[1]}`;
  }

  

   /* fetch('')
    .response(function (){
      response.json()
    })
    .then(function(){
      console.log(data)
    })
    .catch(error =>{
      console.warn(error)
    })
*/
  

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
          <input className="w-[250px] h-[40px]  outline-orange-500 rounded-full"></input>
          <button className="pl-2 font-bold text-[18px] pb-2">find</button>
        </div>

        <div className="bg-slate-200 w-[90%] h-[200px] rounded-lg ml-4 mt-8"></div>
      </div>
    </>
  );
}

export default App;
