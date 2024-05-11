export const base_url = process.env.API_URL;

export const QueryConst = {
  submitForm: `${base_url}submitform`,
  submitOtp: `${base_url}submitotp`,
  getQr: `${base_url}getqr`,
  getAllTickets: `${base_url}gettickets`,
  getStats: `${base_url}getstats`,
  updateTicketStatus: `${base_url}updateticketstatus`,
  logIn: `${base_url}logIn`,
  signIn: `${base_url}signIn`,
};
