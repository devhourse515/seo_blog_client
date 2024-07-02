import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import CheckoutLayout from '@/components/Checkout/CheckoutLayout';

export default function Checkout() {

    return (
        <LayoutOne>
            <Breadcrumb nav2={'Checkout'} />
            <CheckoutLayout />
        </LayoutOne>
    );
}