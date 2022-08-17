import React from "react";
import img from "../assets/img/vand-1.jpg";

function Card({ img, price, title }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <div className="price-div">
        <h4>Price</h4>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
          </svg>
          {price}
        </p>
      </div>
      <h5>End in a day</h5>
    </div>
  );
}

function Cards() {
  return (
    <div className="cards-div">
      <h1>Vanda NFT Collection</h1>
      <div className="cards-grid">
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
        <Card img={img} price={0.288} title={"Stickmen Toys #2746"} />
      </div>
      <a href="https://opensea.io/collection/vandanft" target={"blank"}>
        View the Full Collection on OpenSea
      </a>
    </div>
  );
}

export default Cards;
