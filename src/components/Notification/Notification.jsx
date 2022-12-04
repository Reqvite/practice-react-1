import PropTypes from 'prop-types';

import { Notifications } from './Notification.style';

export const Notification = ({ message }) => {
  return <Notifications>{message}</Notifications>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
