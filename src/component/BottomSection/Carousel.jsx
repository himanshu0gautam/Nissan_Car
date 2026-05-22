import React, { useEffect, useState } from "react";

const images = [
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/100220_Nissan-April-CNG-Main-Banner-Desktop%202560x1440px-b2.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/600x33748-25feb.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/Images/NRBC-Digital-Banner-600-x-337.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/takton/Nissan-Tekton-News-Section-600x337-2.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-magnite/Offers-images/1-Nissan-July-Promotional-600x337.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-magnite/Nissan-Sep.-GST-Tactical-Banner-600x337.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
  {
    img: "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/new-magnite/Offers-images/1-Nissan-Spinny-Creative-600x337.jpg.ximg.l_12_h.smart.jpg",
    date: "December 24, 2025",
    title: "Nissan Gravite CNG - The New Class of Together",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div>
      <div className="bg-[#F6F6F6] w-full p-2">
        <h1 className="mt-14 mb-5 text-3xl font-normal tracking-wider uppercase flex justify-center items-center ">
          Latest News
        </h1>
        <div className="flex w-full items-center ">
          <div className="img w-full flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="text-3xl flex items-center justify-center"
            >
              {" "}
              ❮{" "}
            </button>
            <div className="w-auto flex gap-4 p-4">
              <img
                className="object-cover w-[36vw]"
                src={images[current].img}
                alt=""
              />
              <div className="flex flex-col gap-2 pt-12 w-[30vw] ">
                <div className="font-normal text-[20px] ">
                  {images[current].date}
                </div>
                <div className="font-light text-[16px]">
                  {images[current].title}
                </div>
                <a className="mt-6 inline-block font-medium text-[1rem]">
                  Read More
                </a>
              </div>
            </div>
            <button
              onClick={nextSlide}
              className="text-3xl flex items-center justify-center"
            >
              {" "}
              ❯{" "}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center py-10">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                height: "4px",
                width: "40px",
                borderRadius: "12px",
                margin: "0 5px",
                display: "inline-block",
                cursor: "pointer",
                backgroundColor: index === current ? "black" : "lightgray",
              }}
            ></span>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center py-14">
        <button className="uppercase font-bold text-[1rem] py-3 px-8 border-black border-2 rounded-full bg-black text-white ">
          view all
        </button>
      </div>

      kjl
    </div>

  );
};

export default Carousel;
