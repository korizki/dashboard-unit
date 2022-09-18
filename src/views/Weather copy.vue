<template>
    <div>
        <Navbar />
        <div class="mainc">
            <div class="headss">
                <h1 class="header">Weather Page</h1>
                <div class="breadcrumb">
                    <p><router-link to="/">Home</router-link> / Weekly / <strong>Weather Data</strong></p>
                </div>
            </div>
            <div class="filterboxx">
                <h3 @click="isFilter = !isFilter">Filter Menu <i class="fi fi-rr-caret-right"></i></h3>
                <form @submit.prevent="searchWeatherData">
                    <div class="filterbox" :class="{'expand' : isFilter}" >
                        <div>
                            <label for="page">Start Date</label>
                            <input type="date" v-model="startdate" required>
                        </div>
                        <div>
                            <label for="count">End Date</label>
                            <input type="date" v-model="enddate" required>
                        </div>
                        <div>
                            <button class="filterbtn" @click="handleFilter"><i class="fi fi-rr-filter"></i> Show Data</button>
                        </div>
                    </div>
                </form>
            </div>

            <div class="cont">
                <h3>Weather History by Date Range</h3>
                <p class="successinfo" v-if="searchresult">Success get weather history, total <strong>{{searchresult.length}}</strong> data.</p>
                <p class="successinfo failed" v-else>Sorry, there is no weather data to displayed.</p>
                <div class="weatherlist" v-if="searchresult">
                    <div v-for="item in searchresult" class="weatheritem" >
                        <figure>
                            <img :src="`./weathericon/${item.icon}.svg`" alt="icon" width="80">
                        </figure>
                        <h4>{{item.conditions}}</h4>
                        <div>
                            <p><i class="fi fi-rr-calendar-lines"></i> {{item.datetime}}</p>
                            <p><i class="fi fi-rr-temperature-high"></i> {{item.temp}}&deg; Celcius</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="divider">
            <div class="cont">
                <h3>Weather - Today</h3>
                <p class="successinfo">Last updated at {{lastUpdated ? lastUpdated : 'Getting data ...'}} | {{timezone}} Time.</p>
                <div class="weatherbox" v-if="currentWeather">
                    <img :src="`./weathericon/${icon}.svg`" alt="icon" width="100">
                    <div class="weatherdesc" >
                        <h3>{{currentWeather.conditions}}</h3>
                        <p>{{description}}</p>
                        <div class="botdesc">
                            <h4><i class="fi fi-rr-temperature-high"></i> {{temperature}}&deg; Celcius</h4>
                            <h4><i class="fi fi-rr-marker"></i> {{location}}</h4>
                        </div>
                    </div>
                </div>
                <div v-else class="notifweather">
                    <h3>Please wait, we are getting Weather Data soon ...</h3>
                </div>
            </div>

            <hr class="divider">
            <div class="cont">
                <h3>Weather Forecast (next 15 days)</h3>
                <p class="successinfo blue"><i class="fi fi-rr-marker"></i> {{location ? location : 'Getting your location ...'}}</p>
                <div class="weatherlist">
                    <div  v-for="day in forecast" class="weatheritem" v-if="forecast">
                        <figure>
                            <img :src="`./weathericon/${day.icon}.svg`" alt="icon" width="80">
                        </figure>
                        <h4>{{day.conditions}}</h4>
                        <div>
                            <p><i class="fi fi-rr-calendar-lines"></i> {{day.datetime}}</p>
                            <p><i class="fi fi-rr-temperature-high"></i> {{day.temp}}&deg; Celcius</p>
                        </div>
                        <button class="checkweather">Detail</button>
                    </div>
                    <div v-else class="center">
                        <h3>Sorry, there is no data weather to display.</h3>
                    </div>
                </div>
            </div>
            <div class="navcontrol">
                <button @click="horizontalScroll('minus')">&lt;</button>
                <button @click="horizontalScroll('plus')">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import axios from 'axios';

