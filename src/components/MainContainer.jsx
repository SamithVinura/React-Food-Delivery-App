import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from '../context/StateProvider';
import RowContainer from "./RowContainer";
import CartContainer from './CartContainer';
import MenuContainer from './MenuContainer';
import Delivery from '../img/delivery.png'
import HomeContainer from './HomeContainer';

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => { }, [scrollValue, cartShow]);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center ">
      <HomeContainer />

      {/* <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
            Our fresh & healthy fruits
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <MdChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <MdChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "fruits")}
        />
      </section>

      <MenuContainer />

      {cartShow && <CartContainer />} */}
    </div> 
  



    /* <div className="grid grid-cols-1 md:grid-cols -2 gap-2">
      <div className="py-2 flex-1 flex flex-col items-start md:items-center justify-center" >
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className="w-8 h-8 bg-whitel rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery" />
          </div>
        </div>

        <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem]'> Your city</span></p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>
      </div>

      <div className="py-2 bg-blue-400 flex-1"> </div>
    </div> */
  )
}

export default MainContainer