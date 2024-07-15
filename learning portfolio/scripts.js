"use strict";

(async () => {
    await loadTrianglesPreset(tsParticles);
  
    await tsParticles.load({
      id: "tsparticles",
      options: {
        preset: "triangles",
      },
    });
  })();

tsParticles.load({
    id: "tsparticles",
    options: {
      particles: {
        shape: {
          type: "square", // starting from v2, this require the square shape script
        },
      },
      preset: "triangles",
    },
  });