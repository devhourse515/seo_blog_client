import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const BannerThree = () => {
    return (
        <section className={`banner-block bg-yellow py-7`}>
            <Marquee>
                <h4 className={`heading4 uppercase px-[60px]`}>Discover the Power of IoT for Your Business</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 uppercase px-[60px]`}>Ignite Your Business with IoT Solutions</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 uppercase px-[60px]`}>Discover the Power of IoT for Your Business</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 uppercase px-[60px]`}>Ignite Your Business with IoT Solutions</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 uppercase px-[60px]`}>Discover the Power of IoT for Your Business</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 uppercase px-[60px]`}>Ignite Your Business with IoT Solutions</h4>
                <Image src={'/images/fav.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
            </Marquee>
        </section>
    )
}

export default BannerThree