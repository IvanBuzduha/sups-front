import React from 'react';

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
        className='w-full mt-2 p-3 border-0 border-b-2  focus:outline-none focus:ring-0 focus:border-black hover:outline-none hover:ring-0 hover:border-black border-gray-200'
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option 
            className='hover:bg-green-400'
            disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option className='checked:hover:bg-green-400 ' key={option.value} value={option.value} >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;
