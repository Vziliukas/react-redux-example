import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ id }) => (
  <div>
    <p>
      {id}
    </p>
  </div>
);

Message.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Message;
