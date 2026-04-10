import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { useAuth } from '../context/AuthContext';

function FloatingShapes() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 1, -2]} scale={1.2}>
          <octahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#8B5CF6" 
            roughness={0.2} 
            transmission={0.9} 
            thickness={0.5} 
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -1, -1]} scale={0.8}>
          <torusKnotGeometry args={[1, 0.3, 100, 16]} />
          <meshPhysicalMaterial 
            color="#10B981" 
            roughness={0.1} 
            transmission={0.9} 
            thickness={0.5} 
          />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1} floatIntensity={2.5}>
        <mesh position={[0, -2, -3]} scale={1.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial 
            color="#EA580C" 
            roughness={0.2} 
            transmission={0.8} 
            thickness={0.5} 
          />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1}>
        <mesh position={[-3, -1.5, -1]} scale={0.6}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial 
            color="#60A5FA" 
            roughness={0.1} 
            transmission={0.9} 
            thickness={0.5} 
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={3} floatIntensity={1.5}>
        <mesh position={[3, 2, -2]} scale={0.9}>
          <coneGeometry args={[1, 1.5, 4]} />
          <meshPhysicalMaterial 
            color="#F43F5E" 
            roughness={0.1} 
            transmission={0.9} 
            thickness={0.5} 
          />
        </mesh>
      </Float>
    </>
  );
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigate('/');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#101010]">
      {/* 3D Interactive Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <PresentationControls 
             global 
             rotation={[0, 0.3, 0]} 
             polar={[-0.4, 0.2]} 
             azimuth={[-1, 0.75]} 
             snap={true}>
            <FloatingShapes />
          </PresentationControls>
          <Environment preset="city" />
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={15} blur={1.5} far={4} />
        </Canvas>
      </div>

      {/* Floating Glassmorphism Form */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
        {/* We use pointer-events-auto inside the form to allow clicks, but pointer-events-none outside allows 3D dragging */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full max-w-sm pointer-events-auto shadow-2xl relative overflow-hidden">
          
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#8B5CF6]/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#10B981]/30 rounded-full blur-2xl"></div>
          
          <div className="text-center mb-8 relative z-10">
            <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-2 group">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 transition-transform">
                <rect x="4" y="14" width="10" height="22" rx="3" fill="#8B5CF6" />
                <rect x="24" y="10" width="11" height="17" rx="3" fill="#EA580C" />
                <rect x="4" y="4" width="31" height="10" rx="3" fill="#10B981" />
                <circle cx="29" cy="32" r="3" fill="#60A5FA" />
              </svg>
              <div className="flex flex-col justify-center -space-y-0.5 text-left">
                <span className="text-white font-extrabold text-lg leading-tight tracking-tight">Template<span className="text-[#8B5CF6]">Hub</span></span>
              </div>
            </Link>
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-sm text-gray-400">Drag the background to interact with the 3D shapes!</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-5 relative z-10">
            <div>
              <label className="block text-xs font-medium text-gray-300 mb-1 ml-1">Email address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#191919]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" 
                placeholder="you@example.com" 
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1 ml-1 pr-1">
                <label className="block text-xs font-medium text-gray-300">Password</label>
                <a href="#" className="text-xs font-medium text-[#8B5CF6] hover:text-[#A78BFA] transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#191919]/60 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all" 
                placeholder="••••••••" 
                required
              />
            </div>
            
            <button type="submit" className="w-full bg-white text-black font-bold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors flex justify-center items-center shadow-lg mt-2">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400 relative z-10">
            Don't have an account? <Link to="/" className="font-medium text-white hover:text-[#8B5CF6] transition-colors ml-1">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}