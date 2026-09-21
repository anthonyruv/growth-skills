"use client";
import { useEffect, useState } from "react";
import { Dithering, PaperTexture } from "@paper-design/shaders-react";

function useWebGL() {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2");
    setSupported(Boolean(gl));
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
  }, []);
  return supported;
}
export function PaperArt() {
  const supported = useWebGL();
  return (
    <div className="art-stack" aria-hidden="true">
      <div className="art-underlay" />
      <div className="art-poster">
        <div className="art-topline">
          <span>GROWTH STUDIES</span>
          <span>VOL. 001</span>
        </div>
        <div className="dither-art">
          {supported && (
            <Dithering
              width="100%"
              height="100%"
              colorBack="#f46643"
              colorFront="#272c25"
              shape="sphere"
              type="4x4"
              size={2.5}
              speed={0}
              frame={2500}
              scale={0.68}
              minPixelRatio={1}
              maxPixelCount={500000}
            />
          )}
          <svg className="art-arrow" viewBox="0 0 100 100" fill="none">
            <path
              d="M18 82 80 20M22 20h58v58"
              stroke="currentColor"
              strokeWidth="9"
            />
          </svg>
        </div>
        <div className="art-bottomline">
          <span>
            LESS THEORY.
            <br />
            MORE DOING.
          </span>
          <span className="art-registration">✳</span>
        </div>
      </div>
      <span className="art-caption">FIG. 01 — KNOWLEDGE, APPLIED.</span>
    </div>
  );
}
export function PaperSurface() {
  const supported = useWebGL();
  return (
    <div className="paper-surface" aria-hidden="true">
      {supported && (
        <PaperTexture
          width="100%"
          height="100%"
          colorBack="#f5f2e9"
          colorPaper="#f5f2e9"
          colorShadow="#a69d88"
          roughness={0.15}
          roughnessSize={0.2}
          fiber={0.07}
          fiberSize={0.35}
          folds={0}
          wrinkles={0}
          crumples={0}
          drops={0}
          seed={14}
          minPixelRatio={1}
          maxPixelCount={900000}
        />
      )}
    </div>
  );
}
