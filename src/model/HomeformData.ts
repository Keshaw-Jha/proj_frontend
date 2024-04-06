export type HomeFormData = {
  ticketId: string;
  name: string;
  email: string;
  phone: string;
  adhaar: string;
  qr: string;
};

export interface otpData {
  ticketId: string;
  otp: string;
}

export type ModalState = "home" | "otp" | "qr" | "none";

export const getInitialFormValues = () => ({
  name: "",
  phone: "",
  email: "",
  adhaar: "",
  ticketId: "",
  qr: "",
});
