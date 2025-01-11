"use client"
import {Children, useEffect, useState} from "react";
import style from "./modal.module.css"

export const Modal = (
    {
        isOpen, 
        onClose, 
        children,
        title
    }:{
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode,
        title: string
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
    
    if (!isOpen) return null;

    return( 
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center *:transition-opacity duration-300">
            {/* {style.modalBackdrop} */}
                <div className="bg-white p-5 rounded-md shadow-lg max-w-sm md:ax-w-md mx-auto transition-transform duration-300 transform-gpu">
                    <div className="flex justify-between mb-4">
                        <span className="text-xl text-gray-700 flex justify-center font-medium items-center">{title}</span>
                        <div className="flex justify-end">
                            <button className="text-gray-700 text-bold items-center rounded-lg p-3rounded cursor-pointer" 
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