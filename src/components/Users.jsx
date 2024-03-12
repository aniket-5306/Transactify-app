import React from "react";
import { useNavigate } from "react-router-dom";

export default function Users(){
    
    const navigate = useNavigate();

    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-[2.7rem] h-[2.7rem] flex items-center justify-center rounded-full bg-[#1a202c] text-white select-none">
                    U1
                </div>
                <h2 className=" font-bold text-lg">User 1</h2>
            </div>
            <button 
            className="send-btn bg-[#e84949] text-white py-2 px-5 rounded-sm select-none"
            onClick={(e) => {
                e.preventDefault();
                navigate("/sendMoney");
            }}
            >
                Send Money
            </button>
        </div>
    );    

}