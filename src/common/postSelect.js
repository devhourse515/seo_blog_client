import { convertToSlug } from "./utils";

//get post
export const getPosts = (posts, category, limit) => {
  const finalPosts = category
    ? posts.filter(
      (post) => convertToSlug(post.category.toLowerCase()) === category.toLowerCase()
    )
    : posts;

  return (
    finalPosts &&
    finalPosts.slice(0, limit ? limit : finalPosts.length)
  );
};

//get category quantity
export const getCategoryQuantity = (posts, category) => {
  return category
    ? posts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    ).length
    : 0;
};

//get post by slug
export const getPostBySlug = (posts, slug) => {
  return slug
    ? posts.find((post) => post.slug.toLowerCase() === slug.toLowerCase())
    : null;
};

//get post by title
export const getPostByTitle = (posts, title) => {
  return title
    ? posts.filter((post) => convertToSlug(post.title.toLowerCase()) === title.toLowerCase())
    : null;
};

//get post by tag
export const getPostByTag = (posts, tag) => {
  return tag
    ? posts.filter((post) => convertToSlug(post.tag.toLowerCase()) === tag)
    : null;
};

//get post by keyword
export const getPostByKeyword = (posts, keyword) => {
  return keyword
    ? posts.filter((post) => post.title.toLowerCase().includes(keyword) || post.category.toLowerCase().includes(keyword) || post.tag.toLowerCase().includes(keyword))
    : posts;
};
