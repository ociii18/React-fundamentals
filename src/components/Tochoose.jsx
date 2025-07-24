import React from 'react';
import { RxLayers } from 'react-icons/rx';

export default function Tochoose() {
  return (
    <div className="text-black bg-gray-50 py-12">
      <div className="flex flex-col items-center text-center">
        <span className="text-lg font-bold mb-4 text-teal-400">Why Choose Us</span>
        <h1 className="text-lg text-gray-600 max-w-xl">
          Unleash your productivity with our premium workspace solutions. Elevate
        </h1>
        <h2 className="text-lg text-gray-600 max-w-xl">
          your work game and join the winning team today.
        </h2>
      </div>

      
      <div className="mt-12">
  
  {/* <div className="hidden md:grid md:grid-cols-3 md:gap-4">
    
    <div className="space-y-6 pl-20">
      {[...Array(3)].map((_, index) => (
        <div key={`left-${index}`} className="flex flex-col justify-center items-center bg-teal-100 h-60 w-70">
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
  </div> */}

  
  <div className="md:hidden px-4 mt-8 space-y-6">
    
    {[...Array(3)].map((_, index) => (
      <div key={`mobile-first-${index}`} className="flex flex-col justify-center items-center bg-teal-100 p-6 rounded-lg">
        <div className="mx-auto text-center rounded-full bg-primary-50 p-4 mb-4">
          <RxLayers className="text-3xl" />
        </div>
        <h1 className="text-xl text-black font-bold mb-2">Creative Space</h1>
        <p className="text-sm text-black text-center max-w-xs">
          Lorem ipsum dolor sit amet, cn consectetur adipiscing elit
        </p>
      </div>
    ))}
    
    
    <div className="mt-6">
      <img
        src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2019/02/10124816/patent-pending-1.jpg"
        alt="Workspace"
        className="h-[100%] w-full object-cover rounded-lg"
      />
    </div>

    
    {[...Array(3)].map((_, index) => (
      <div key={`mobile-last-${index}`} className="flex flex-col justify-center items-center bg-teal-100 p-6 rounded-lg">
        <div className="mx-auto text-center rounded-full bg-primary-50 p-4 mb-4">
          <RxLayers className="text-3xl" />
        </div>
        <h1 className="text-xl text-black font-bold mb-2">Creative Space</h1>
        <p className="text-sm text-black text-center max-w-xs">
          Lorem ipsum dolor sit amet, cn consectetur adipiscing elit
        </p>
      </div>
    ))}
  </div>
</div>

      
      <div className="hidden md:block">
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

{/*           
          <div className="flex justify-center items-center h-full">
            <img
              src="https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2019/02/10124816/patent-pending-1.jpg"
              alt="Workspace"
              className="h-[100%] w-[100%] object-cover rounded-lg"
            />
          </div> */}

          
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
      </div>

      
      <div className="text-ls font-bold mb-4 text-primary-100 text-center mt-12">
        <h1 className="text-3xl font-bold text-black-600 max-w-xl">

        </h1>
      </div>
      
      <div className="h-[200px] md:h-[300px] relative px-4 md:px-0">
        <img src="https://cdna.artstation.com/p/assets/images/images/050/336/018/large/chandra-sheker-detectiveoffice-layout-0002.jpg?1654617494" alt="" 
        className="h-full w-full object-cover"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4">
          <div className="justify-center flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <h1 className="text-2xl md:text-4xl text-teal-400 font-bold text-center">Our</h1>
            <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Mission</h1>
          </div>
           <p className="text-xs md:text-sm text-white max-w-xs md:max-w-xl text-center mt-4 mb-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, mattis blandit odio felis aliquet montes turpis consequat, est sociosqu
                vitae id nec rutrum. Ornare dictumst et eget fames cursus vel penatibus quis posuere, ultrices fermentum libero pretium
                convallis pharetra
              </p>
              <div className="flex gap-9 justify-center mt-4 mx-auto">
            <hr className="border-t-8 border-primary-50  w-20 rounded-md" />
            <hr className="border-t-8 border-white  w-20 rounded-md" />
          </div>
        </div>
        
      </div>
    </div>
  );
}