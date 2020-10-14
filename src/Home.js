import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Garden by JON GORDON"
            price={99}
            rating={4}
            image="https://jongordon.com/files/5715/9552/5735/9781119430322_revised.jpg"
          />
          <Product
            id="2"
            title="Nescafé Classic Coffee, 100g Dawn Jar"
            price={265}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71PiszDkulL._SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={9875}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
          />
          <Product
            id="2"
            title="Apple iPhone 11 (64GB) - Purple"
            price={61000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51oXVi%2BZhhL._SL1024_.jpg"
          />
          <Product
            id="2"
            title="chokola No Added Sugar Dark Chocolate Bar, 80 Grams"
            price={475}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31Hn2s4qTYL.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="5"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Certified Android LED TV 65X8000H (Black) (2020 Model)"
            price={145000}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/8135HvbGvUL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
