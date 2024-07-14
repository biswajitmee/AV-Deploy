// src/components/CardCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardCarouselStyle.css';

const CardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true,
    variableWidth: false, // Disable variableWidth to maintain consistent width for large screens
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false, // Disable variableWidth for mobile for consistent width
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          variableWidth: false, // Disable variableWidth for mobile for consistent width
        },
      },
    ],
  };

  const colors = ['#FFF6A1', '#FFE1DB', '#DBFBFF', '#FFF6A1', '#FFE1DB', '#DBFBFF', '#FFF6A1', '#FFE1DB'];

  const cards = [
    { id: 0, content: 'I’m your biggest fan and love AVmade.com, but I\'m looking to create products that are not available on your marketplace. Can you guys please help us? It will mean the world to us. Thanks.', name: 'Kate A', imgSrc: 'profile1.jpg', width: '500px', height: '470px', bg: colors[0] },
    { id: 1, content: 'I’m your biggest fan and love AVmade.com, but I\'m looking to create products that are not available on your marketplace. Can you guys please help us? It will mean the world to us. Thanks.', name: 'Kate B', imgSrc: 'profile2.jpg', width: '500px', height: '470px', bg: colors[1] },
    { id: 2, content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ', name: 'Kate C', imgSrc: 'profile1.jpg', width: '500px', height: '470px', bg: colors[2] },
    { id: 3, content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,', name: 'Kate D', imgSrc: 'profile2.jpg', width: '500px', height: '470px', bg: colors[3] },
    { id: 4, content: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.', name: 'Kate E', imgSrc: 'profile1.jpg', width: '500px', height: '470px', bg: colors[4] },
    { id: 5, content: 'It has survived not only five centuries, but also the leap into electronic typesetting,', name: 'Kate C', imgSrc: 'profile2.jpg', width: '500px', height: '470px', bg: colors[5] },
    { id: 6, content: 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,', name: 'Kate D', imgSrc: 'profile1.jpg', width: '500px', height: '470px', bg: colors[6] },
    { id: 7, content: 'and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', name: 'Kate E', imgSrc: 'profile2.jpg', width: '500px', height: '470px', bg: colors[7] },
  ];

  return (
    <div className=" mx-auto px-12 pb-40  clientsays ">

<p className=' text-[40px] md:text-[50px] font-medium py-36 md:w-2/4 mx-auto'>What Our Clients <br/> Say About Us</p>

      <Slider {...settings}>
        {cards.map((card) => (
       <div key={card.id} className="p-4 pt-20" style={{ width: '100%' }}> 
       <div className="CardDeesign p-12 flex flex-col justify-between" style={{ width: '100%', maxWidth: '500px', height: card.height, backgroundColor: card.bg }}>
        
      
         <div className='cardPhoto'>
           <div className='photoCover' style={{ backgroundImage: `url(${card.imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
         </div>
         <div className='flex-grow flex items-center'>
           <div className='cardContent text-center'>
             {card.content}
           </div>
         </div>
         <div className='cardName text-center text-black'>{card.name} </div>         

       </div>
     </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
