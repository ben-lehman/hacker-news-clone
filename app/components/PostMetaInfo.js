import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { timeConverter } from '../utils/helper.js';

export default function PostMetaInfo({ id, by, time, descendants }) {
  let post_time = timeConverter(time);

  return (
    <p className="post-meta-info">
      <span>
        by: <Link to={`/user?id=${by}`}>{by}</Link>
      </span>
      <span> on {post_time}</span>
      {typeof descendants === 'number' && (
        <span>
          {' '}
          with <Link to={`/post?id=${id}`}>{descendants} comments</Link>
        </span>
      )}
    </p>
  );
}

PostMetaInfo.propTypes = {
  id: PropTypes.number.isRequired,
  by: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  descendants: PropTypes.number
};
