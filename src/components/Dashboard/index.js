import React from 'react';
import './index.css';
import { IoCalendar } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState,useEffect } from 'react';
import Modal from '../Modal';

export default function Dashboard({expanded}) {

  const [slidesToShow, setSlidesToShow] = useState(2);
  const [showAllItems, setShowAllItems] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 510) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
      };
      

  const savedLibraryCards = [
    {
      name: 'My Saved Library 1',
      date: 'dd-mm-yy',
      libraryIconColor:"card1-color"
    },
    {
      name: 'My Saved Library 2',
      date: 'dd-mm-yy',
      libraryIconColor:"card2-color"
    },
    {
      name: 'My Saved Library 3',
      date: 'dd-mm-yy',
      libraryIconColor:"card3-color"
    },
    {
      name: 'My Saved Library 4',
      date: 'dd-mm-yy',
      libraryIconColor:"card4-color"
    },
    {
      name: 'My Saved Library 5',
      date: 'dd-mm-yy',
      libraryIconColor:"card5-color"
    },
    {
        name: 'My Saved Library 6',
        date: 'dd-mm-yy',
        libraryIconColor:"card6-color"
    },
  ];

  const carouselArray=[
    {
        id:1,
        imgUrl:"https://media.istockphoto.com/id/1458480693/photo/chat-with-ai-or-artificial-intelligence-digital-technology-robot-application-openai-generate.jpg?s=612x612&w=0&k=20&c=QlHOaNvrOEfHbuju4_qkxI4TvwZ63sHPNxMVTZtswhw=",
        heading:"State of Markets",
        discription:"The market capitalisation of Indian stocks crossed US$4.5 trillion in january."

    },
    {
        id:2,
        imgUrl:"https://media.istockphoto.com/id/1431402230/photo/financial-charts-showing-growing-revenue-on-touch-screen-finance-images-finance-pictures.jpg?s=612x612&w=0&k=20&c=mLKJgAF1jiTOCLdTWcKU_rSLa-KBL6vAX5vczEtrIIw=",
        heading:"The Central Capex Surge",
        discription:'The last few years have seen very substantial steup in capital'
    },
    {
        id:3,
        imgUrl:"https://media.istockphoto.com/id/1051690398/photo/financial-growth-chart.jpg?s=612x612&w=0&k=20&c=c8R2y-i0nLjFaYakNemWpMonmsXuKiwNv-aPL65PhCI=",
        heading:'Direct Taxes and Business Cycles',
        discription:'The share of direct taxes in total tax collections of the central government is'
    },
    {
        id:4,
        imgUrl:"https://media.istockphoto.com/id/881936328/vector/man-in-front-of-the-electronic-screen-to-do-data-monitoring-and-analysis.jpg?s=612x612&w=0&k=20&c=WUGR2Uextp76ZSmj5Vw7Cilj8ocKODRsFjFSL55KY68=",
        heading:'Banking Monitor',
        discription:'Credit growth has remained broodly stable in recent weeks of just'
    },
    {
      id:1,
      imgUrl:"https://media.istockphoto.com/id/1458480693/photo/chat-with-ai-or-artificial-intelligence-digital-technology-robot-application-openai-generate.jpg?s=612x612&w=0&k=20&c=QlHOaNvrOEfHbuju4_qkxI4TvwZ63sHPNxMVTZtswhw=",
      heading:"State of Markets",
      discription:"The market capitalisation of Indian stocks crossed US$4.5 trillion in january."

  },
  {
      id:2,
      imgUrl:"https://media.istockphoto.com/id/1431402230/photo/financial-charts-showing-growing-revenue-on-touch-screen-finance-images-finance-pictures.jpg?s=612x612&w=0&k=20&c=mLKJgAF1jiTOCLdTWcKU_rSLa-KBL6vAX5vczEtrIIw=",
      heading:"The Central Capex Surge",
      discription:'The last few years have seen very substantial steup in capital'
  },
  {
      id:3,
      imgUrl:"https://media.istockphoto.com/id/1051690398/photo/financial-growth-chart.jpg?s=612x612&w=0&k=20&c=c8R2y-i0nLjFaYakNemWpMonmsXuKiwNv-aPL65PhCI=",
      heading:'Direct Taxes and Business Cycles',
      discription:'The share of direct taxes in total tax collections of the central government is'
  },
  {
      id:4,
      imgUrl:"https://media.istockphoto.com/id/881936328/vector/man-in-front-of-the-electronic-screen-to-do-data-monitoring-and-analysis.jpg?s=612x612&w=0&k=20&c=WUGR2Uextp76ZSmj5Vw7Cilj8ocKODRsFjFSL55KY68=",
      heading:'Banking Monitor',
      discription:'Credit growth has remained broodly stable in recent weeks of just'
  }
  ]

  const handleViewMore = () => {
    setShowAllItems(true);
  };

  const handleCloseModal = () => {
    setShowAllItems(false);
  };

  const todayDate = new Date();
  let hours = todayDate.getHours().toString().padStart(2, '0'); 
  const minutes = todayDate.getMinutes().toString().padStart(2, '0'); 
  const ampm = hours >= 12 ? 'PM' : 'AM'; 
  hours = hours % 12 || 12; 
  const currentTime = `${hours}:${minutes} ${ampm}`;
  const greeting = ampm === "PM" ? "Afternoon" : "Morning"

  return (
    <div className= {`main-container2 ${expanded ? 'margin-expand':"margin-decerease"}`}>
      <div className={`top-section ${expanded ?'decrease':'expand'}`}>
        <div>
          <h3 className='greeting'>Good {greeting}, Sai Kumar</h3>
          <p className='para'>You are subscribed to our Retail plan</p>
        </div>

        <div className='d-flex'>
          <IoCalendar className='calender' />
          <p className='date'>Today {todayDate.getDate()} {todayDate.toLocaleString('default', { month: 'long' })}</p>
          <FaRegClock className='calender' />
          <p className='date'>{currentTime}</p>
          <IoMdNotificationsOutline className='calender notification' />
        </div>
      </div>

      <div className='saved-cards-container'>
        {savedLibraryCards.map((eachCard, index) => (
          <div key={index} className='saved-cards'>
            <MdLibraryBooks className={`library-icon ${eachCard.libraryIconColor}`} />
            <h4>{eachCard.name}</h4>
            <p>{eachCard.date}</p>
          </div>
        ))}
      </div>
      <div className='d-flex'>
      <div className='carousel-container'>
        <Slider {...settings}>
        {carouselArray.map((eachCard, id) => (
          <div key={id} className='carousel-card'>
            <img src={eachCard.imgUrl} className='carosel-img' alt={eachCard.heading}/>
            <h4>{eachCard.heading}</h4>
            <p>{eachCard.discription}</p>
          </div>
        ))}
        </Slider>
        {!showAllItems && (
            <div className='center'>
              <button className='View-btn' onClick={handleViewMore}>View More</button>
            </div>
          )}
        </div>
        <div className='Recent-container'>
          <div className='d-flex space'>
       <p className='recent'>Recent Releases</p>
       <select className='select'>
        <option>India</option>
        <option>Uk</option>
        <option>USA</option>
        <option>Germany</option>
        <option>Russia</option>
       </select>
        </div>
        <hr/>
        <div className='d-flex recent-data'>
          <div>
            <p className='dot'></p>
            <p className='line'></p>
          </div>
          <div className='data-container'>
              <h3 className='date-year'>February 12 ,2024</h3>
              <h2 className='type'>Industrial Production</h2>
              <p className='discription'>The Index of Industrial Production (IIP) for India in February 2024 was 139.6 for mining, 144.5 for manufacturing, and 187.1 for electricity. The IIP for January 2024 was 153.0, with a 3.8% growth. The IIP for February 2024 saw a 5.7% growth, which is a four-month high. </p>
          </div>
        </div>
          <div className='d-flex recent-data'>
              <div>
                <p className='dot'></p>
                <p className='line'></p>
              </div>
              <div className='data-container'>
                <h3 className='date-year'>February 12 ,2024</h3>
                <h2 className='type'>Industrial Production</h2>
                <p className='discription'>The Index of Industrial Production (IIP) for India in February 2024 was 139.6 for mining, 144.5 for manufacturing, and 187.1 for electricity. The IIP for January 2024 was 153.0, with a 3.8% growth. The IIP for February 2024 saw a 5.7% growth, which is a four-month high. </p>
              </div>
          </div>
        </div>
          {showAllItems && <Modal onClose={handleCloseModal} items={carouselArray} />}
      </div>
    </div>

  );
}