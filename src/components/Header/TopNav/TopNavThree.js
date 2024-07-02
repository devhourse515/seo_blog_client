'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavThree = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [isOpenCurrence, setIsOpenCurrence] = useState(false)
  const [language, setLanguage] = useState('english')
  const [currence, setCurrence] = useState('new york office')

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.select-block')) {
        setIsOpenLanguage(false)
        setIsOpenCurrence(false)
      }
    })

    return () => {
      document.removeEventListener('click', (e) => {
        if (!e.target.closest('.select-block')) {
          setIsOpenLanguage(false)
          setIsOpenCurrence(false)
        }
      });
    };
  }, [isOpenLanguage, isOpenCurrence])

  return (
    <>
      <div className="top-nav style-three bg-yellow">
        <div className="container">
          <div className="flex items-center justify-between w-full h-[44px]">
            <div className="left flex items-center h-full">
              <div
                className="select-block h-full pl-5 pr-10 -ml-4 choose-type choose-language flex items-center gap-1.5 hover:bg-white duration-300"
                onClick={() => {
                  setIsOpenLanguage(!isOpenLanguage)
                  setIsOpenCurrence(false)
                }}
              >
                <p className="selected caption2 capitalize">{language}</p>
                <ul className={`list-option bg-white ${isOpenLanguage ? 'open' : ''}`}>
                  {
                    ['english', 'espana', 'france'].map((item, index) => (
                      <li key={index} className="caption2 capitalize whitespace-nowrap text-black" onClick={() => setLanguage(item)}>{item}</li>
                    ))
                  }
                </ul>
                <Icon.CaretDown size={12} />
              </div>
              <div
                className="select-block h-full pl-5 pr-10 choose-type choose-currency flex items-center gap-1.5 hover:bg-white duration-300 max-sm:hidden"
                onClick={() => {
                  setIsOpenCurrence(!isOpenCurrence)
                  setIsOpenLanguage(false)
                }}
              >
                <p className="selected caption2 capitalize">{currence}</p>
                <ul className={`list-option bg-white ${isOpenCurrence ? 'open' : ''}`}>
                  {
                    ['new york office', 'barcelona office', 'marseille office'].map((item, index) => (
                      <li key={index} className="caption2 capitalize whitespace-nowrap text-black" onClick={() => setCurrence(item)}>{item}</li>
                    ))
                  }
                </ul>
                <Icon.CaretDown size={12} />
              </div>
            </div>
            <div className="right-block flex items-center">
              <div className="location flex items-center max-lg:hidden">
                <Icon.MapPin className="text-xl" />
                <span className="ml-2 caption1 ">160 Broadway 15th floor, New York</span>
              </div>
              <div className="mail lg:ml-7 flex items-center">
                <Icon.Envelope className="text-xl" />
                <span className="ml-2 caption1 ">hi.avitex@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default TopNavThree