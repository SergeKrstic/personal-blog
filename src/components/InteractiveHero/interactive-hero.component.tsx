import React from 'react';
import Particles from "react-tsparticles";

import particlesConfig from './particles.config';

export default () => (
  <div style={{ height:"100vh", width:"100vw", position: 'relative', overflow: "hidden", background: '#111'}}>
    <div style={{ position: 'absolute' }}>
      <Particles height="100vh" width="100vw" params={particlesConfig} />
    </div>
  </div>
)
