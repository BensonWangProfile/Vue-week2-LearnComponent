<script>
export default {
  data() {
    return {}
  },
  props: {
    travelData: {
      type: Object,
      default: () => {
        return {}
      },
      required: true
    }
  }
}
</script>
<template>
  <section class="main-content">
    <!-- 搜尋區 -->
    <div class="search-area">
      <select name="" class="regionSearch">
        <option value="地區搜尋" disabled selected hidden>地區搜尋</option>
        <option value="全部地區">全部地區</option>
        <option value="台北">台北</option>
        <option value="台中">台中</option>
        <option value="高雄">高雄</option>
      </select>
      <p id="searchResult-text">本次搜尋共 3 筆資料</p>
    </div>
    <ul class="ticketCard-area">
      <TicketCard v-for="card in travelData" :key="card.id" :card-data="card" />
    </ul>
    <!-- 查無關鍵字區 -->
    <div class="cantFind-area">
      <h3>查無此關鍵字資料</h3>
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/no_found.png?raw=true"
        alt=""
      />
    </div>
  </section>
</template>
<style lang=""></style>
