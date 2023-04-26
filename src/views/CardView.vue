<script>
import CardCollection from '../components/CardCollection.vue'
export default {
  data() {
    return {
      travelData: []
    }
  },
  methods: {
    showData(data) {
      console.log(data)
      this.travelData = data
    }
  },
  components: { CardCollection }
}
</script>

<template>
  <AddTicket @get-data="showData" />
  <CardCollection :travel-data="travelData" />
</template>

<style scoped></style>
