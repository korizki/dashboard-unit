<template>
  <h1>Welcome to New Dashboard</h1>
</template>

<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue';
const data = ref(null)
const loadData = (value) => {
    data.value = value.data.slice(0,4)
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