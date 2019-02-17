// const BaseURL = () => {
//   const { API_PROTOCOL, API_HOST, API_PORT } = process.env;
//   let baseURL = '/api';
//   if (API_PROTOCOL && API_HOST) {
//     baseURL = `${API_PROTOCOL}${API_HOST}${API_PORT ? `:${API_PORT}` : ''}${baseURL}`;
//   }
//   return baseURL;
// };

const BaseURL = () => {
  const { API_PROTOCOL, API_HOST, API_PORT } = process.env;
  const domain = 'http://0.0.0.0:8081';
  let baseURL = '/api';
  if (API_PROTOCOL && API_HOST) {
    baseURL = `${API_PROTOCOL}${API_HOST}${API_PORT ? `:${API_PORT}` : ''}${baseURL}`;
  }
  return `${domain}${baseURL}`;
};

export default BaseURL;
