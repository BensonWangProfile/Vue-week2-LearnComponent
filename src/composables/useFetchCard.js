import axios from 'axios'
import { ref } from 'vue'

// 製作類似 reactHook ｜ 類似元件判的 js
export function useFetchCard() {
  const data = ref([])
  const errMessage = ref('')

  const fetchInit = async () => {
    try {
      const res = await axios.get(
        'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json'
      )
      data.value = res.data
    } catch (err) {
      errMessage.value = err.message
    }
  }

  return { data, errMessage, fetchInit }
}
