import { motion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, handleScroll }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "tween" }}
      className="fixed top-0 right-0 h-screen w-[250px] bg-[#0D0C22]/95 backdrop-blur-lg z-50 p-6"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="flex flex-col space-y-4 mt-16">
        {["Home", "Products", "Services", "Contact"].map((item) => (
          <motion.a
            key={item}
            whileTap={{ scale: 0.95 }}
            href={`#${item.toLowerCase()}`}
            className="text-gray-300 hover:text-white px-3 py-2 text-lg font-medium"
            onClick={(e) => {
              handleScroll(e, item.toLowerCase());
              onClose();
            }}
          >
            {item}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenu;
