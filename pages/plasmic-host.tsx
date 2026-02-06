import * as React from 'react';
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs/react-server-conditional";
import { PLASMIC } from '@/plasmic-init';
// import "@/styles/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
