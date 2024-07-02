import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import DetailInfo from '@/components/ProductDetail/DetailInfo';
import prdData from "@/data/products.json"
import DetailReview from '@/components/ProductDetail/DetailReview';
import RelatedProduct from '@/components/ProductDetail/RelatedProduct';
import { getProductBySlug } from '@/common/productSelect';

export default function ProductsDetail({ params: { slug } }) {
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPrd = getProductBySlug(prdData, cleanedSlug);

    return (
        <LayoutOne>
            <Breadcrumb nav2={'Shop'} nav2Link={'/pages/our-shop'} nav3={foundPrd.name} />
            <DetailInfo data={foundPrd} />
            <DetailReview data={foundPrd} />
            <RelatedProduct />
        </LayoutOne>
    );
}