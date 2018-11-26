<template>
    <div class="container" style="margin-top: 70px">
        <h1 class="title" style="text-align: center"> Keynote Speakers</h1>
        
        <div class="centered container">
            <kspeaker-detail kspeakerPhoto="https://bulma.io/images/placeholders/128x128.png" 
                                kspeakerName="Prof. Basuki Widodo" 
                                University="Institut Teknologi Sepuluh November"
                                From="Indonesia"
                                class="centered left-padding"/>
        </div>

        <h1 class="title" style="text-align: center; margin-top: 40px;">Plenary Speakers</h1>
        <div class="columns left-padding">
            <div class="column" v-for="(speaker,index) in speakers1" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>

        <div class="columns left-padding">
            <div class="column" v-for="(speaker,index) in speakers2" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>

        <div class="columns left-padding">
            <div class="column" v-for="(speaker,index) in speakers3" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>

        <div class="columns left-padding">
            <div class="column" v-for="(speaker,index) in speakers4" :key="index">
                <speaker-detail :speakerPhoto="speaker.photo" 
                                :speakerName="speaker.name" 
                                :University="speaker.university"
                                :From="speaker.from"/>
            </div>
        </div>

        <div class="columns left-padding">
            <div class="column" v-for="(speaker,index) in speakers5" :key="index">
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
import kspeakerDetail from "./template/kspeakerDetail"
export default {
    components: {
        speakerDetail, kspeakerDetail
    },
    data() {
        return {
            kspeakers: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Basuki Widodo",
                    university: "Institut Teknologi Sepuluh November",
                    from: "Indonesia",
                }
            ],
            speakers1: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Assoc. Prof. Shelton Peiris ",
                    university: "University of Sydney",
                    from: "Australia"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Atok Zulijanto",
                    university: "Universitas Gadjah Mada",
                    from: "Indonesia"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Chen Zehua",
                    university: "National University of Singapore",
                    from: "Singapore"
                },
            ],
            speakers2: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Dr. Eridani",
                    university: "Universitas Airlangga",
                    from: "Indonesia"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Dr. Srivatsan Vidyaraghavan ",
                    university: "National University of Singapore",
                    from: "Singapore"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Imam Solekhudin",
                    university: "Universitas Gadjah Mada",
                    from: "Indonesia"
                },
            ],
            speakers3: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Bao Weizhu",
                    university: "National University of Singapore",
                    from: "Singapore"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Dr. Wono Setya Budhi",
                    university: "Institut Teknologi Bandung",
                    from: "Indonesia"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Marjono",
                    university: "Universitas Brawijaya",
                    from: "Indonesia"
                },
            ],
            speakers4: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Mitsuru Sugimoto ",
                    university: "Nagoya University",
                    from: "Japan"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Dr. W. T. van Horssen ",
                    university: "TU Delft",
                    from: "The Netherlands"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Alexander Zimmermann",
                    university: "Université de Picardie",
                    from: "France"
                },
            ],
            speakers5: [
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Ken Seng Tan, Ph.D.",
                    university: "University of Waterloo",
                    from: "Canada"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Prof. Dr. Engku Muhammad Nazri Engku Abu Bakar",
                    university: "University Utara Malaysia",
                    from: "Malaysia"
                },
                {
                    photo: "https://bulma.io/images/placeholders/128x128.png",
                    name: "Dr. F. M. Spieksma",
                    university: "University of Leiden",
                    from: "The Netherlands"
                },
            ]
        }
    }
}
</script>

<style>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}
.left-padding {
    padding-left: 20px;
}
</style>
