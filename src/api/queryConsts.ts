export const base_url = process.env.API_URL;

export const QueryConst = {
  submitForm: `${base_url}/submitForm`,
  submitOtp: `${base_url}/submitOtp`,
  getQr: `${base_url}/getQr`,
  getAllTickets: `${base_url}/getTickets`,
  getStats: `${base_url}/getStats`,
};
