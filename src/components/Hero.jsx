import React, { Suspense, useMemo } from 'react'; 
import { motion } from 'framer-motion'; 
import { fadeInUp, staggerContainer, fadeIn } from '../constants';
import HeroStats from "./HeroStats"; 

// --- 3D LOGIC (INTEGRATED FROM YOUR BUILDINGMODEL.JSX) ---
const useResponsive = () => {
  const width = window.innerWidth;
  return { 
    isMobile: width < 640, 
    isTablet: width >= 640 && width < 1024,
  };
};

const HouseModel = ({ src, scale, position }) => {
  // src prop moolama dynamic-ah model load aagum
  const { scene } = useGLTF(src);
  return <primitive object={scene} scale={scale} position={position} shadowShadows />;
};

const Hero3DScene = ({ src }) => {
  const { isMobile, isTablet } = useResponsive();
  
  const config = useMemo(() => {
    if (isMobile) return { scale: 3.6, position: [0.2, -1.8, 0], camera: [0, 1.2, 5.5], fov: 72 };
    if (isTablet) return { scale: 3.5, position: [0, -1.4, 0], camera: [0, 1.5, 6], fov: 55 };
    return { scale: 3.2, position: [0.5, -1.5, 0], camera: [0, 1.5, 6], fov: 40 };
  }, [isMobile, isTablet]);

  return (
    <div className="absolute inset-0 z-0 bg-[#f3f4f4]">
      <Canvas shadows camera={{ position: config.camera, fov: config.fov }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <Environment preset="city" />
          <HouseModel src={src} scale={config.scale} position={config.position} />
          <EffectComposer>
            <DepthOfField focusDistance={0.02} focalLength={0.03} bokehScale={1.5} />
          </EffectComposer>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

// --- MAIN REUSABLE HERO COMPONENT ---
const Hero = ({ title, type = 'video', src, showStats = true }) => {
  return (
    <section className="relative h-screen min-h-[770px] bg-transparent flex flex-col bg-[#f3f4f4] pb-4 md:pb-6 px-4 md:px-6 font-['Poppins']">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-col">
        
        {/* Frame Layout (Matches Home Page Look) */}
        <motion.div 
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="relative flex-1 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white flex flex-col shadow-sm"
        >
          <div className="absolute inset-0 z-0">
            {/* 1. Video Support */}
            {type === 'video' && (
              <motion.video
                src={src} autoPlay muted loop playsInline
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            )}

            {/* 2. Image Support */}
            {type === 'image' && (
              <motion.img
                src={src}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            )}

            {/* 3. 3D Model Support (Integrated Scene) */}
            {type === 'model' && <Hero3DScene src={src} />}

            {/* Overlay for readability (Only for video/image) */}
            {type !== 'model' && <div className="absolute inset-0 bg-black/30 z-10" />}
          </div>

          {/* Text Content */}
          <div className="relative z-20 p-8 md:p-12 lg:p-16 flex-1 flex flex-col justify-center pointer-events-none">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <motion.h1 
                variants={fadeInUp} 
                className={`text-4xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] font-display ${type === 'model' ? 'text-slate-900' : 'text-white'}`}
              >
                {title}
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        {showStats && (
          <div className="mt-6 md:mt-8 flex justify-center w-full">
            <div className="w-full max-w-[1200px]">
              <HeroStats /> 
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(Hero);