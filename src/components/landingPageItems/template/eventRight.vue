<template>
    <article class="media">
        <div class="media-content">
            <div class="content">
            <p class="right-text">
                <strong>{{eventName}}</strong>
                <br>
                {{eventDetail}}
            </p>
            </div>
        </div>
        <figure class="media-right">
            <p class="image is-128x128">
            <!--<img src="https://bulma.io/images/placeholders/128x128.png">-->
            <img :src="eventIcon">
            </p>
        </figure>
        </article>
</template>

<script>
export default {
    props: [
        'eventIcon', 'eventName', 'eventDetail'
    ]
}
</script>

<style>
   
</style>
