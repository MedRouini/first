import { Link } from 'react-router-dom';

const PurpleButton = ({ children, href, className }) => {
  return (
    <Link
      className={`bg-[#BD918D] text-center hover:bg-[#7F4C47] text-white font-bold py-2 px-4 rounded ${className}`}
      to={href}>
      {children}
    </Link>
  );
};

export default PurpleButton;
