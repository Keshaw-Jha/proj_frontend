export const base_url = process.env.API_URL;

export const QueryConst = {
  submitForm: `${base_url}submitform`,
  submitOtp: `${base_url}submitotp`,
  getQr: `${base_url}getqr`,
  getAllTickets: `${base_url}gettickets`,
  getStats: `${base_url}getstats`,
  updateTicketStatus: `${base_url}updateticketstatus`,
  getSettings: `${base_url}getsettings`,
  logIn: `${base_url}login`,
  signIn: `${base_url}signin`,
  isEntryAllowed: `${base_url}isentryallowed`,
};
