import React from 'react'

const variantClasses = {
  primary: ' hover:',
  secondary: '-500 hover:bg-gray-600',
};

const Input = ({
      label,
      name,
      placeholder,
      type = 'text',
      value = '',
      onChange,
      className,
      variant = "default",
}) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
         {label && (
            <label htmlFor={name} className="font-medium text-gray-700">
            </label> 
         )
         }

         <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`px-4 py-2 rounded-md border-2 ${variantClasses[variant]} ${className}`} 
           />
        </div>
  );
};

export default Input