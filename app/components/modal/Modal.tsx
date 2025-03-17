"use client"
import {Children, useEffect, useState} from "react";
import style from "./modal.module.css"

export const Modal = (
    {
        isOpen, 
        onClose, 
        children,
        title,
        widht,
        full
    }:{
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode,
        title: string
        widht: string
        full: boolean
    }
) => {
    useEffect(()=> {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        }
        window.addEventListener("keydown", handleKeyDown)

    }, [onClose])

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else document.body.style.overflow = 'scroll';
        return () => {};
    }, [isOpen]);
    
    if (!isOpen) return null;

    return( 
        
        <>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center *:transition-opacity duration-300">
                <div className={`bg-white flex flex-col justify-between p-4 rounded-md shadow-lg ${full?"md:w-[60%] md:h-full h-full":"md:w-auto w-" + widht + " h-auto"}  mx-auto transition-transform duration-300 `}>
                    <div className="flex justify-between mb-4 border-b-2 border-[#445869]">
                        <span className="text-xl text-gray-700 flex justify-center font-medium items-center">{title}</span>
                        <div className="flex justify-end">
                            <button className="text-gray-700 text-bold items-center rounded-lg p-3 cursor-pointer" 
                                    onClick={onClose}>
                                
                                <span className="text-2xl">×</span>
                            </button>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
}