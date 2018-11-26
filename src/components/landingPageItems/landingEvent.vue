<template>
    <div class="container narrow-item" style="margin-top: 70px">
        <h1 class="title" style="text-align: center">Events</h1>
        <nav class="level">
            <div class="level-item has-text-centered" v-for="(event,index) in events1" :key="index">
                <div>
                    <img    :src="event.icon" 
                            alt="" 
                            class="title event-icon">
                    <p><strong>{{event.name}}</strong></p>
                    <p class="heading">{{event.detail}}</p>
                </div>
            </div>
        </nav>
        <nav class="level">
            <div class="level-item has-text-centered" v-for="(event,index) in events2" :key="index">
                <div>
                    <img    :src="event.icon" 
                            alt="" 
                            class="title event-icon">
                    <p><strong>{{event.name}}</strong></p>
                    <p class="heading">{{event.detail}}</p>
                </div>
            </div>
        </nav>
        
    </div>
</template>

<script>
export default {
    data() {
        return{
            events1: [
                {
                    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDk5LjMgOTkuMzsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDk5LjMgOTkuMyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBhdGggZD0iTTQyLjksNDEuM2M5LjMsMCwxNi45LTcuNiwxNi45LTE2LjljMC05LjMtNy42LTE2LjgtMTYuOS0xNi44QzMzLjYsNy42LDI2LDE1LjEsMjYsMjQuNEMyNiwzMy43LDMzLjYsNDEuMyw0Mi45LDQxLjN6ICAgIE00Mi45LDEwLjZjNy42LDAsMTMuOSw2LjIsMTMuOSwxMy44YzAsNy42LTYuMiwxMy45LTEzLjksMTMuOUMzNS4yLDM4LjMsMjksMzIsMjksMjQuNEMyOSwxNi44LDM1LjIsMTAuNiw0Mi45LDEwLjZ6Ii8+PHBhdGggZD0iTTg4LjQsNzJoLTQuNVY0OWMwLTAuNC0wLjEtMC44LTAuNC0xTDc5LjgsNDRjMS4yLTIuMywwLjYtNS4yLTEuNC02LjlsLTQuMS0zLjVjLTEuMi0xLTIuNy0xLjUtNC4yLTEuMyAgIGMtMS41LDAuMS0yLjksMC44LTMuOSwyYy0yLDIuNC0xLjcsNi4xLDAuNyw4LjFsNC4xLDMuNWMxLjEsMC45LDIuNCwxLjQsMy43LDEuNGMxLjEsMCwyLjItMC4zLDMuMS0wLjlsMy4xLDMuM1Y3MmgtOC41ICAgYy0wLjQtMTUuNy0xMy4zLTI4LjMtMjktMjguM2MtMTUuOCwwLTI4LjcsMTIuNi0yOSwyOC4zaC0zLjdjLTAuOCwwLTEuNSwwLjctMS41LDEuNXYxNi40YzAsMC44LDAuNywxLjUsMS41LDEuNWg3Ny44ICAgYzAuOCwwLDEuNS0wLjcsMS41LTEuNVY3My41Qzg5LjksNzIuNyw4OS4yLDcyLDg4LjQsNzJ6IE03Mi45LDQzLjZsLTQuMS0zLjVjLTEuMi0xLTEuMy0yLjctMC4zLTMuOWMwLjUtMC42LDEuMS0wLjksMS45LTEgICBjMC4xLDAsMC4yLDAsMC4yLDBjMC42LDAsMS4zLDAuMiwxLjgsMC43bDQuMSwzLjVsMCwwYzEuMiwxLDEuMywyLjcsMC4zLDMuOUM3NS44LDQ0LjQsNzQuMSw0NC42LDcyLjksNDMuNnogTTQzLjMsNDYuNiAgIGMxNC4xLDAsMjUuNywxMS4zLDI2LDI1LjNIMTcuM0MxNy43LDU3LjksMjkuMiw0Ni42LDQzLjMsNDYuNnogTTg2LjksODguNEgxMi4xVjc1aDc0LjhWODguNHoiLz48L2c+PC9zdmc+",
                    name: "Conference",
                    detail: "lorem ipsum dolor sit amet"
                },
                {
                    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC40IDEwMC40OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAwLjQgMTAwLjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik04OC42LDI1LjFWMTIuOWMwLTAuOC0wLjctMS41LTEuNS0xLjVINTAuNVY0LjFjMC0wLjgtMC43LTEuNS0xLjUtMS41cy0xLjUsMC43LTEuNSwxLjV2Ny4zSDExYy0wLjgsMC0xLjUsMC43LTEuNSwxLjUgIHYxMi4yYzAsMC40LDAsMS4zLDAsMlY2M2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMjMuMmwtNy43LDMyLjNjLTAuMiwwLjgsMC4zLDEuNiwxLjEsMS44YzAuMSwwLDAuMiwwLDAuNCwwYzAuNywwLDEuMy0wLjUsMS41LTEuMSAgbDcuOS0zM2gxMC4zdjI0LjJjMCwwLjgsMC43LDEuNSwxLjUsMS41czEuNS0wLjcsMS41LTEuNVY2NC41aDEwbDguMiwzM2MwLjIsMC43LDAuOCwxLjEsMS41LDEuMWMwLjEsMCwwLjIsMCwwLjQsMCAgYzAuOC0wLjIsMS4zLTEsMS4xLTEuOGwtOC0zMi4zaDIzLjRjMC44LDAsMS41LTAuNywxLjUtMS41Qzg4LjgsNjMsODguNiwyNS42LDg4LjYsMjUuMXogTTg1LjYsMTQuNHYxMC4ySDEyLjVWMTQuNEg4NS42eiAgIE0xMi41LDYxLjVWMjcuNmg3My4xdjMzLjlIMTIuNXoiLz48L3N2Zz4=",
                    name: "Mini Symposium",
                    detail: "lorem ipsum dolor sit amet"
                },
            ],
            events2: [
                {
                    icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC40IDEwMC40OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAwLjQgMTAwLjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik03Ni45LDM0di0yLjdjMy40LTIsNS42LTUuNyw1LjYtOS43di00LjhjMC02LjItNS0xMS4yLTExLjItMTEuMlM2MCwxMC42LDYwLDE2Ljh2NC44YzAsMy45LDIsNy41LDUuNCw5LjV2Mi45ICBjLTEuNSwwLjQtMi45LDEtNC4zLDEuOGMtMi4yLTUuMS03LjMtOC43LTEzLjItOC43Yy01LjgsMC0xMC43LDMuNC0xMyw4LjRjLTEuMy0wLjYtMi42LTEuMi0zLjktMS41di0yLjdjMy40LTIsNS42LTUuNyw1LjYtOS43ICB2LTQuOGMwLTYuMi01LTExLjItMTEuMi0xMS4ycy0xMS4yLDUtMTEuMiwxMS4ydjQuOGMwLDMuOSwyLDcuNSw1LjQsOS41djIuOWMtOSwyLjYtMTUuMSwxMC43LTE1LjEsMjAuMWMwLDAuOCwwLjcsMS41LDEuNSwxLjUgIGgyOS42YzAuMSwwLDAuMiwwLDAuMywwYzEuMiwxLjksMi45LDMuNSw0LjksNC43djQuNWMtMTEuOSwzLjItMjAsMTMuOS0yMCwyNi4zYzAsMC44LDAuNywxLjUsMS41LDEuNWg1MS41YzAuOCwwLDEuNS0wLjcsMS41LTEuNSAgYzAtMTIuMy04LjUtMjMuMi0yMC4zLTI2LjN2LTQuM2MyLjEtMS4yLDMuOC0yLjgsNS4xLTQuOGgzMC43YzAuOCwwLDEuNS0wLjcsMS41LTEuNUM5Mi4yLDQ0LjgsODUuOCwzNi41LDc2LjksMzR6IE03LjUsNTIuNyAgYzAuNi03LjgsNi4yLTE0LjIsMTMuOS0xNmMwLjctMC4yLDEuMi0wLjgsMS4yLTEuNXYtNWMwLTAuNi0wLjMtMS4xLTAuOC0xLjNjLTIuOC0xLjQtNC42LTQuMi00LjYtNy4zdi00LjhjMC00LjUsMy43LTguMiw4LjItOC4yICBzOC4yLDMuNyw4LjIsOC4ydjQuOGMwLDMuMS0xLjksNi00LjcsNy40Yy0wLjUsMC4yLTAuOSwwLjgtMC45LDEuNHY0LjhjMCwwLjcsMC41LDEuMywxLjIsMS41YzEuNywwLjQsMy4zLDEsNC44LDEuOCAgYy0wLjIsMS0wLjMsMi0wLjMsMy4xVjQ4YzAsMS42LDAuMywzLjIsMC44LDQuN0w3LjUsNTIuN0w3LjUsNTIuN3ogTTUyLjgsNTguMmMtMC41LDAuMi0wLjksMC44LTAuOSwxLjR2Ni40YzAsMC43LDAuNSwxLjMsMS4yLDEuNSAgYzEwLjYsMi4zLDE4LjQsMTEuNSwxOS4xLDIyLjJIMjMuOGMwLjYtMTAuNyw4LjItMTkuNywxOC44LTIyLjFjMC43LTAuMiwxLjItMC44LDEuMi0xLjV2LTYuNmMwLTAuNi0wLjMtMS4xLTAuOC0xLjMgIGMtMy45LTEuOS02LjMtNS44LTYuMy0xMC4xdi02LjRjMC02LjMsNS4xLTExLjMsMTEuMy0xMS4zczExLjMsNS4xLDExLjMsMTEuM1Y0OEM1OS4zLDUyLjMsNTYuOCw1Ni4zLDUyLjgsNTguMnogTTYxLjUsNTIuNyAgYzAuNS0xLjUsMC44LTMuMSwwLjgtNC43di02LjRjMC0wLjktMC4xLTEuOS0wLjMtMi43YzEuNi0xLDMuNC0xLjcsNS4yLTIuMWMwLjctMC4yLDEuMi0wLjgsMS4yLTEuNXYtNWMwLTAuNi0wLjMtMS4xLTAuOC0xLjMgIGMtMi44LTEuNC00LjYtNC4yLTQuNi03LjN2LTQuOGMwLTQuNSwzLjctOC4yLDguMi04LjJjNC41LDAsOC4yLDMuNyw4LjIsOC4ydjQuOGMwLDMuMS0xLjksNi00LjcsNy40Yy0wLjUsMC4yLTAuOSwwLjgtMC45LDEuNHY0LjggIGMwLDAuNywwLjUsMS4zLDEuMiwxLjVjNy43LDEuNywxMy40LDguMywxNC4xLDE2TDYxLjUsNTIuN0w2MS41LDUyLjd6Ii8+PC9zdmc+",
                    name: "Workshop",
                    detail: "lorem ipsum dolor sit amet"
                },
                {
                    icon:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMC40IDEwMC40OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTAwLjQgMTAwLjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik05Mi45LDYwLjRsLTcuNC01di0xNWw3LjQtNC45YzAuNC0wLjMsMC43LTAuNywwLjctMS4yYzAtMC41LTAuMy0xLTAuNy0xLjJMNTQuOCw3LjVjLTAuNS0wLjMtMS4yLTAuMy0xLjcsMEw2LjEsMzguOSAgIGMtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjMCwwLDAsMCwwLDAuMWMtMC4yLDAuMy0wLjIsMC41LTAuMiwwLjh2MjcuNWMwLDAuNSwwLjMsMSwwLjcsMS4ybDM4LjEsMjUuNGMwLjMsMC4yLDAuNSwwLjMsMC44LDAuMyAgIGMwLjMsMCwwLjYtMC4xLDAuOC0wLjNsNDcuMS0zMS40YzAuNC0wLjMsMC43LTAuNywwLjctMS4yQzkzLjYsNjEuMSw5My4zLDYwLjYsOTIuOSw2MC40eiBNNTQsMTAuNmwzNS40LDIzLjZMODMuNiwzOCAgIGMtMC4zLDAuMS0wLjYsMC4zLTAuOCwwLjVMNDUsNjMuN0wxNi42LDQ0LjhjLTAuMS0wLjEtMC4yLTAuMS0wLjItMC4ybC02LjgtNC41TDU0LDEwLjZ6IE0xNy4xLDQ4LjhsMjcsMThjMC41LDAuMywxLjIsMC4zLDEuNywwICAgbDM2LjctMjQuNXYxMi4zTDQ1LjIsNzkuMmwtMjguMS0xOEwxNy4xLDQ4LjhMMTcuMSw0OC44eiBNNDUsOTEuMkw4LjQsNjYuOFY0M2w1LjgsMy44VjYyYzAsMC41LDAuMywxLDAuNywxLjNsMjkuNiwxOSAgIGMwLjIsMC4yLDAuNSwwLjIsMC44LDAuMmMwLjMsMCwwLjYtMC4xLDAuOC0wLjJsMzcuNC0yNC42bDUuOSw0TDQ1LDkxLjJ6Ii8+PHBhdGggZD0iTTQ3LjUsMjQuM2wxNy44LDEyLjJjMC4zLDAuMiwwLjYsMC4zLDAuOCwwLjNjMC41LDAsMC45LTAuMiwxLjItMC43YzAuNS0wLjcsMC4zLTEuNi0wLjQtMi4xTDQ5LjIsMjEuOCAgIGMtMC43LTAuNS0xLjYtMC4zLTIuMSwwLjRDNDYuNiwyMi45LDQ2LjgsMjMuOCw0Ny41LDI0LjN6Ii8+PC9nPjwvc3ZnPg==",
                    name: "Publication",
                    detail: "lorem ipsum dolor sit amet"
                },
            ]
        }
    }

}
</script>

<style>
    .narrow-item {
        width: 40%;

    }
    .event-icon {
        height: 128px;
    }

    @media screen and (max-width: 360px){
        .event-icon {
            height: 48px;
        }
    }
</style>
