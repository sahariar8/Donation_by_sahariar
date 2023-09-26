import { useEffect, useState } from "react";
import DonateItem from "../donateItem/DonateItem";


const Donation = () => {
    const [donateItems,setDonateItems] = useState([]);
    const [noData,setNoData] = useState(false);
    const [isShow,setIsShow] = useState(false);

    useEffect(()=>{
        const Items = JSON.parse(localStorage.getItem('Item'));
        if(Items){
            setDonateItems(Items);
        }else{
           setNoData('No Data Found')
        }
        
    },[])
    return (
        <div className='py-20'>
            {
                noData?<p className="flex justify-center py-60 text-4xl font-semibold">{noData}</p> : 
                <div className="grid md:grid-cols-2 gap-5">
                    {
                        isShow ? donateItems.map(donateItem=><DonateItem  donateItem={donateItem} key={donateItem.id}></DonateItem>)
                        :
                        donateItems.slice(0,4).map(donateItem=><DonateItem  donateItem={donateItem} key={donateItem.id}></DonateItem>)
                        
                    }
                </div>
            }
        
           {
                (donateItems.length > 4 && !isShow) && (
                    <button  className ="block bg-green-400 mx-auto px-6 py-2 rounded font-bold text-white mt-10" onClick={()=>setIsShow(!isShow)}>See All</button>
                )
            }
         
            

        </div>
    );
};

export default Donation;