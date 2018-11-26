<template>
    <div class="container" style="margin-top: 70px">
        <h1 class="title" style="text-align: center">Speakers</h1>
        <div class="columns left-space">
            <div class="column" v-for="(speaker,index) in speakers1" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>
        <div class="columns left-space">
            <div class="column" v-for="(speaker,index) in speakers2" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>
        <div class="columns left-space">
            <div class="column" v-for="(speaker,index) in speakers3" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>
        <div class="columns left-space">
            <div class="column" v-for="(speaker,index) in speakers4" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>
    </div>
</template>

<script>
import speakerDetail from "./template/speakerDetail"
export default {
    components: {
        speakerDetail
    },
    data() {
        return {
            speakers1: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
            ],
            speakers2: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
            ],
            speakers3: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
            ],
            speakers4: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "John Doe",
                    university: "University of Something",
                    from: "Atlantic"
                },
                {
                    name: "",
                    university: "",
                    from: ""
                }
            ]
        }
    }
}
</script>

<style>

</style>
