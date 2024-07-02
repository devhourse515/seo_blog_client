import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import DetailInfo from '@/components/ProductDetail/DetailInfo';
import prdData from "@/data/products.json"
import DetailReview from '@/components/ProductDetail/DetailReview';
import RelatedProduct from '@/components/ProductDetail/RelatedProduct';

export default function ProductsDetail() {
    const data = prdData[0]
    return (
        <LayoutOne>
            <Breadcrumb nav2={'Shop'} nav2Link={'/pages/our-shop'} nav3={'System Design Interview Volume 2'} />
            <DetailInfo data={data} />
            <DetailReview data={data} />
            <RelatedProduct />
        </LayoutOne>
    );
}