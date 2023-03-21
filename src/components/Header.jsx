import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './img/logo.png'
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import Avatar from "../components/img/avatar.png";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

const Header = () => {

  const firebaseAuth  = getAuth(app)
  const provider = new GoogleAuthProvider()

  const login =async()=>{
    const response = await signInWithPopup(firebaseAuth,provider)
    console.log(response)
  }
  return (
    <header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            /*   initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
               */
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <div
            className="relative flex items-center justify-center"

          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                0
              </p>
            </div>
          </div>
          <div className="relative">
          <motion.img
              whileTap={{ scale: 0.6 }}
              src={/* user ? user.photoURL :  */Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
          </div>
          
        </div>

      </div>
      <div className="flex items-center justify-between md:hidden w-full h-full ">xccx</div>
    </header>
  )
}

export default Header