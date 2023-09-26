import { useState } from "react";


const Banner = ({setQueries}) => {
  const [cards,setCards] = useState([]);

    const handleButton = () =>
        {
            setQueries(cards);
            // console.log(setQueries)
        }
    const handleInputChange = (e)=>{
             setCards(e.target.value);     
          // setQueries(e.target.value); 
    }    
      
      
  return(
    
    <div className="relative bg-[url('../donation.png')]">
        <div className="text-center md:py-32 pt-10 bg-white bg-opacity-90">
      <h1 className="text-2xl md:text-5xl font-bold py-3">
        I Grow By Helping People In Need
      </h1>
      <div className="pt-7">
        <input
          type="search"
          name="search"
          className="rounded-l-lg border-slate-400 outline-none w-[30vh] py-3"
          placeholder="search here..."
         onChange={handleInputChange}
        />
        <button className="bg-red-500 text-white p-[13px] rounded-r-lg" onClick={handleButton}>
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default Banner;
