import React from 'react';
import spinner from "@/public/images/spinner.gif";
import Image from "next/image";

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
     <Image        
        src={spinner}
        alt="Loading..." width={60} height={60}
      />
  </div>
);

export default LoadingSpinner;