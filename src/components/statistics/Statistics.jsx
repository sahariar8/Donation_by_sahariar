import { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { useLoaderData } from 'react-router-dom';




const Statistics = () => {
    const [items,setItems] = useState();
    const allDonate = useLoaderData([]);
    const allDonateLength = allDonate.length;
   
    const donatePercentage =((items/allDonateLength)*100).toFixed(2);
    const intDonationPercentage = parseFloat(donatePercentage);
 
    const donationleft = (100 - intDonationPercentage);
   
   
    useEffect(()=>{
      if(localStorage.getItem('Item')){
        const donation = JSON.parse(localStorage.getItem('Item'))
        setItems(donation.length);
      }else{
        setItems(0)
      } 
    },[]);
    
    const data = [
        ["Donation", "Hours per Day"],
        ["Donation Percentage",intDonationPercentage],
        ["Donation left",donationleft],
      ];
     
    
    
    return (
       <div className='pt-32 max-w-screen-xl mx-auto'> 
       <h1 className='text-xl md:text-3xl text-center font-bold'>Donation Chart</h1>
       
       <Chart
        chartType="PieChart"
        data={data}
        width={"100%"}
        height={"400px"}
        />      
       </div>
    );
};

export default Statistics;

