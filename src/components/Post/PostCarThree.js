import React from "react";
import Link from "next/link";

export default function PostCarThree({ data }) {
  return (
    <div className="post-card-three">
      <Link
        href={process.env.PUBLIC_URL + "/blog/post/[slug]"}
        as={process.env.PUBLIC_URL + "/blog/post/" + data.slug}
      >
        <span className="post-card-three__image">
          <img
            src={process.env.PUBLIC_URL + data.thumbImage}
            alt={data.title}
          />
        </span>
      </Link>
      <div className="post-card-three__content">
        <Link
          href={process.env.PUBLIC_URL + "/blog/post/[slug]"}
          as={process.env.PUBLIC_URL + "/blog/post/" + data.slug}
        >
          <span>{data.title}</span>
        </Link>
        <p>{data.publicDate}</p>
      </div>
    </div>
  );
}
