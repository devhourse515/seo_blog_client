import React from 'react'
import Link from "next/link";
import LayoutOne from "@/components/Layout/LayoutOne";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Breadcrumb } from '@/components/Other/Breadcrumb';

export default function Register() {
    return (
        <LayoutOne>
            <Breadcrumb nav2={'Register'} />
            <div className="form-login lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container flex items-center justify-center">
                    <div className="form-inner w-[470px] max-[510px]:w-full">
                        <h3 className="heading3 text-center flex items-center justify-center whitespace-nowrap">Create a free account</h3>
                        <form className="form mt-6">
                            <div className="form-group">
                                <label htmlFor="username">Username or email address*</label>
                                <input id="username" type="text" name='username' className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Username or email address*" />
                            </div>
                            <div className="form-group mt-6">
                                <label htmlFor="password">Password*</label>
                                <input id="password" type="password" name='password' className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Password*" />
                            </div>
                            <div className="form-group mt-6">
                                <label htmlFor="confirmPassword">Confirm Password*</label>
                                <input id="confirmPassword" type="password" name='password' className="form-control w-full mt-3 border border-outline px-4 h-[50px] rounded" placeholder="Confirm Password*" />
                            </div>
                            <div className="sub-input-checkbox flex items-center gap-2 mt-6">
                                <input id="checkbox" type="checkbox" name='checkbox' />
                                <label htmlFor="checkbox" className="text-surface1">I agree to the <Link href={'#!'} className='text-button text-black hover:underline' scroll={false}>Terms of User</Link></label>
                            </div>
                            <div className="block-button mt-6">
                                <Link className="button-main bg-blue w-full text-center" href="/pages/login">Register</Link>
                            </div>
                            <div className="navigate flex items-center justify-center mt-6">
                                <span className="text-surface1">Already have an account?</span>
                                <Link className="text-button pl-2 hover:underline" href="/pages/login">Login Here</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutOne>
    );
}