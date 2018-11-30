<template>
    <article class="media">
        <figure class="media-right">
            <p class="image is-128x128">
            <!--<img src="https://bulma.io/images/placeholders/128x128.png">-->
            <img :src="eventIcon">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
            <p class="text-left">
                <strong>{{eventName}}</strong>
                <br>
                {{eventDetail}}
            </p>
            </div>
        </div>
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
   .text-left {
       margin-left: 10px;
   }
</style>
