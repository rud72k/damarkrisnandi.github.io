<template>
    <div>
        <landing-banner></landing-banner>
        <landing-event></landing-event>
        <landing-timeline></landing-timeline>
    </div>
</template>

<script>
import landingBanner from './landingPageItems/landingBanner.vue'
import landingEvent from './landingPageItems/landingEvent.vue'
import landingTimeline from './landingPageItems/landingTimeline.vue'
export default {
    components: {
        landingBanner, landingEvent, landingTimeline
    }

}
</script>

<style>
.tagline {
    text-align: center;
}

.seams-logo {
  width: 280px;
  display: flex;
  margin: auto;
}

@media screen and (min-width: 768px){
    .seams-logo {
        width: 400px;
    }
}



</style>
