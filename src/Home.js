import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                     src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"/>
            
            
            <div className="home__row">
                <Product id="43551" title="The Garden by JON GORDON" price="9.99" rating="4" image="https://jongordon.com/files/5715/9552/5735/9781119430322_revised.jpg"/>
                <Product/>
                
                
            </div>
            <div className="home__row">
                <Product/>
                <Product/>
                <Product/>
                
                
            </div>
            <div className="home__row">
                <Product/>

            </div>
        </div>
            
        </div>
    )
}

export default Home
