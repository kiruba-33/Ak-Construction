// src/components/home/Hero.jsx
import React, { Suspense, useMemo } from 'react'; 
import { motion } from 'framer-motion'; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { fadeIn } from '../../constants';

// 3D Model Path - AK Construction asset
import houseModelPath from "../../assets/gallery/3d-model.glb?url";

// --- 3D LOGIC (FINAL STABLE VERSION FOR ALL VIEWS) ---
const useResponsive = () => {
  const width = window.innerWidth;
  return { 
    isMobile: width < 640, 
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024
  };
};

const HouseModel = ({ scale, position }) => {
  const { scene } = useGLTF(houseModelPath);
  return <primitive object={scene} scale={scale} position={position} />;
};

const HomeHero3DScene = () => {
  const { isMobile, isTablet } = useResponsive();
  const config = useMemo(() => {
    // Mobile framing (Fixed)
    if (isMobile) {
      return { 
        scale: 3.6,              
        position: [0.2, -1.8, 0], 
        camera: [0, 1.2, 5.5],    
        fov: 72                   
      };
    }
    // Tablet framing: Specifically optimized for shorter heights like 671px
    if (isTablet) {
      return { 
        scale: 3.5,              // Scale slightly reduced to fit shorter height
        position: [0, -1.4, 0],   // Centered for the new 450px height
        camera: [0, 1.5, 6], 
        fov: 55 
      };
    }
    // Desktop framing
    return { scale: 3.2, position: [0.5, -1.5, 0], camera: [0, 1.5, 6], fov: 40 };
  }, [isMobile, isTablet]);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas shadows camera={{ position: config.camera, fov: config.fov }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          <HouseModel scale={config.scale} position={config.position} />
          <EffectComposer>
            <DepthOfField focusDistance={0.02} focalLength={0.03} bokehScale={1.5} />
          </EffectComposer>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

// --- DESIGN LAYOUT ---
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col bg-[#f3f4f4] pb-6 px-4 md:px-6">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-col pt-4 md:pt-6">
        
        {/* Main Hero Container - Final Responsive Heights */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          animate="animate"
          /* - Mobile: h-[520px] sit above menus
             - Tablet (md): h-[450px] specifically to stay above menus at 671px screen height
             - Desktop (lg): lg:h-auto lg:flex-1 for full layout
          */
          className="relative h-[520px] md:h-[450px] lg:h-auto lg:flex-1 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-sm"
        >
          <HomeHero3DScene />
        </motion.div>

      </div>
    </section>
  );
};

useGLTF.preload(houseModelPath);
export default React.memo(Hero);