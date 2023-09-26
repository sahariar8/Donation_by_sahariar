
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,logo,title,category,color} = card;
    return (
      <Link to={`/details/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={logo} alt="Shoes" className='w-full h-[220px]' />
          </figure>
          <div className="p-4" style={{ backgroundColor:color.card_bg_color}}>
            <h2 className="btn btn-sm" style={{ backgroundColor:color.title_bg_color,color:color.text_color}}>{category}</h2>
            <p style={{ color:color.text_color}} className='text-lg font-semibold py-2'>{title}</p>
          </div>
        </div>
      </Link>
    );
};

export default Card;