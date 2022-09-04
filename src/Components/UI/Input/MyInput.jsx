

import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input 
        ref={ref}
        {...props} 
        className='pt-3 pl-4 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200 hover:outline-none hover:ring-0 hover:border-black border-gray-200' />
    );
});

export default MyInput;