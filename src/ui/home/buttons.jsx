
const PurpleButton = ({ children, href, className }) => {
  return (
    <a
      className={`bg-[#BD918D] text-center hover:bg-[#7F4C47] text-white font-bold py-2 px-4 rounded ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default PurpleButton;
