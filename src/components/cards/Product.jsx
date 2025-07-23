import React from 'react';

export default function Product({ 
    image, 
    name,
    description,
    className , 
    children,
     }) {

  return (
     <div className="bg-slate-100/80 flex flex-col  border border-neutral-400 shadow-md rounded-md  w-100 h-110 items-center">
      <img src={image} alt="" className="w-full h-60 object-cover rounded-md" />

      <div className="flex flex-col gap-3 px-7 py-3">
        <span className="items-center text-center justify-between">
          <h1 className="text-primary-50 font-bold text-[16px] text-center flex flex-col ">
            {name} 
             <hr className='border-t-3 border-primary-50 mx-auto w-15 rounded-md'/>
          </h1>
        </span>
        
        <span>
          <p className="text-xs text-center text-slate-500 text-[12px] text-green">{description}</p>
        </span>
        <h1 className='text-primary-50 font-bold text-[16px] text-center flex flex-col '>Learn More
</h1>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
}