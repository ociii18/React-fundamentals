import React from 'react';
import { RxLayers } from 'react-icons/rx';

export default function Tochoose() {
  return (
    <div className="text-black bg-gray-50 py-12 ">
      
      <div className="flex flex-col items-center text-center">
        <span className="text-lg font-bold mb-4 text-primary-100">Why Choose Us</span>
        <h1 className="text-lg text-gray-600 max-w-xl">
          Unleash your productivity with our premium workspace solutions. Elevate
        </h1>
        <h2 className="text-lg text-gray-600 max-w-xl">
          your work game and join the winning team today.
        </h2>
      </div>

      
      <div className="grid grid-cols-3 gap-4 mt-12">
        
        <div className="space-y-6 pl-20">
          {[...Array(3)].map((_, index) => (
            <div key={`left-${index}`} className="flex flex-col justify-center items-center bg-teal-100 h-60 w-70 ">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-8">
                <RxLayers className="text-6xl" />
              </div>
              <h1 className="text-4xl text-black font-bold">Creative Space</h1>
              <p className="text-sm text-black text-center">
                Lorem ipsum dolor sit amet, cn consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center items-center h-full">
          <img
            src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2019/02/10124816/patent-pending-1.jpg"
            alt="Workspace"
            className="h-[100%] w-[100%] object-cover rounded-lg"
          />
        </div>

        
        <div className="space-y-6 ml-10 pl-20">
          {[...Array(3)].map((_, index) => (
            <div key={`right-${index}`} className="flex flex-col justify-center items-center bg-teal-100 h-60 w-70">
              <div className="mx-auto text-center rounded-full bg-primary-50 p-8">
                <RxLayers className="text-6xl" />
              </div>
              <h1 className="text-4xl text-black font-bold">Creative Space</h1>
              <p className="text-sm text-black text-center">
                Lorem ipsum dolor sit amet, cn consectetur adipiscing elit
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-ls font-bold mb-4 text-primary-100 text-center mt-12">
        <h1 className="text-3xl font-bold text-black-600 max-w-xl">

        </h1>

      </div>
      <div className="h-[300px] relative">
        <img src="https://cdna.artstation.com/p/assets/images/images/050/336/018/large/chandra-sheker-detectiveoffice-layout-0002.jpg?1654617494" alt="" 
        className="h-full w-full object-cover"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className=" justify-center flex space-x-4">
            <h1 className="text-4xl text-teal-400 font-bold mb-4 text-center">Our </h1>
            <h1 className="text-4xl text-white font-bold mb-4 text-center">   Mision </h1>
          </div>
           <p className="text-sm text-white max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis consequat, est sociosqu
                vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere, ultrices fermentum libero pretium
                convallis pharetra
              </p>
              <div></div>
        </div>
        
      </div>
    </div>
  );
}
