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

  const students = [
    {
      name: "Kalkidan Eshetu",
      grade: 11,
      img: "/kal.jpg",
      id: "s-1678680690929",
      father: "Eshetu Tufa",
      phoneNumber: "0911033253",
      location: "Bishoftu",
    },
    {
      name: "Fenet gossa",
      grade: "Afaan Oromo 9",
      img: "/fenet.jpg",
      id: "s-1678680690929",
      father: "Gossa Hunde",
      phoneNumber: "0978786426",
      location: "Ambo",
    },
  ];
  return (
    <div className="w-[90%] h-[80%] m-auto">
      <h2 className="my-[10px] text-2xl"> Registered Students</h2>
      <Slider {...settings} className="shadow-lg">
        {students.map((student) => (
          <div className="h-[75vh] p-3">
            <div className="flex flex-row ">
              <div className="flex-1 h-[60vh]">
                <h1 className="text-xl">Student Details</h1>
                <div className="flex flex-col h-[70vh]">
                  <div className="flex">
                    <img
                      src={`${student.img}`}
                      className="w-[80px] h-[80px] object-cover rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <h1>{student.name}</h1>
                      <h3>G - {student.grade}</h3>
                      <h3>Id - {student.id}</h3>
                    </div>
                  </div>
                  <div className="flex-1 flex mt-3">
                    <div className="h-[100%]">
                      <img
                        src="/report.jpg"
                        className="w-[160px] h-[70%] object-cover mr-3"
                      />

                      <h2>Report Card</h2>
                    </div>
                    <div className="h-[100%]">
                      <img
                        src="/ministry.jpg"
                        className="w-[160px] h-[70%] object-cover mr-3"
                      />

                      <h2>Ministry Card</h2>
                    </div>
                    <div className="h-[100%]">
                      <img
                        src="/transcript.jpg"
                        className="w-[160px] h-[70%] object-cover mr-3"
                      />

                      <h2>Transcript</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 h-[60vh]">
                <h1 className="text-xl">Parent Details</h1>
                <div className="flex flex-col h-[70vh]">
                  <div className="flex">
                    <img
                      src={`/father.jpg`}
                      className="w-[80px] h-[80px] object-cover rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <h1>{student.father}</h1>
                      <h3>{student.location}</h3>
                      <h3>{student.phoneNumber}</h3>
                    </div>
                  </div>
                  <div className="flex-1 flex mt-3">
                    <div className="h-[100%]">
                      <img
                        src="/id.jpg"
                        className="w-[160px] h-[70%] object-cover mr-3"
                      />

                      <h2>Id Card</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-5">
              <button className="p-2 mr-3 bg-green-500 text-white rounded-lg">
                Approve
              </button>
              <button className="p-2 mr-3 bg-red-500 text-white rounded-lg">
                Deny
              </button>
            </div>
          </div>
        ))}

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
