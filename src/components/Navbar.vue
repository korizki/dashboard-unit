<template>
  <nav>
    <div>
      <div class="navinfo">
        <p class="small">{{ date }}</p>
        <div>
          <!-- <p class="small"><strong>Flash message here!</strong></p> -->
        </div>
        <p class="small"> Welcome, <strong>Administrator</strong></p>
      </div>
    </div>
    <div class="nav">
      <div class="logo">
        <router-link to="/"><img src="../assets/images/ppa.png" alt="logo" width="42" height="42" ></router-link>
      </div>
      <ul class="listnav">
          <div class="containerA">
            <router-link to="/operation-monitoring-unit"><h4 :class="{activeTab: active == 1}" @click="activeTab(1)">Unit Monitoring</h4></router-link>
          </div>
          <div class="containerA">
            <router-link to="/setting-fleet"><h4 :class="{activeTab: active == 2}" @click="activeTab(2)">Setting Fleet</h4></router-link>
          </div>
          <div class="containerA">
            <router-link to="/parking-location"><h4 :class="{activeTab: active == 3}" @click="activeTab(3)">Parking Location</h4></router-link>
            
          </div>
          <div class="containerA">
            <router-link to="/standby-operator"><h4 :class="{activeTab: active == 4}" @click="activeTab(4)">Standby Operator</h4></router-link>
            
          </div>
          <div class="containerA">
            <router-link to="/breakdown-monitoring"><h4>Breakdown Monitoring</h4></router-link>
          </div>
      </ul>
      <div class="cirbox" style="visibility: hidden">
        <span class="circle"><span>R</span></span><i class="fi fi-rr-caret-right"></i>
        <div class="logoutbtn">
          <a href="#"><i class="fi fi-rr-sign-out-alt"></i> Log Out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      date: '',
      active: '',
    }
  },
  methods: {
    getDate(){ 
      setInterval( () => {
        this.date = new Date().toLocaleString("en-US", {dateStyle: "full", timeStyle: "long"})
      }, 1000)
    },
    activeTab(page){
      localStorage.setItem("page", page)
    }
  },
  mounted(){
    this.getDate()
    this.active = localStorage.getItem("page")
  }
}
</script>

<style >
@import url('https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css');

*{
  margin: 0;
  text-decoration: none;
  list-style: none;
  color: inherit;
}
nav{
    width: 100%;
    top: -30px;
    padding: 0;
    position: sticky;
}
button{
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
.nav{
  background: white;
  z-index: 20;
  user-select: none;
  display: flex;
  padding: 12px 32px;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 2px 0 rgba(221, 221, 221, 0.5);
}
.fi-rr-caret-right{
  display: inline-block;
  transform: translateY(5px) rotate(90deg);
}
.navinfo{
  background: var(--abu3);
  display: flex;
  justify-content: space-between;
  padding: 4px 32px;
}
.circle{
  width: 35px;
  height: 35px;
  display: inline-block;
  background: dodgerblue;
  border-radius: 20px;
  color: white;
}
.circle>span{
  user-select: none;
  display: inline-block;
  transform: translateY(6px);
  font-weight: 700;
}
.listnav{
  display: flex;
  flex: 1;
  justify-content: center;
  gap: 32px;
}
.listnav>div>a>h4{
  color: var(--hitam2);
  transition: all 0.3s;
}
.listnav>div>a>h4:hover{
  color: var(--biru1);
  cursor: pointer;
}
.activeTab{
  color: var(--biru1) !important;
}
.containerA{
  padding: 12px 0;
}
.containerA:hover .navbox{
  opacity: 1;
  max-height: 500px;
  overflow: unset;
  transform: translate(-20px, 0)
} 
.containerA:hover >h4{
  color: var(--biru1);
}
.navbox{
  position: absolute;
  background: white;
  border-radius: 8px;
  text-align: left;
  padding: 0px 24px;
  margin-top: 12px;
  box-shadow: 0 0 50px 0 rgb(231, 231, 231);
  transition: transform 0.5s, opacity 0.5s;
  transform: translate(-20px, -10px);
  max-height: 0;
  overflow: hidden;
}
.navbox:after{
  content: "";
  position: absolute;
  top: -4px;
  transform: rotate(45deg);
  width: 20px;
  height: 20px;
  background: white;
  z-index: 0;
}
.navsection{
  margin: 16px 0;
}
.navsection>h4{
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
  margin-bottom: 4px;
}
.navsection2{
  display: flex;
  gap: 40px;
}
.navsection2>div>a{
  display: block;
  margin: 4px 0;
  line-height: 1.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--abu1) !important;
}
.navsection2>div>a:hover{
  color: var(--biru1) !important;
}
.logoutbtn{
  position: absolute;
  padding: 10px 6px;
  margin-top: 0px;
  width:max-content;
  transform: translate(-60px , -10px);
  border-radius: 0.25rem;
  transition: all 0.3s;
  opacity: 0;
  overflow: hidden;
  max-height: 0px;
}
.logoutbtn>a{
  padding: 0.5rem 0.75rem;
  line-height: 1.25rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  width: 100%;
  transition: all 0.3s;
  color: var(--hitam1);
  background: var(--abu3);
  border: 1px solid #ddd;
}
.logoutbtn>a:active{
  background: var(--merah1);
  color: white;
}
.fi-rr-sign-out-alt{
  display: inline-block;
  margin-right: 4px;
  transform: translateY(1px);
}
.cirbox:hover .logoutbtn{
  opacity: 1;
  transform: translate(-60px, 0);
  max-height: 100px;
}

@media screen and (max-width: 800px){
  .listnav{
    padding-left: 0;
  }
  .nav{
    padding: 12px 0;
  }
  .cirbox, .logo{
    display: none;
  }
  .navinfo>p:first-child{
    display: none;
  }
}
</style>