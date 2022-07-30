import PropTypes from 'prop-types';

const MessageType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  me: PropTypes.bool,
});

export default MessageType;
