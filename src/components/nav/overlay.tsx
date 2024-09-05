import { motion } from "framer-motion";

type OverlayProps = {
  closeNav: () => void;
};

export default function Overlay({ closeNav }: OverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={closeNav}
      className="sm:hidden absolute z-30 top-0 left-0 min-h-dvh size-full bg-black/25 backdrop-blur-[2px]"
    />
  );
}
