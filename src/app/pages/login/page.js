'use client'

import React, { useState } from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();  
    const { data: session, status } = useSession();
    
    console.log('session', session)

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevent form from submitting
                                
        if (session?.status !== 'authenticated') {
            const res = await signIn('credentials', {
                email: email,
                password: password,
                redirect: false
            });

            if (res.ok) {
                router.push(process.env.NEXT_PUBLIC_APP_URL);
            } else {
                console.error(res.error);
            // Handle login failure (e.g., show an error message)
            }
        } else {
            await signOut()
        }
    };

    return (
        <LayoutOne>
            <Breadcrumb nav2={'Login'} />
            <div className="form-login  lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container flex items-center justify-center">
                    <div className="form-inner w-[470px] max-[510px]:w-full">
                        <div className="heading">
                            <h3 className="heading3 text-center">Login</h3>
                            {session?.status === 'authenticated' ? (
                                <div className="exp-account bg-surface px-4 py-3 rounded-lg mt-8">
                                    <div className="exp-username text-surface1">
                                    <span className="font-bold text-green">You have successfully logged in.</span>
                                    </div>
                                </div>
                                ) : null}
                        </div>
                        <form className="form mt-6" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Username or email address*</label>
                                <input id="email" type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Username or email address*" />
                            </div>
                            <div className="form-group mt-6">
                                <label htmlFor="password">Password*</label>
                                <input id="password" type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Password*" />
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <div className="sub-input-checkbox flex items-center gap-2">
                                    <input id="checkbox" type="checkbox" name='checkbox' />
                                    <label htmlFor="checkbox" className="text-surface1">Remember me</label>
                                </div>
                                <Link className="text-blue hover:underline" href="#!" scroll={false}>Forgot password?</Link>
                            </div>
                            <div className="option-title relative text-center py-6">
                                <span className="px-5 bg-white">or sign up with</span>
                                <div className="line absolute top-1/2 -translate-y-1/2 left-0 w-full h-px bg-outline z-[-1]"></div>
                            </div>
                            <div className="list-login">
                                <Link className="bg-surface h-12 flex items-center justify-center gap-3 rounded border border-outline duration-300 hover:bg-black hover:text-white" href="#!" scroll={false}>
                                    <i className="icon-facebook text-blue text-2xl"></i>
                                    <strong className="text-button">Continue with Facebook</strong>
                                </Link>
                                <Link className="bg-surface h-12 flex items-center justify-center gap-3 rounded mt-3 border border-outline duration-300 hover:bg-black hover:text-white" href="#!" scroll={false}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <g clip-path="url(#clip0_7676_2285)">
                                            <path d="M24.2643 12.2763C24.2643 11.4605 24.1982 10.6404 24.0571 9.83789H12.7383V14.4589H19.22C18.951 15.9492 18.0868 17.2676 16.8213 18.1054V21.1037H20.6883C22.9591 19.0137 24.2643 15.9272 24.2643 12.2763Z" fill="#2D4FE1"></path>
                                            <path d="M12.7391 24.0013C15.9756 24.0013 18.705 22.9387 20.6936 21.1044L16.8266 18.106C15.7507 18.838 14.3618 19.2525 12.7435 19.2525C9.61291 19.2525 6.95849 17.1404 6.00607 14.3008H2.01562V17.3917C4.05274 21.4439 8.20192 24.0013 12.7391 24.0013Z" fill="#34A853"></path>
                                            <path d="M6.00082 14.3007C5.49816 12.8103 5.49816 11.1965 6.00082 9.70618V6.61523H2.01478C0.312781 10.006 0.312781 14.0009 2.01478 17.3916L6.00082 14.3007Z" fill="#FBBC04"></path>
                                            <path d="M12.7391 4.74966C14.4499 4.7232 16.1034 5.36697 17.3425 6.54867L20.7685 3.12262C18.5991 1.0855 15.7198 -0.034466 12.7391 0.000808666C8.20192 0.000808666 4.05274 2.55822 2.01562 6.61481L6.00166 9.70575C6.94967 6.86173 9.6085 4.74966 12.7391 4.74966Z" fill="#EA4335"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7676_2285">
                                                <rect width="24" height="24" fill="white" transform="translate(0.5)"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <strong className="text-button">Continue with Google</strong>
                                </Link>
                                <Link className="bg-surface h-12 flex items-center justify-center gap-3 rounded mt-3 border border-outline duration-300 hover:bg-black hover:text-white" href="#!" scroll={false}>
                                    <i className="icon-twitter text-[#33CCFF] text-2xl"></i>
                                    <strong className="text-button">Continue with Twitter</strong>
                                </Link>
                            </div>
                            <div className="block-button mt-6">
                                <button type="submit" className="button-main bg-blue w-full text-center">{session?.status === 'authenticated' ? 'Logout' : 'Login'}</button>
                            </div>
                            {session?.status !== 'authenticated' ? (
                                <div className="navigate flex items-center justify-center mt-6">
                                    <span className="text-surface1">Not registered yet?</span>
                                    <Link className="text-button pl-2 hover:underline" href="/pages/register">Sign Up</Link>
                                </div>
                            ) : null}
                        </form>
                    </div>
                </div>
            </div>
        </LayoutOne>
    );
}
