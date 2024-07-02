import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import CartLayout from '@/components/Cart/CartLayout';

export default function Cart() {

    return (
        <LayoutOne>
            <Breadcrumb nav2={'Shopping Cart'} />
            <CartLayout />
        </LayoutOne>
    );
}