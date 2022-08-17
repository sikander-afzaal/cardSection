import React from "react";
import img from "../assets/img/nft/nft1.jpg";
import img2 from "../assets/img/nft/nft2.jpg";
import img3 from "../assets/img/nft/nft3.jpg";
import img4 from "../assets/img/nft/nft4.jpg";
import img5 from "../assets/img/nft/nft5.jpg";
import img6 from "../assets/img/nft/nft6.jpg";
import img7 from "../assets/img/nft/nft7.jpg";
import img8 from "../assets/img/nft/nft8.jpg";
import img9 from "../assets/img/nft/nft9.jpg";
import img10 from "../assets/img/nft/nft10.jpg";
import img11 from "../assets/img/nft/nft11.jpg";
import img12 from "../assets/img/nft/nft12.jpg";

function Card({ img, link, name }) {
  return (
    <div className="card">
      <a href={link} target={"blank"}>
        <img src={img} alt="" />
      </a>
      <h3>{name}</h3>
      {/* <div className="price-div">
        <h4>Price</h4>
        <p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
          </svg>
          {price}
        </p>
      </div>
      <h5>End in a day</h5> */}
    </div>
  );
}

function Cards() {
  const data = [
    {
      img: img,
      name: "VANDA NFT #29",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/29",
    },
    {
      img: img2,
      name: "VANDA NFT #28",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/28",
    },
    {
      img: img3,
      name: "VANDA NFT #26",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/26",
    },
    {
      img: img4,
      name: "VANDA NFT #27",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/27",
    },
    {
      img: img5,
      name: "VANDA NFT #30",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/30",
    },
    {
      img: img6,
      name: "VANDA NFT #47",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/47",
    },
    {
      img: img7,
      name: "VANDA NFT #45",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/45",
    },
    {
      img: img8,
      name: "VANDA NFT #59",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/59",
    },
    {
      img: img9,
      name: "VANDA NFT #31",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/31",
    },
    {
      img: img10,
      name: "VANDA NFT #32",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/32",
    },
    {
      img: img11,
      name: "VANDA NFT #34",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/34",
    },
    {
      img: img12,
      name: "VANDA NFT #35",
      link: "https://opensea.io/assets/ethereum/0xb7bf46fec4b213066ad6d6fff7f0e8578917110c/35",
    },
  ];
  return (
    <div className="cards-div">
      <h1>Vanda NFT Collection</h1>
      <div className="cards-grid">
        {data.map((elem, idx) => {
          return <Card {...elem} key={"card" + idx} />;
        })}
      </div>
      <a href="https://opensea.io/collection/vandanft" target={"blank"}>
        View the Full Collection on OpenSea
      </a>
    </div>
  );
}

export default Cards;
