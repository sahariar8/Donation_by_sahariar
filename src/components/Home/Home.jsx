

import { useState } from 'react';
import Banner from '../Banner/Banner';
import Cards from '../cards/Cards';

const Home = () => {
    const [quries,setQueries]=useState('');
    return (
        <div>
            <Banner setQueries={setQueries}></Banner>
            <Cards quries={quries}></Cards>
        </div>
    );
};

export default Home;