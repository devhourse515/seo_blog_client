import Link from "next/link";

export default function PostCardFeatured({ data }) {
  return (
    <div className="post-card-featured">
      <div className="post-card-featured__image">
        <img src={data.thumbImage} alt={data.title} />
      </div>
      <div className="post-card-featured__content">
        <div className="post-card-featured__content__date">
          <h5>05</h5>
          <p>Feb</p>
        </div>
        <div className="post-card-featured__content__detail">
          <div className="post-card-featured__info">
            <p>
              {" "}
              by <span>{data.author}</span>{" "}
            </p>
            <Link href="#">
              <span>{data.category}</span>
            </Link>
          </div>
          <Link
            href={process.env.PUBLIC_URL + "/blog/post/[slug]"}
            as={process.env.PUBLIC_URL + "/blog/post/" + data.slug}
          >
            <span className="post-card-featured-title">{data.title}</span>
          </Link>
          <p className="post-card-featured-description">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
