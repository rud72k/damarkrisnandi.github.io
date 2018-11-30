<template>
    <div>
        <landing-banner></landing-banner>
        <landing-signup></landing-signup>
        <landing-event></landing-event>
        <landing-separator></landing-separator>
        <landing-timeline></landing-timeline>
        <landing-separator></landing-separator>
        <landing-speaker></landing-speaker>
        <landing-contact></landing-contact>
        <landing-footer></landing-footer>
    </div>
</template>

<script>
import landingBanner from './landingPageItems/landingBanner.vue'
import landingEvent from './landingPageItems/landingEvent.vue'
import landingTimeline from './landingPageItems/landingTimeline.vue'
import landingSpeaker from './landingPageItems/landingSpeaker.vue'
import landingFooter from './landingPageItems/landingFooter.vue'
import landingSignup from './landingPageItems/landingSignup.vue'
import landingSeparator from './landingPageItems/landingSeparator.vue'
import landingContact from './landingPageItems/landingContact.vue'
export default {
    components: {
        landingBanner, landingEvent, landingTimeline, landingSpeaker, landingFooter, landingSignup, landingSeparator, landingContact
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

@media screen and (min-width: 1500px){
    .seams-logo {
        width: 800px;
    }
}
</style>
