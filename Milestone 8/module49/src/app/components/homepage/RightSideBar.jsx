'use client'
import { authClient } from "@/lib/auth-client";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSideBar = () => {
  const handleGoogleSignIN = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  // console.log("Data : ",data)
  }
  const handleGithubSignIN = async() => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
  }
  return (
    <div>
      <h2 className='font-bold text-lg mb-4'>Login With</h2>
      <div className='flex flex-col gap-2'>
        <button className='btn hover:border-blue-500' onClick={handleGoogleSignIN}>Login With Google <FaGoogle /></button>
        <button className='btn hover:border-blue-500' onClick={handleGithubSignIN}>Login With Github <FaGithub /></button>
      </div>
    </div>
  );
};

export default RightSideBar;