<template>
    <section class="hero is-medium is-bold">
        <div class="hero-head">
          <header class="navbar">
            <div class="container">
              <div class="navbar-brand">
                <span class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarPrimary" class="navbar-menu " :class="{ 'is-active': showNav }">
                <div class="navbar-end">
                  <a class="navbar-item" @click="alert">
                      About SEAMS
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div class="hero-body">
            <div class="container">
                <img src="../../assets/logo.svg" class="seams-logo">
                <h2 class="subtitle tagline is-6 is-offset-3">
                    <i>"Deepening Mathematical Concepts for Wider Application 
                        through Multidisciplinary Research and Industries Collaborations"</i>
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
        showNav: false
        }
    },
    methods: {
        //showNav() {
            //this.activator = !this.activator
          //  return this.activator
        //},

        alert() {
                this.$dialog.alert({
                    title: 'About SEAMS',
                    message: 'Lorem ipsum dolor sit amet',
                    confirmText: 'OK',
                    type: 'is-success',
                    onConfirm: () => this.$toast.open('Thank you! :)',)
                })
            }
    }
}
</script>

<style>

</style>
