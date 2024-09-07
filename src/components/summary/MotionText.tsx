import { motion } from "framer-motion";

import React from "react";
interface PropsText {
  text: string;
}
const MotionText: React.FC<PropsText> = () => {
  // let arr: string[] = text.split(" ");
  return <motion.div>Text</motion.div>;
};

export default MotionText;
