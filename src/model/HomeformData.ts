export interface FormData {
  name: string;
  email: string;
  phone: string;
  adhaar: string;
}

export interface otpData {
  email: string;
  phone: string;
  otp: string;
}

export type ModalState = "home" | "otp" | "qr" | "none";
