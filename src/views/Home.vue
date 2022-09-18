<template>
  <Navbar />
    <Form />
</template>

<script>
  import Navbar from '../components/Navbar.vue';
  import Form from '../components/Form.vue';
export default {
  name: 'Home',
  components: {Navbar, Form}
}
</script>
