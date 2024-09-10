import * as React from "react"
import WifiSpeed from "./wifiSpeed"
import Money from "./money"
import Skill from "./skill"
import GymMovement from "./gymMovement"
import LinkTree from "./linkTreeProject"
import Navbar from "./navbar"
import ProteinPicker from "./proteinPicker"
import Intro from "./intro"
import { motion, useScroll, useSpring } from "framer-motion";



export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar z-50"
        style={{ scaleX }} />

      <Intro />
      <Skill />
      <LinkTree />
      <GymMovement />
      <Navbar />

    </>
  )
}
