<template>
    <div>
        <Navbar />
        <div class="mainc">
            <div class="headss">
                <h1 class="header">List All Unit </h1>
                <div class="breadcrumb">
                    <p><router-link to="/">Home</router-link> / Operation / <strong>Monitoring Unit</strong></p>
                </div>
            </div>
            <div>
                <div class="filterboxx">
                    <h3 @click="filterShow = !filterShow">Filter Menu <i class="fi fi-rr-caret-right"></i></h3>
                    <div class="filterbox" :class="{'expand' : filterShow}">
                        <div>
                            <label for="">Select Unit</label>
                            <div>
                                <label class="container"> HD
                                    <input type="checkbox" v-model="hdChecked">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container"> DT
                                    <input type="checkbox" v-model="dtChecked">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="container"> EX
                                    <input type="checkbox" v-model="exChecked">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label for="page">Page</label>
                            <select name="page" id="page" v-model="filterpage">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div>
                            <label for="count">Item per page</label>
                            <select name="" id="" v-model="filtercount">
                                <option value="15">15</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                                <option value="250">250</option>
                                <option value="500">500</option>
                                <option value="1000">1000</option>
                            </select>
                        </div>
                        <div>
                            <button class="filterbtn" @click="handleFilter"><i class="fi fi-rr-filter"></i> Filter Data</button>
                        </div>
                    </div>
                </div>
                <div class="boxinfo">
                    <p class="success">Total unit show : <strong  v-if="listEq.length"> {{ filterpage ? filtercount : listEq.length }} </strong> from {{totalData ? totalData : listEq.length}} units.</p>
                    <label class="labs">
                        <i class="fi fi-rr-search"></i>
                        <input type="text" class='search' placeholder="Type unit number ... " @keyup="handlesearch" v-model="searchparam">
                    </label>
                </div>
            </div>
            <div  class="infopage">
                <div class="togle">
                    <!-- <label class="switch" title="Switch to Auto Scroll">
                        <input type="checkbox" @click="handleclick">
                        <span class="slider round"></span>
                    </label>
                    <label for="">Auto Scroll</label> -->
                    <div style="display: flex; align-items: center; gap: 16px" v-if="listEq.length">
                        <label class="switch" title="Switch to Auto Generate Data" >
                            <input type="checkbox" @click="handleUpdate" v-model="isAutoUpdate">
                            <span class="slider round"></span>
                        </label>
                        <label for="">Auto Update</label>
                    </div>
                    <p v-if="isAutoUpdate">Displaying page <strong>{{activepage}}</strong> from total <strong>{{totalpage}}</strong> pages.</p>
                </div>
            </div>
            <div class="outbox">
                <div class="maincontent">
                    <UnitCard class="showdown" v-for="equipment in listEq" :equipmentData="equipment" :key="equipment.CN" />
                </div>
            </div>
            <div class="noresult" v-if="!listEq.length">
                <a href="https://storyset.com/data" title="Data illustrations by Storyset">
                    <img src="../assets/images/nodata.svg" alt="illustration" height="300" width="300">
                </a>
                <h2>Sorry, no data found ...</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../components/Navbar.vue';
    import UnitCard from '../components/UnitCard.vue';
    import axios from 'axios';

    export default{
        components: {Navbar, UnitCard},
        data(){
            return {
                listEq : [],
                searchparam: '',
                isAutoUpdate: false,
                filterShow: true,
                filterpage: '',
                exChecked: '',
                dtChecked: '',
                hdChecked: '',
                filtercount: '',
                activepage: '',
                totalpage: '',
                totalData: '',
            }
        },
        methods: {
            loadData(data){
                this.listEq = data
                // count unit
                axios.get(`http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit?units[]=${this.hdChecked ? 'HD' : ''}&units[]=${this.exChecked ? 'EX' : ''}&units[]=${this.dtChecked ? 'DT' : ''}&page=${this.filterpage ? this.filterpage : 1}&count=20000`)
                    .then(res => this.countUnit(res.data.data.length))
            },
            handlesearch(){
                axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit?units[]=HD&units[]=EX&units[]=DT&page=1&count=20000')
                .then(res => {
                    let data = res.data.data.filter(item => item.CN.toLowerCase().includes(this.searchparam.toLowerCase()))
                    this.loadData(data)
                })
            },
            // handleclick(){
            //     this.isAnimate = !this.isAnimate
            // },
            countUnit(data){
                this.totalData = data
            },
            loadInfinite(){
                this.isAutoUpdate = true;
                this.activepage = 1;
                const totalpages = Math.ceil(parseInt(this.totalData) / parseInt(this.filtercount))
                this.totalpage = totalpages;
                for(let i = 1; i <= totalpages+1; i++ ){
                    // load data secara terus menerus setiap 10 detik 
                    setTimeout(() => {
                        if(i === totalpages){
                            this.loadInfinite()
                        }
                        if(this.isAutoUpdate == true){
                            this.activepage = i
                            axios.get(`http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit?units[]=${this.hdChecked ? 'HD' : ''}&units[]=${this.exChecked ? 'EX' : ''}&units[]=${this.dtChecked ? 'DT' : ''}&page=${i}&count=${this.filtercount}`)
                            .then(res => this.loadData(res.data.data))
                            // jika nilai i lebih dari nilai halaman max, maka jalankan kembali load
                        } 
                    }, 10000*i)
                }
            },
            handleUpdate(){
                // jika bernilai false maka lakukan animasi
                if(!this.isAutoUpdate){
                    // update nilai autoupdate
                    this.isAutoUpdate = true;
                    this.loadInfinite()
                } else {
                    this.isAutoUpdate = false;
                    this.handleFilter()
                }
            },  
            handleFilter(){
                axios.get(`http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit?units[]=${this.hdChecked ? 'HD' : ''}&units[]=${this.exChecked ? 'EX' : ''}&units[]=${this.dtChecked ? 'DT' : ''}&page=${this.filterpage}&count=${this.filtercount}`)
                    .then(res => this.loadData(res.data.data))
            }
        },
        mounted(){
            axios.get('http://ss6api.ppa-mhu.net/ppa-employee-api/api/cico/listUnit?units[]=HD&units[]=EX&units[]=DT&page=1&count=20000')
                .then(res => this.loadData(res.data.data))
            // auto reload
            // setTimeout(() => {
            //     window.location.reload()
            // },600000)
        }
    }
