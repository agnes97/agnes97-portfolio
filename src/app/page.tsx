"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { Main } from "./page.styled";

export const disenchatnmentSeason4 = [
  // very legal video links
];

export default function Home() {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const updateEpisode = () => {
    setCurrentEpisode((prev) => prev + 1);
  };

  useEffect(() => {
    videoRef?.current?.addEventListener("ended", updateEpisode);
    // videoRef?.current?.requestFullscreen();
    // videoRef?.current?.focus();

    return () => videoRef?.current?.removeEventListener("ended", updateEpisode);
  }, [videoRef.current]);

  return (
    <Main>
      <div className={styles.description}>
        <div>Disenchantment</div>
      </div>

      <div
        className={styles.center}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          {currentEpisode + 1}
          <button onClick={updateEpisode}>NEXT EPISODE</button>
        </div>
        <video
          controls
          autoPlay={currentEpisode > 0}
          key={disenchatnmentSeason4[currentEpisode]}
          ref={videoRef}
        >
          <h2>Episode {disenchatnmentSeason4[currentEpisode + 1]}</h2>
          <source
            src={disenchatnmentSeason4[currentEpisode]}
            type="video/webm"
          />
        </video>
      </div>
    </Main>
  );
}
