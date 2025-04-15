import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Room } from "./Optimized-room"
import { useMediaQuery } from "react-responsive"

const HeroExperience = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45 }}>
      <ambientLight intensity={1} color="#1a1a40"/>
      <directionalLight position={[5,5,5]} intensity={2}/>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />
      <group
       scale={isMobile? 0.7: 1}
        position={[0, -3.5, 0]}
        rotation={[0, -Math.PI /4, 0]}
      >
        <Room/>
      </group>
    </Canvas>
  )
}

export default HeroExperience
