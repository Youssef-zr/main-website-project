<template>
    <div id="tsparticles"></div>
</template>

<script>

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;

import "../plugins/particles/tsparticles-engine.js";
import "../plugins/particles/tsparticles.bundle.js";
import "../plugins/particles/jquery-particles.js";
export default {

    created() {
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        $(document).ready(async function () {
            await loadFull(tsParticles);

            $("#tsparticles")
                .particles()
                .init(
                    {
                        background: {
                            color: {
                                value: "#0d47a1",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 6,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    },
                    function (container) {
                        // container is the particles container where you can play/pause or stop/start.
                        // the container is already started, you don't need to start it manually.
                    }
                );
        });
    },
}
</script>

<style lang="scss" scoped></style>