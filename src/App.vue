<template>
  <div class="main-content">
  
    <router-view/>
    <Footer />
  </div>
</template>
<script>
  import Footer from './components/Footer.vue';
  export default{
    components: {Footer}
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;600;700&display=swap');
:root{
  --hitam1 : #2e3c40;
  --hitam2: #586479;
  --abu1: #abb1bb;
  --abu2: #e5e5e5;
  --abu3: #f5f6f8;
  --merah1: #f24848;
  --merah2: #fdcece;
  --hijau1: #38ac3d;
  --hijau2: #d5ffd7;
  --biru1: #2391D9;
  --biru2: #d9edfc;
  --kuning1: #f1b203;
  --kuning2: #ffeab1; 
}
h1{ font-size: 2.4rem };
*{
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    box-sizing: border-box;
}
body{
  scroll-behavior: smooth;
}
button{
  line-height: 1rem;
}
body{
  margin: 0;
  padding: 0;
}
h1,h2,h3,h4,h5{
  line-height: 1.3rem;
}
.mainc{
  text-align: left;
  width: 80%;
  margin-left: 10%;
}
.boxinfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
}
.boxinfo>p{
  background: var(--hijau2);
  font-size: 0.8rem;
  padding: 0 16px;
  color: var(--hijau1);
  border-radius: 0.25rem;
}
.breadcrumb>p{
  font-size: 0.8rem;
  background: var(--biru2);
  color: var(--biru1);
  border-radius: 0.25rem;
  padding: 0 16px;
  margin: 16px 0;
  display: inline-block;
}
.filterboxx>h3{
  cursor: pointer;
}
.headss{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.headss>h1{
  margin: 32px 0;
}
p{
  line-height: 1.5rem;
}
.noresult{
  text-align: center;
}
.noresult>a>img{
  width: 400px;
}
#app {
  font-family: 'Quicksand', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-content{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: absolute;
}
nav {
  padding: 30px;
  z-index: 10;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.small{ font-size: 0.8rem };
.xsmall { font-size: 0.64rem };
.mainc{
  width: 80%;
  margin-left: 10%;
}
</style>
