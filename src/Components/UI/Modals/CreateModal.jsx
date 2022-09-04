import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import DeleteBtn from '../Button/DeleteBtn';

const CreateModal = ({children, open, onClose,}) => {
    
    function escHandler({ key }) {
        if (key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', escHandler);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('keydown', escHandler);
            }
        };
    }, []); 


    if (typeof document !== 'undefined') {
        return createPortal((
            <div className={`fixed inset-0 ${open ? '' : 'pointer-events-none'}`}>
                {/* backdrop */}
                <div 
                    className={`fixed  inset-0 bg-black ${open ? 'opacity-50' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`} 
                    onClick={onClose} 
                />

                {/* content */}
                <div className={`relative mx-auto max-w-md px-8 py-12 mt-5 bg-white border-0 shadow-lg sm:rounded-3xl 
                
                ${open ? 'opacity-100' : 'pointer-events-none opacity-0'} transition-opacity duration-300 ease-in-out`}>
                    <div className='flex justify-end'>
                        <DeleteBtn   onClick={onClose}>X</DeleteBtn >
                    </div>
                    { children }
                </div>
            </div>
        ), document.body)
    } else {
        return null
    }
}

    

export default CreateModal;