export type FormData = {
  formId: string;
  name: string;
  email: string;
  phone: string;
  adhaar: string;
  qr: string;
};

export interface otpData {
  email: string;
  phone: string;
  otp: string;
}

export type ModalState = "home" | "otp" | "qr" | "none";
