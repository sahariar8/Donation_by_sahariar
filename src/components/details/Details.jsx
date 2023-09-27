
import {  useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
const Details = () => {
    const Infos = useLoaderData();
    const {id} = useParams();
    const detail = Infos.find(detail=> detail.id == id)
    const {logo,title,details,donation_amount,color} = detail;
    const handleAddToDonation = () => {
        const donateItem =[];
        const data = JSON.parse(localStorage.getItem('Item'));
        if(!data){
            donateItem.push(detail)
            localStorage.setItem('Item',JSON.stringify(donateItem));
            Swal.fire( 'Good job!',
            'Donation Successfully Added !!',
            'success')
        }else{
            const isExist = data.find(data=> data.id == id)
            if(!isExist){
                donateItem.push(...data,detail)
                localStorage.setItem('Item',JSON.stringify(donateItem));
                Swal.fire( 'Good job!',
                'Donation Successfully Added !!',
                'success')
            }else{
               Swal.fire({icon: 'error',
                title: 'Oops...',
                text: 'Already donated !!'});
            }
            
        }
    }
    return (
        <div className='max-w-screen-xl mx-auto  py-20'> 
           <div className='relative'>
              <img src={logo} alt="" className='w-full h-[280px] md:h-[600px] rounded-lg'/>
              <div className='absolute bottom-0 left-0 right-0 px-6 py-8 bg-black bg-opacity-50 text-white'>
                    <button onClick={handleAddToDonation} className='px-4 py-3 bg-red-600 font-bold text-white rounded-lg' style={{backgroundColor:color.text_color}}>Donate ${donation_amount}</button>
              </div>
           </div>
           <div className='ml-3 pt-12 md:ml-0'>
                <p className='text-3xl font-bold'>{title}</p>
                <p className='py-5  text-sm text-slate-700 '>{details}</p>
           </div>
        </div>
    );
};

export default Details;