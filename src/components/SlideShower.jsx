import React from "react";
import Slider from "react-slick";

const SlideShower = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-[90%] h-[80%] m-auto">
      <h2 className="my-[10px] text-2xl"> Registered Students</h2>
      <Slider {...settings} className="shadow-lg">
        <div className="h-[70vh] p-3">
          <div className="flex flex-row ">
            <div className="flex-1 h-[70vh]">
              <h1 className="text-xl">Student Details</h1>
              <div className="flex flex-col h-[70vh]">
                <div className="flex">
                  <img
                    src="https://placehold.co/600x400"
                    className="w-[80px] h-[80px] object-cover rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h1>Student Name</h1>
                    <h3>age</h3>
                    <h3>id</h3>
                  </div>
                </div>
                <div className="flex-1 flex mt-3">
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Report Card</h2>
                  </div>
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Ministry Card</h2>
                  </div>
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Transcript</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-[70vh]">
              <h1 className="text-xl">Parent Details</h1>
              <div className="flex flex-col h-[70vh]">
                <div className="flex">
                  <img
                    src="https://placehold.co/600x400"
                    className="w-[80px] h-[80px] object-cover rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h1>Parent Name</h1>
                    <h3>Adress</h3>
                    <h3>Phone Number</h3>
                  </div>
                </div>
                <div className="flex-1 flex mt-3">
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Report Card</h2>
                  </div>
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Ministry Card</h2>
                  </div>
                  <div className="h-[100%]">
                    <img
                      src="https://placehold.co/600x400"
                      className="w-[160px] h-[70%] object-cover mr-3"
                    />

                    <h2>Transcript</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default SlideShower;