</script>

<style >
    *{
        color: inherit
    }
    
    .infopage>h5{
        font-size: 1.3rem;
        font-weight: 300;
        margin-bottom: 24px;
        color: rgb(147, 147, 147);
    }
    @keyframes showdown{
        0% {
            transform: translateY(-60px);
        }
        100%{
            transform: translateY(0);
        }
    }
    .showdown{
        animation-name: showdown;
        animation-duration: 1.5s
    }
    .info{
        font-size: 0.9rem;
        font-weight: 100;
        color: dodgerblue;
        display: inline-block;
        padding: 6px 15px;
        border-radius: 4px;
        background: rgba(30, 143, 255, 0.1);
        border: 1px solid dodgerblue;
        margin: 0 0 4px 16px;
        transform: translateY(-2px);
    }
    .fi-rr-info{
        display: inline-block;
        margin-right: 4px;
        transform: translateY(1px);
    }
    .fi-rr-caret-right {
        display: inline-block;
        margin-left: 4px;
        transform: translateY(2px) rotate(90deg);
    }
    .container {
        display: block;
        position: relative;
        padding-left: 40px;
        margin-bottom: 0px;
        cursor: pointer;
        font-size: 16px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .filterb{
        margin: 16px 0;
        text-align: left;
        padding: 16px 10%;
    }
    .filtera{
        color: crimson;
        padding: 6px 15px;
        opacity: 0.5;
        transition: all 0.1s ease;
    }
    .filtera:hover{
        border-bottom: 2px solid crimson;
        opacity: 1;
    }
    .filtera>i{
        display: inline-block;
        transform: translateY(2px);
        margin-right: 6px;
    }
    .filterbtn{
        padding: 0.5rem 0.75rem;
        font-size: 0.875rem;
        border-radius: 0.25rem;
        color: white;
        border: 1px solid dodgerblue;
        background: dodgerblue;
        font-family: inherit;
        transition: all 0.3s;
        font-weight: 600;
    }
    .filterbtn:active{
        position: relative;
        transform: translateY(3px);
    }
    .filterbtn:hover{
        box-shadow: 0 0 20px 0 rgba(30, 143, 255, 0.4);
    }
    .filterbtn>i{
        display: inline-block;
        margin-right:8px;
        transform: translateY(2px);
    }
    .filterbox{
        display: flex;
        align-items: flex-end;
        border-radius: 0.25rem;
        margin: 8px 0;
        gap: 16px;
        max-height: 0px;
        opacity: 0;
        overflow: hidden;
        outline: 1px solid var(--abu2);
        background: var(--abu3);
        text-align: left;
        transition: max-height 0.5s;
    }
    .filterbox>div{
        padding: 16px 24px;
        padding-right: 0px;
    }
    .filterbox>div>div{
        display: flex;
    }
    .filterbox>div>label{
        display: block;
        margin-bottom: 8px;
    }
    .filterbox>div>select{
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        border: 1px solid #ddd;
        font-size: 0.875rem;
    }
    .filterbox>div label{
        font-size: 1rem;
        margin-bottom: 8px;
    }
    .container{
        padding: 0.5rem 0.75rem;
        margin-left: 16px;
        padding-left: 24px;
    }
    .filterbox>div>div>.container{
        margin-bottom: 0;
        
    }
    .expand{
        display: flex;
        max-height: 500px;
        opacity: 1;
    }
    .search{
        padding: 0.75rem;
        color: var(--abu1);
        padding-left: 40px;
        border: 1px solid #ddd;
        border-radius: 50px;
        font-size: 0.875rem;
    }
    .search:focus{
        outline: 2px solid var(--biru1);
    }
    label>i{
        font-size: 1rem;
        color: #ddd;
        display: inline-block;
        transform: translate(28px, 4px)        
    }
    
    .animatescroll{
        animation-name: scrollup;
        animation-iteration-count: infinite;
        animation-duration: 420s;
    }
    @keyframes scrollup{
        0% {margin-top: 0px}
        50% {margin-top: -6000px}
        100% { margin-top: 0px}
    }
    .switch{
        position: relative;
        display: inline-block;width: 60px;
        height: 34px;
    }
    .switch input{
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider{
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
    }
    .slider:before{
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background: white;
        transition: 0.4s
    }
    input:checked + .slider{
        background-color: #2196F3;
    }
    input:checked + .slider:before{
        transform: translateX(26px)
    }
    .slider.round{
        border-radius: 34px;
    }
    .slider.round:before{
        border-radius: 50%;
    }
    .togle{
        display: flex;
        align-items: center;
        gap: 16px;
    }
    .togle>label{
        color: silver;
    }
    .outbox{
        display: flex;
        gap: 20px 30px;
    }
    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

/* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
        background-color: rgb(214, 214, 214);
    }

/* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: #2196F3;
    }

/* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 6px;
        left: -12px;
        height: 25px;
        width: 25px;
        z-index: 0;
        border-radius: 4px;
        outline: 1px solid #ddd;
        background-color: #eee;
    }
    .container>input {
        position: inline-block;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        transform: translate(-10px, 0px)
    }
    .maincontent{
        display: flex;
        flex-wrap: wrap;
        gap: 30px 40px;
        justify-content: center;
    }
    .infopage>p{
        display: flex;
        text-align: center;
    }
    .togle{
        display: flex;
        justify-content: space-between;
        margin-bottom: 32px;
    }
    
</style>