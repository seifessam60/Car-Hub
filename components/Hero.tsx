"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

function Hero() {
  const handleScroll = () => {};
  return (
    <div className='hero'>
      <div className='padding-x flex-1 pt-36'>
        <h1 className='hero__title'>
          Find, Book, Rent a Car - Quick and Super Easy
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src={"/hero.png"} fill alt='hero' className='object-contain' />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  );
}

export default Hero;
