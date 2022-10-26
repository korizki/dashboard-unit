<template>
  <div>
    <h2>Welcome to Monitoring Page</h2>
    <h1><img src="../assets/images/ppa.png" alt="logo" width="60" height="60" > <span>PT. Antareja Mahada Makmur </span></h1>
  </div>
</template>

<script setup>
// import axios from 'axios';
import { ref, onMounted } from 'vue';
// const data = ref(null)
// const loadData = (value) => {
//     data.value = value.data.slice(0,4)
// }
// const qccid = ref('F-QCC-0030')
// const evaluator = ref([{'nrp': '19019548'}])

// const postdata = async () => {
    
//     const response = await fetch('http://ss6api.ppa-ho.net/ppa-employee-api/api/cico/penilaianQcc', {
//         method: 'POST',
//         body: JSON.stringify({
//             "nrp" : "15041084",
//             "qcc_id" : qccid.value,
//             "penilai" : evaluator.value
//         }),
//     })
//     console.log(response)
// }
onMounted(() => {
    localStorage.setItem("page", '')
})
</script>

<style scoped>
h2{
  margin-bottom: 16px;
  color: var(--biru1)
}
  h1{
    display: flex;
    align-items: center;
    justify-content:  center;
    gap: 24px;
  }
</style>