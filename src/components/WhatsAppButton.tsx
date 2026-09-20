export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919623427777"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all duration-200 hover:scale-110 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}
