import { NotificationManager } from 'react-notifications';

const Notification = (type, message, callback) => {
  if (typeof type === 'string' && typeof message === 'string' && message) {
    NotificationManager[type](message, '', 4000, callback);
  }
};
export default Notification;
