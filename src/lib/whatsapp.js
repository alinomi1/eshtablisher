export const getWhatsAppLink = (message = "Hello, I want to book a consultation.") => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "971585934816";
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};