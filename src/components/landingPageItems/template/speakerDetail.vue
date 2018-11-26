<template>
    <article class="media">
        <figure class="media-left">
            <p class="image is-64x64">
            <!--<img src="https://bulma.io/images/placeholders/128x128.png">-->
            <img :src="speakerPhoto" class="rounded-image">
            </p>
        </figure>
        <div class="media-content">
            <div class="content">
            <p>
                <strong>{{speakerName}}</strong>
                <br>
                <i class="heading">
                {{University}}
                <br>
                {{From}}
                </i>
            </p>
            </div>
        </div>
        </article>
</template>

<script>
export default {
    props: [
        'speakerPhoto', 'speakerName', 'University', 'From'
    ]
}
</script>

<style>
    .rounded-image {
        border-radius: 50%;
    }
</style>
