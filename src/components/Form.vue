<template>
  <h1>This is form</h1>
  <h3>List of QCC</h3>
  <p v-if="data" v-for="item in data" :key="item.id">{{item.judul}}</p>
  <!-- <button @click="postdata">Post Data</button> -->
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
const data = ref(null)
const loadData = (value) => {
    data.value = value.data.slice(0,4)
}
const qccid = ref('F-QCC-0030')
const evaluator = ref([{'nrp': '19019548'}])

const postdata = async () => {
    
    const response = await fetch('http://ss6api.ppa-ho.net/ppa-employee-api/api/cico/penilaianQcc', {
        method: 'POST',
        body: JSON.stringify({
            "nrp" : "15041084",
            "qcc_id" : qccid.value,
            "penilai" : evaluator.value
        }),
    })
    console.log(response)
}
onMounted(() => {
    axios.get('http://ss6api.ppa-ho.net/ppa-employee-api/api/cico/listAllQcc')
    .then(res => {
        let arraydata = res.data
        loadData(arraydata)
    })
})
</script>

<style>

</style>