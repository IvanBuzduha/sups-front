import React from 'react';

const SubmitBtn = ({children, ...props}) => {
    return (
        <button 
        {...props} 
        className='w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-green-500 hover:bg-green-800 hover:shadow-lg focus:outline-none'>
            {children}
        </button>
    );
}

export default SubmitBtn;