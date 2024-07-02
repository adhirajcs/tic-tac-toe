import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full text-center py-1 bg-inherit text-white">
      <span className="flex justify-center items-center">
        Made with <FaHeart className="mx-2 text-red-600" /> by Adhiraj Saha
      </span>
    </div>
  );
};

export default Footer;
