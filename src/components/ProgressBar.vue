<!--https://stackabuse.com/lazy-loading-routes-with-vue-router-->
<template>
    <div :class="{'loading-container': true, loading: isLoading, visible: isVisible}">
        <div class="loader" :style="{ width: progress + '%' }">
            <div class="light"></div>
        </div>
        <div class="glow"></div>
    </div>
</template>
<script>
import random from 'lodash.random'

// Assume that loading will complete under this amount of time.
const defaultDuration = 8000
// How frequently to update
const defaultInterval = 1000
// 0 - 1. Add some variation to how much the bar will grow at each interval
const variation = 0.5
// 0 - 100. Where the progress bar should start from.
const startingPoint = 0
// Limiting how far the progress bar will get to before loading is complete
const endingPoint = 90

export default {
    name: 'ProgressBar',

    data: () => ({
        isLoading: true, // Once loading is done, start fading away
        isVisible: false, // Once animate finish, set display: none
        progress: startingPoint,
        timeoutId: undefined,
    }),

    mounted() {
        this.eventBus.on('asyncComponentLoading', this.start)
        this.eventBus.on('asyncComponentLoaded', this.stop)
    },

    methods: {
        start() {
            this.isLoading = true
            this.isVisible = true
            this.progress = startingPoint
            this.loop()
        },

        loop() {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId)
            }
            if (this.progress >= endingPoint) {
                return
            }
            const size = (endingPoint - startingPoint) / (defaultDuration / defaultInterval)
            const p = Math.round(this.progress + random(size * (1 - variation), size * (1 + variation)))
            this.progress = Math.min(p, endingPoint)
            this.timeoutId = setTimeout(
                this.loop,
                random(defaultInterval * (1 - variation), defaultInterval * (1 + variation))
            )
        },

        stop() {
            this.isLoading = false
            this.progress = 100
            clearTimeout(this.timeoutId)
            const self = this
            setTimeout(() => {
                if (!self.isLoading) {
                    self.isVisible = false
                }
            }, 200)
        },
    },
}
</script>
<style scoped>
.loading-container {
    font-size: 0; /* remove space */
    position: fixed;
    top: 0;
    left: 0;
    height: 5px;
    width: 100%;
    opacity: 0;
    display: none;
    z-index: 100;
    transition: opacity 200;
}

.loading-container.visible {
    display: block;
}
.loading-container.loading {
    opacity: 1;
}

.loader {
    background: #23d6d6;
    display: inline-block;
    height: 100%;
    width: 50%;
    overflow: hidden;
    border-radius: 0 0 5px 0;
    transition: 200 width ease-out;
}

.loader > .light {
    float: right;
    height: 100%;
    width: 20%;
    background-image: linear-gradient(to right, #23d6d6, #29ffff, #23d6d6);
    animation: loading-animation 2s ease-in infinite;
}

.glow {
    display: inline-block;
    height: 100%;
    width: 30px;
    margin-left: -30px;
    border-radius: 0 0 5px 0;
    box-shadow: 0 0 10px #23d6d6;
}

@keyframes loading-animation {
    0% {
        margin-right: 100%;
    }
    50% {
        margin-right: 100%;
    }
    100% {
        margin-right: -10%;
    }
}
</style>