import React from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export const BreadcrumbItem = ({ name, current }) => {
  return <li className={current && "active"}>{name}</li>;
};

export const Breadcrumb = ({ nav2, nav2Link, nav3 }) => {
  return (
    <div className="breadcrumb-block bg-surface py-2.5">
      <div className="container flex items-center gap-3">
        <Link href={'/'} className="text-title text-surface2 capitalize hover:underline">Home</Link>
        <Icon.DotOutline weight="fill" className="text-2xl text-surface2" />
        {!nav3 ? (
          <strong className="text-button capitalize">{nav2}</strong>
        ) : (
          <>
            <Link href={nav2Link} className="text-title text-surface2 capitalize hover:underline">{nav2}</Link>
            <Icon.DotOutline weight="fill" className="text-2xl text-surface2" />
            <strong className="text-button capitalize">{nav3}</strong>
          </>
        )}
      </div>
    </div>
  );
};
