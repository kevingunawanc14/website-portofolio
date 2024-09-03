import * as React from "react"
import WifiSpeed from "./wifiSpeed"
import Money from "./money"
import Skill from "./skill"
import AlgoVisualization from "./algoVisualization"
import GymMovement from "./gymMovement"
import MathPuzzle from "./mathPuzzle"
import TechStack from "./techStack"
import LinkTree from "./linkTreeProject"
import Navbar from "./navbar"



export default function Home() {
  return (
    <>
      <WifiSpeed />
      <Money />
      <Skill />
      {/* <GymMovement /> */}
      <Navbar />

    </>
  )
}
