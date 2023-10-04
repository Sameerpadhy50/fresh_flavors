import React from "react";
import style from "../style/HomePage.module.css";
import foodImage from "../assets/food.png";
import leftWaveImage from "../assets/left_waves.png";
import logo from "../assets/logo.png";
import mockup from "../assets/mockup.png";
import rightwaveImage from "../assets/right_waves.png";
import iphoneImg from "../assets/iphone.png";
import pickedright from "../assets/picked_rightbg.png";
import goDesi from "../assets/go_desi_thumb.png";
import women from "../assets/women.png";
import preorder_left from "../assets/preorder_left_thumb.png";
import groopCook from "../assets/group_cook.png"
export const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className={style.first_component}>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="w-full mb-[300px] sm:w-1/2">
            <div className="mx-auto max-w-[400px] relative mb-8 sm:mb-0">
              <img
                src={logo}
                alt=""
                className="w-[25%] rounded-full border-2 border-red-600 p-2"
              />
            </div>
            <h1 className="text-5xl text-center">YOU HAVE TRIED</h1>
            <h1 className="text-5xl text-center">THE REST</h1>
            <h1 className="text-5xl text-center">NOW TRY THE BEST</h1>
          </div>

          <div id={style.food} className="w-full  sm:w-1/2">
            <img className="w-full " src={foodImage} alt="hgf" />
          </div>
        </div>
      </div>

      {/* 2nd Component */}
      <div className="flex  items-center ">
        <div className="w-1/5">
          <img src={leftWaveImage} alt="" className="w-[100%]" />
        </div>
        <div className="text-5xl w-4/5 mx-[300px]">
          <div className="w-[600px] text-center">
            <h1>Get highly curated food at your door-step</h1>
          </div>
        </div>
      </div>
      <div
        className="container w-auto animate-bounce flex justify-center items-center mt-[70px]  mt-[150px]"
        id={style.mockup}
      >
        <img className="w-[50%] " src={mockup} alt="" />
      </div>
      <div className="flex justify-end">
        <img className="flex  items-end" src={rightwaveImage} alt="" />
      </div>

      {/* 3rd component */}
      <div className="container w-auto flex  " id={style.phone}>
        <div className="w-[80%] m-auto flex gap-30">
          <div className="w-[100%] ">
            <img className="w-[100%]" src={iphoneImg} alt="" />
          </div>
          <div className="w-[120%]">
            <h1 className="text-3xl mx-[50px]">Hand picked Restaturant</h1>
            <img className="w-[100%]  my-[-25px]" src={pickedright} alt="" />
            <p className=" p-1  w-[450px] z-1 m-auto mt-[-210px] text-xl text-blue-600">
              Fresh Flavors is thoughtfully choosen to enhance your culinary
              journey of taste, flavour and authenticity.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto flex gap-40">
        <div className="w-[100%] ">
          <h1 className="text-4xl">Go Desi Home made style</h1>
          <img className="w-[100%] my-[15px] ml-[-3px]" src={goDesi} alt="" />
          <p className=" p-1  w-[400px] z-1 m-auto mt-[-220px] text-xl text-blue-600">
            Craving for home made delicacies in your neighbourhood cooks it ? we
            literally bring you Freshly prepared food by Home chef having unique
            culinary skills
          </p>
        </div>
        <div className="w-[100%]">
          <img className="w-[80%]" src={women} alt="" />
        </div>
      </div>
      {/* 4th components */}

      <div id={style.preorder}>
        <div className="w-[80%] m-auto flex gap-[100px]">
          <div className="w-[100%] ">
            <img className="w-[100%]" src={preorder_left} alt="" />
          </div>
          <div className="w-[100%]">
            <h1 className="text-4xl">Go Desi Home made style</h1>
            <img className="w-[100%]" src={goDesi} alt="" />
            <p className=" p-1  w-[400px] z-1 m-auto mt-[-220px] text-xl text-blue-600">
              Craving for home made delicacies in your neighbourhood cooks it ?
              we literally bring you Freshly prepared food by Home chef having
              unique culinary skills
            </p>
          </div>
        </div>
      </div>
      {/* 5th components */}
      <div className="w-[100%] m-auto  p-9">
        <h1 className="text-4xl text-center p-9">We love to cater</h1>
        <div className="flex w-[80%] m-auto gap-x-24">
          <div className=" w-[500px] shadow-md p-4">
            <p className="text-lg font-extralight">
              We at Fresh Flavors believes in creating memorable events and take
              privilege in catering your special event with our sterling
              concepts, delectable cuisines, experienced staff, remarkable
              services and awe-inspiring presentation
            </p>
          </div>
          <div className=" w-[500px] shadow-md">
            <p className="text-lg font-extralight p-4">
              We have the expertise to cater for a wide range of events,
              creating just the right ambience with luscious, original food.
              Every menu is carefully considered for every event, occasion and
              budget.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <img  className="w-[90%]"  src={groopCook} alt="" />
      </div>
      {/* footer part */}
      
      <div id={style.footer}className="flex justify-center items-center">
        <img className="w-[25%] " src={logo} alt="" />
      </div>
      <div className="h-10 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
    </div>
  );
};

export default HomePage;
