import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const BannerFour = () => {
    return (
        <section className={`banner-block bg-pink py-7`}>
            <Marquee>
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Elevate Your Digital Presence Today</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Experience Digital Excellence</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Elevate Your Digital Presence Today</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Experience Digital Excellence</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Elevate Your Digital Presence Today</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Experience Digital Excellence</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='fav-white' className='w-[26px]' />
            </Marquee>
        </section>
    )
}

export default BannerFour