export default {
    components: {Navbar},
    data(){
        return {
            startdate: '',
            enddate: '',
            location: '',
            lastUpdated: '',
            icon: '',
            temperature: '',
            timezone: '',
            description: '',
            currentWeather: '',
            forecast: '',
            startdate: '',
            enddate: '',
            searchresult: '',
            isFilter: true
        }
    },
    methods: {
        loadData(data){
            // this.currentWeather = data.currentConditions;
            // this.lastUpdated = data.currentConditions.datetime;
            // this.forecast = data.days;
            // this.temperature = data.currentConditions.temp;
            // this.timezone = data.timezone;
            // this.icon = data.currentConditions.icon;
            // this.description = data.description;
        },
        horizontalScroll(param){
            param == 'plus' ? document.querySelector('.weatherlist').scrollLeft += 360 : document.querySelector('.weatherlist').scrollLeft -= 360 
        },
        loadSearchResult(data){
            this.searchresult = data.days;
            console.log(this.searchresult)
        },
        searchWeatherData(){
            axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/loa%20kulu/${this.startdate}/${this.enddate}?unitGroup=metric&key=KEQ6Z8A6KMJHGR63K9YME3VHB&contentType=json`)
                .then(res => this.loadSearchResult(res.data))
        }
    },
    mounted(){
        axios.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/loa%20kulu?unitGroup=metric&key=KEQ6Z8A6KMJHGR63K9YME3VHB&contentType=json')
            .then(res => this.loadData(res.data))
    }
}
</script>

<style>
    .checkweather{
        padding: 0.5rem 0.75rem;
        border-radius: 0.25rem;
        color: dodgerblue;
        background: white;
        border: 1px solid dodgerblue;
        width: 100%;
        font-size: 0.875rem;
        margin-top: 16px;
        transition: all 0.2s;
    }
    .checkweather:hover{
        background: dodgerblue;
        color: white;
    }
    .navcontrol{
        display: flex;
        justify-content: space-between;
    }
    .navcontrol>button{
        background: white;
        border: 1px solid var(--abu1);
        transform: translateY(-180px);
        color: var(--abu1);
        border-radius: 50px;
        padding: 8px 14px;
        transition: all 0.3s;
    }
    .navcontrol>button:hover{
        box-shadow: 0 0 30px 0 rgb(182, 182, 182);
        border: 1px solid dodgerblue;
        background: dodgerblue;
        color: white;
    }
    .navcontrol>button:nth-child(1){
        transform: translate(-20px, -200px);
    }
    .navcontrol>button:nth-child(2){
        transform: translate(20px, -200px);
    }
    .weatherlist::-webkit-scrollbar {
        width: 5px;
      }
    .weatherlist{
        display: flex;
        margin: 16px 0;
        border-radius: 0.25rem;
        gap: 32px;
        padding: 24px;
        background: var(--abu3);
        overflow: hidden;
        scroll-behavior: smooth;
        min-height: 180px;
    }
    .weatheritem{
        user-select: none;
        border: 1px solid var(--abu2);
        background: white;
        border-radius: 0.5rem;
        width: max-content;
        padding: 24px;
        text-align: center;
        transition: transform 0.3s ease;
    }
    .center{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
    }
    .weatheritem:hover{
        position: relative;
        transform: translateY(-5px);
        border: 1px solid var(--biru1);
        box-shadow: 0 0 25px 0 rgba(221, 221, 221, 0.7);
        outline: 2px solid var(--biru1);
    }
    .weatheritem>h4, .weatheritem>div{
        text-align: left;
    }
    .weatheritem>figure{
        width: 100%;
        height: 90px;
    }
    .weatheritem>figure>img{
        margin-bottom: 16px;
    }
    .weatheritem>div{
        margin-top: 8px;
        width: 180px;
        color: var(--hitam2);
        font-size: 0.9rem;
    }
    .weatheritem>div>p>i{
        display: inline-block;
        margin-right: 4px;
        margin-top: translateY(1px);
    }
    .notifweather{
        margin: 24px 0;
        text-align: center;
    }
    .weatherbox{
        display: flex;
        gap: 24px;
        align-items: center;
        justify-content: center;
        margin: 32px 0;
        user-select:none;
        overflow: hidden;
    }
    .weatherbox>img{
        transition: all 0.5s;
    }
    @keyframes turndown{
        0% {transform: translateY(0)}
        50% {transform: translateY(200px)}
        50.001% {transform: translateY(-200px)}
        100% {transform: translateY(0)}
    }
    .weatherbox:hover img{
        animation-name: turndown;
        animation-delay: 0.1s;
        animation-duration: 3s;
    }
    .weatherdesc>p{
        color: var(--abu1);
        margin: 4px 0 16px 0;
        width: 250px;
        line-height: 1.2rem;
        font-size: 0.8rem;
    }
    .filterbox>div>input{
        font-size: 0.875rem;
        padding: 0.55rem 0.75rem;
        border-radius: 0.25rem;
        font-family: 'Quicksand',sans-serif;
        border: 1px solid #ddd;
    }
    .successinfo{
        font-size: 0.8rem;
        background: var(--hijau2);
        color: var(--hijau1);
        border-radius: 0.25rem;
        display: inline-block;
        padding: 0 8px;
        margin-top: 8px;
    }
    .cont{
        margin: 24px 0;
    }
    .botdesc>h4{
        line-height: 1.5rem;
    }
    .botdesc>h4>i, .fi-rr-marker{
        display: inline-block;
        margin-right: 4px;
        transform: translateY(1px);
    }
    .divider{
        border: none;
        border-bottom: 1px solid#ddd ;
    }
    .blue{
        background: var(--biru2);
        color: var(--biru1);
    }
    .failed{
        background: var(--merah2);
        color: var(--merah1);
    }
</style>