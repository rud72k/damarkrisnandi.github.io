<template>
  <div class="container is-6 is-offset-6" style="margin-top: 70px">
    <h1 class="title left-space" style="text-align: center">Important Dates</h1>
    <Timeline
      :timeline-items="timelineItems"
      :message-when-no-items="messageWhenNoItems"
      class="left-space"/>
  </div>
</template>

<script>
import Timeline from 'timeline-vuejs'

export default {
  name: "App",
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: 'There arent items',
    timelineItems: [
      {
        year: {},
        items: [
          {
            nameMonth: 'Jan 1, 2019',
            title: 'Call for Paper',
          },
          {
            nameMonth: 'Apr 27, 2019',
            title: 'Abstract Submission (Deadline)',
          },
          {
            nameMonth: 'May 6, 2019',
            title: 'Notification of Abstract Acceptance',
          },
          {
            nameMonth: 'May 13, 2019',
            title: 'Payment for Registration (Early Bird)',
          },
          {
            nameMonth: 'Jul 13, 2019',
            title: 'Payment for Registration (Normal)',
          },
          {
            nameMonth: 'Aug 10, 2019',
            title: 'Full Paper Submission (Deadline)',
          },
          {
            nameMonth: 'Oct 19, 2019',
            title: 'Notification of Paper Acceptance',
          }
        ]
      },
    ]
  })
};
</script>

<style>
.left-space {
  display: block;
  margin: auto;
}
@media screen and (max-width: 1089px) {
  .left-space {
  margin-left: 20px;
}
}
</style>
