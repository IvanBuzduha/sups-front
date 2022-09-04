import React from 'react';
const DeleteBtn = ({children, ...props}) => {
    return (
        <button 
        {...props} 
        className=' right-8 px-6 mb-1 mt-1  text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-red-600 hover:shadow-lg focus:outline-none'>
            {children}
        </button>
    );
}

export default DeleteBtn;