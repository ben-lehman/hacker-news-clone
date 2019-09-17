import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import PostMetaInfo from './PostMetaInfo';

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p>No Posts</p>;
  }

  return (
    <ul className="post-list">
      {posts.map(post => {
        return (
          <li key={post.id} className="post">
            <Title url={post.url} title={post.title} />
            <PostMetaInfo
              id={post.id}
              by={post.by}
              time={post.time}
              descendants={post.descendants}
            />
          </li>
        );
      })}
    </ul>
  );
}
