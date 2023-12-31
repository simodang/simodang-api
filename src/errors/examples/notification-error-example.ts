export const NotificationErrorExample = {
  notFound: {
    message: 'notification not found',
    error: 'Not Found',
    statusCode: 404,
  },
  notOwned: {
    message: 'this notification not yours',
    error: 'Forbidden',
    statusCode: 403,
  },
  success: {
    message: 'all notifications from this user was deleted successfully',
  },
};
