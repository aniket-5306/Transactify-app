import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login({setIsLoggedIn}){
    const navigate = useNavigate();
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();

    async function submit(e){
        e.preventDefault();

        try{
            const response =  await axios.get("https://localhost:3000/signin",{
                username,
                password
            })
            //some changes by aniket
            setIsLoggedIn(true);
            localStorage.setItem("token",response.data.token)
            navigate("/dashboard")
        }
        catch(e){
            alert("invalid credentils");
            console.log(e);
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-[#1a202c] select-none">
            <div className=" w-full font-chill max-w-md rounded-xl p-6 gap-7 my-16 flex flex-col items-center bg-white">
                <h1 className="font-bold text-5xl">Sign In</h1>
                <p className="text-center text-xl p-4 text-nocap font-semibold">Enter your credentials to access your account</p>
                
                <div className="w-full max-w-sm flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Email</label>
                <input 
                type="text"
                className="w-full px-3 py-2 border-2 border-nocap rounded-lg h-12"
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
                placeholder="Abi@gmail.com"  />
                </div>
                <div className="w-full max-w-sm flex flex-col gap-3">
                <label htmlFor="" className="font-semibold text-lg">Password</label>
                <input 
                type="Password"
                className="w-full px-3 py-2 border-2 border-nocap rounded-lg h-12"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                placeholder=""  />
                </div>
                <div className="w-full p-2 flex flex-col gap-3">
                <button 
                type="submit" 
                className=" bg-black p-2 text-white font-semibold w-full rounded transition-all duration-500 ease-in-out hover:bg-white hover:text-black hover:border">Sign In</button>
                <h3 className=" text-center">Don't have a account? <Link to="/signup" className="underline">Sign Up</Link></h3>
                </div>
                
            </div>
        </div>
    );
}