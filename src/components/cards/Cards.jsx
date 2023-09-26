import { useEffect, useState } from "react";
import Card from "../card/Card";


const Cards = ({quries}) => {
   
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCards(data))
    },[])
    const searchValue = cards.filter(card=>{if(quries == ''){
        return card;
    }
    else if(card.category.toLowerCase() == quries){
        return card;
    }
});
    return (
        <div className="grid md:grid-cols-4 gap-5 md:pt-32 pt-10 mb-20">
            {
                searchValue.map(card =><Card card={card} key={card.id}></Card>)
            }
            
        </div>    
    );
};

export default Cards;
