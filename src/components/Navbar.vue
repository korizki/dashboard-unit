<template>
  <nav>
    <div>
      <div class="navinfo">
        <p class="small">{{ date }}</p>
        <div>
          <p class="small"><strong>Flash message here!</strong></p>
        </div>
        <p class="small"> Welcome, <strong>Rizki Ramadhan</strong></p>
      </div>
    </div>
    <div class="nav">
      <div class="logo">
          <img src="../assets/images/ppa.png" alt="logo" width="42" height="42" >
      </div>
      <ul class="listnav">
          <div class="containerA">
            <h4>Teamwork</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>Form</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Set Roster</router-link>
                    <router-link to="/">Attendance Revision</router-link>
                    <router-link to="/">Leaving Application</router-link>
                    <router-link to="/">Benefit Claim Voucher</router-link>
                  </div>
                  <div>
                    <router-link to="/">Upload SPL</router-link>
                    <router-link to="/">Update Roster</router-link>
                    <router-link to="/">Upload DAR</router-link>
                    <router-link to="/">Upload Roster</router-link>
                  </div>
                  <div>
                    <router-link to="/">Surat Perintah Lembur</router-link>
                    <router-link to="/">Surat Pelanggaran</router-link>
                    <router-link to="/">Employee Mutation</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>Report</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Self Attendance</router-link>
                    <router-link to="/">Attendance Ratio</router-link>
                    <router-link to="/">Attendance Detail</router-link>
                    <router-link to="/">Surat Pelanggaran</router-link>
                  </div>
                  <div>
                    <router-link to="/">Operator Hours</router-link>
                    <router-link to="/">Raking Operator</router-link>
                    <router-link to="/">Induksi</router-link>
                    <router-link to="/">Izin</router-link>
                  </div>
                  <div>
                    <router-link to="/">Turn Over</router-link>
                    <router-link to="/">Working Days</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="containerA">
            <h4>SHE</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>Form</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Quiz Subject</router-link>
                    <router-link to="/">Quiz Question</router-link>
                    <router-link to="/">Quiz Schedule</router-link>
                    <router-link to="/">License</router-link>
                  </div>
                  <div>
                    <router-link to="/">Monitoring Komorbid</router-link>
                    <router-link to="/">Riwayat Komorbid</router-link>
                    <router-link to="/">SAP Plan</router-link>
                    <router-link to="/">Insiden</router-link>
                  </div>
                  <div>
                    <router-link to="/">Set Wake Up Call</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>Report</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">P2H</router-link>
                    <router-link to="/">Saya Peduli</router-link>
                    <router-link to="/">SAP</router-link>
                    <router-link to="/">Fit to Work</router-link>
                  </div>
                  <div>
                    <router-link to="/">Road Tracking</router-link>
                    <router-link to="/">Fatigue Monitor</router-link>
                    <router-link to="/">Fleet Monitoring</router-link>
                    <router-link to="/">Speed</router-link>
                  </div>
                  <div>
                    <router-link to="/">Dump Control</router-link>
                    <router-link to="/">Enviro</router-link>
                    <router-link to="/">Safety Performance</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="containerA">
            <h4>Operation</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>Access & Data Entry</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Academy - Post Test</router-link>
                    <router-link to="/">Refuelling Access</router-link>
                    <router-link to="/">Checker Access</router-link>
                    <router-link to="/">Push Check Out</router-link>
                  </div>
                  <div>
                    <router-link :to="{name : 'monitoringunit'}">Monitoring Unit</router-link>
                    <router-link to="/">Refuel Revision</router-link>
                    <router-link to="/">Fuel Rate</router-link>
                    <router-link to="/">Grease, Oil & Coolant</router-link>
                  </div>
                  <div>
                    <router-link to="/">Fuel Station</router-link>
                    <router-link to="/">Operational Plan</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>Report</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Production</router-link>
                    <router-link to="/">Machine Condition</router-link>
                    <router-link to="/">HM Operator</router-link>
                    <router-link to="/">HM by Activity</router-link>
                  </div>
                  <div>
                    <router-link to="/">Support Activity</router-link>
                    <router-link to="/">Ach. Operator</router-link>
                    <router-link to="/">Moco 2</router-link>
                    <router-link to="/">Base Control 2</router-link>
                  </div>
                  <div>
                    <router-link to="/">Cost Parameter</router-link>
                    <router-link to="/">Fuel Level</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="containerA">
            <h4>Administration</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>HC</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Man Power</router-link>
                    <router-link to="/">Leaving Application</router-link>
                    <router-link to="/">Time Management</router-link>
                  </div>
                  <div>
                    <router-link to="/">Benefit Claim</router-link>
                    <router-link to="/">Grade</router-link>
                    <router-link to="/">Surat Perintah Lembur</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>GA</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Flight Ticket</router-link>
                    <router-link to="/">Travel</router-link>
                    <router-link to="/">ST - In</router-link>
                    <router-link to="/">ST - Out</router-link>
                  </div>
                  <div>
                    <router-link to="/">Meals Request</router-link>
                    <router-link to="/">Meals Report</router-link>
                    <router-link to="/">Mess Building</router-link>
                    <router-link to="/">Mess Guest</router-link>
                  </div>
                  <div>
                    <router-link to="/">Mess Reservasi</router-link>
                    <router-link to="/">Legal</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="containerA">
            <h4>Approval</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>Need to Approve</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Revisi Absen</router-link>
                    <router-link to="/">Leave </router-link>
                    <router-link to="/">Benefit Claim Voucher</router-link>
                    <router-link to="/">Hazzard Report</router-link>
                  </div>
                  <div>
                    <router-link to="/">Perintah Lembur</router-link>
                    <router-link to="/">Assessment</router-link>
                    <router-link to="/">Dar Activity</router-link>
                    <router-link to="/">Legal</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>Approval Monitoring</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Revisi Absensi</router-link>
                    <router-link to="/">Benefit Claim Voucher</router-link>
                    <router-link to="/">Perintah Lembur</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="containerA">
            <h4>Weekly & System</h4>
            <div class="navbox">
              <div class="navsection">
                <h4>Weekly</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">Productivity by Model</router-link>
                    <router-link to="/">OB Gain & Loss</router-link>
                    <router-link :to="{name: 'weather'}">Weather Data</router-link>
                  </div>
                </div>
              </div>
              <div class="navsection">
                <h4>System</h4>
                <div class="navsection2">
                  <div>
                    <router-link to="/">VHMS Download</router-link>
                    <router-link to="/">Database</router-link>
                    <router-link to="/">Access Control</router-link>
                    <router-link to="/">Survey</router-link>
                    <router-link to="/">App Version Control</router-link>
                  </div>
                  <div>
                    <router-link to="/">User Feedback</router-link>
                    <router-link to="/">ABS Machine</router-link>
                    <router-link to="/">Events</router-link>
                    <router-link to="/">Device Monitoring</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </ul>
      <div class="cirbox">
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
      date: ''
    }
  },
  methods: {
    getDate(){ 
      setInterval( () => {
        this.date = new Date().toLocaleString("en-US", {dateStyle: "full", timeStyle: "long"})
      }, 1000)
    }
  },
  mounted(){
    this.getDate()
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
.listnav>div>h4{
  color: var(--abu1);
  transition: all 0.3s;
}
.listnav>div>h4:hover {
  color: var(--biru1);
  cursor: pointer;
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