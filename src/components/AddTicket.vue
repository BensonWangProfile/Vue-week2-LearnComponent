<script>
import axios from 'axios'

export default {
  data() {
    return {
      url: 'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json',
      travelData: [],
      checkData: {
        name: '',
        imgUrl: '',
        area: '',
        description: '',
        group: '',
        price: '',
        rate: ''
      }
    }
  },
  methods: {
    getData() {
      axios
        .get(this.url)
        .then((response) => {
          this.travelData = response.data
          this.$emit('get-data', this.travelData)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    postData() {}
    // emitData() {
    //   this.$emit('get-data', this.travelData)
    // }
  },
  mounted() {
    this.getData()
  }
}
</script>
<template>
  <section class="addTicket-panel">
    <div class="addTicket-img">
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/main_img.png?raw=true"
        alt=""
      />
      <img
        src="https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/logo.png?raw=true"
        alt=""
      />
    </div>
    <form action="" class="addTicket-form">
      <h1 class="title">
        <span><i class="fas fa-plus-circle"></i></span>新增旅遊套票
      </h1>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketName">套票名稱</label>
          <input
            v-model.lazy="checkData.name"
            type="text"
            id="ticketName"
            placeholder="請填寫套票名稱"
            name="套票名稱"
          />
        </div>
        <div class="alert-message">
          <p id="ticketName-message" data-message="套票名稱">
            <!--    <i class="fas fa-exclamation-circle"></i>
                      <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketImgUrl">圖片網址</label>
          <input
            v-model.lazy="checkData.imgUrl"
            type="text"
            id="ticketImgUrl"
            placeholder="請填寫圖片網址"
            name="圖片網址"
          />
        </div>
        <div class="alert-message">
          <p id="ticketImgUrl-message" data-message="圖片網址">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketRegion">景點地區</label>
          <select id="ticketRegion" name="景點地區" v-model="checkData.area">
            <option value="" disabled selected hidden>請選擇景點地區</option>
            <option value="台北">台北</option>
            <option value="台中">台中</option>
            <option value="高雄">高雄</option>
          </select>
        </div>
        <div class="alert-message">
          <p id="ticketRegion-message" data-message="景點地區">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketPrice">套票金額</label>
          <input
            v-model.lazy="checkData.price"
            type="number"
            id="ticketPrice"
            placeholder="請填寫套票金額"
            name="套票金額"
            min="0"
          />
        </div>
        <div class="alert-message">
          <p id="ticketPrice-message" data-message="套票金額">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketNum">套票組數</label>
          <input
            v-model="checkData.group"
            type="number"
            id="ticketNum"
            placeholder="請填寫套票組數"
            name="套票組數"
            min="1"
          />
        </div>
        <div class="alert-message">
          <p id="ticketNum-message" data-message="套票組數">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketRate">套票星級</label>
          <input
            v-model.lazy="checkData.rate"
            type="number"
            id="ticketRate"
            placeholder="請填寫套票星級"
            name="套票星級"
            min="1"
            max="10"
          />
        </div>
        <div class="alert-message">
          <p id="ticketRate-message" data-message="套票星級">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="addTicket-input">
          <label for="ticketDescription">套票描述</label>
          <textarea
            v-model.lazy="checkData.description"
            name="套票描述"
            id="ticketDescription"
            placeholder="請填寫套票描述 (限 100 字)"
          ></textarea>
        </div>
        <div class="alert-message">
          <p id="ticketDescription-message" data-message="套票描述">
            <!-- <i class="fas fa-exclamation-circle"></i>
                        <span>必填!</span> -->
          </p>
        </div>
      </div>
      <input type="button" class="addTicket-btn btn" value="新增套票" />
    </form>
  </section>
</template>
<style></style>
