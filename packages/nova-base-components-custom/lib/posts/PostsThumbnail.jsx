import React from 'react';
import Posts from "meteor/nova:posts";

const PostsMediaThumbnail = ({ post }) => {
  return (
    <a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <div className="posts-thumbnail-holder">
        <img src={Posts.getThumbnailUrl(post)} />
        <div className="posts-thumbnail-overlay">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </div>
    </a>
  );
};

const PostsThumbnail = ({post}) => {
  const isRichCard = post.media && post.media.html || post.media && post.media.html;
  if (isRichCard) return PostsMediaThumbnail(post);

  return (
    <a className="posts-thumbnail" href={Posts.getLink(post)} target={Posts.getLinkTarget(post)}>
      <span><img src={Posts.getThumbnailUrl(post)} /></span>
    </a>
  )
}

PostsThumbnail.displayName = "PostsThumbnail";

module.exports = PostsThumbnail;
export default PostsThumbnail;
