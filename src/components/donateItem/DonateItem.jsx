import { Link } from "react-router-dom";

const DonateItem = ({donateItem}) => {
    const {id,logo,title,category,color,donation_amount} = donateItem;

    return (
      <div className="flex flex-row rounded-lg" style={{ backgroundColor:color.card_bg_color}}>
            <div>
                <img src={logo} alt="" className="w-[230px] h-[230px] rounded" />
            </div>
            <div className="pl-6 pt-6">
                <h2 className="btn btn-sm" style={{ backgroundColor:color.title_bg_color,color:color.text_color}}>{category}</h2>
                <p className="text-lg md:text-2xl font-bold md:pt-3 pt-1 md:pb-2 pb-1">{title}</p>
                <p className="text-xl font-bold md:pb-6 pb-4" style={{color:color.text_color}}>${donation_amount}</p>
                <Link to={`/details/${id}`}><button className="btn text-white" style={{backgroundColor:color.text_color}}>View Details</button></Link>
            </div>
            
      </div>
    );
};

export default DonateItem;