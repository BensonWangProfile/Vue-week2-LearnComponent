<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    }
  }
}
</script>
<template lang="">
  <li class="ticketCard">
    <div class="ticketCard-img">
      <a href="#">
        <img :src="cardData.imgUrl" alt="" />
      </a>
      <div class="ticketCard-region">{{ cardData.area }}</div>
      <div class="ticketCard-rank">{{ cardData.rate }}</div>
    </div>
    <div class="ticketCard-content">
      <div>
        <h3>
          <a href="#" class="ticketCard-name">{{ cardData.name }}</a>
        </h3>
        <p class="ticketCard-description">{{ cardData.description }}</p>
      </div>
      <div class="ticketCard-info">
        <p class="ticketCard-num">
          <span><i class="fas fa-exclamation-circle"></i></span>
          剩下最後 <span id="ticketCard-num"> {{ cardData.group }} </span> 組
        </p>
        <p class="ticketCard-price">
          TWD <span id="ticketCard-price">${{ cardData.price }}</span>
        </p>
      </div>
    </div>
  </li>
</template>

<style></style>
