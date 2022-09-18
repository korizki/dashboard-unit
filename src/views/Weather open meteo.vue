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
                <h3>Weather - Today</h3>
                <p class="successinfo">Last updated at {{lastUpdated ? lastUpdated : 'Getting data ...'}} | {{timezone}} Time.</p>
                <div class="weatherbox" v-if="currentWeather">
                    <img :src="`./weathericon/${currentWeather}.svg`" alt="icon" width="100">
                    <div class="weatherdesc" >
                        <h3>{{weathercode[currentWeather] }}</h3>
                        <p><i class="fi fi-rr-wind"></i> Wind Speed {{windspeed}} Km/h</p>
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
                <h3>Weather Forecast (next 7 days)</h3>
                <p class="successinfo blue"><i class="fi fi-rr-marker"></i> {{location ? location : 'Getting your location ...'}}</p>
                <div class="weatherlist">
                    <div  v-for="day in forecast" class="weatheritem" v-if="forecast">
                        <figure>
                            <img :src="`./weathericon/${day.weathercode}.svg`" alt="icon" width="80">
                        </figure>
                        <h4>{{weathercode[day.weathercode].substring(0,20)}}</h4>
                        <div class="weatherdetail" :class=" isExInfosrc ? 'exinfo' : '' ">
                            <p title="Weather Date"><i class="fi fi-rr-calendar-lines"></i> {{day.date}}</p>
                            <p title="Weather Temperature"><i class="fi fi-rr-temperature-high"></i> {{day.temperature}}&deg; Celcius <strong>(max)</strong></p>
                            <p title="Rain Sum"><i class="fi fi-rr-cloud-showers"></i> {{day.precipitation_sum}} mm <span class="rainhours" title="Rain Duration"><i class="fi fi-rr-alarm-clock"></i> {{day.precipitation_hours}} hour's</span></p>
                            <p title="Wind Speed"><i class="fi fi-rr-wind"></i> {{day.windspeed}} Km/h</p>
                        </div>
                        <button class="checkweather" @click="isExInfosrc = !isExInfosrc">Detail</button>
                    </div>
                    <div v-else class="center">
                        <h3>Sorry, there is no data weather to display.</h3>
                    </div>
                </div>
            </div>
            <div class="navcontrol">
                <button @click="horizontalScroll('weatherlist','minus')">&lt;</button>
                <button @click="horizontalScroll('weatherlist','plus')">&gt;</button>
            </div>
            <hr class="divider">
            <div class="cont">
                <h3>Weather History by Date Range</h3>
                <div>
                    <div  class="weathersummary" v-if="searchresult">
                        <p class="successinfo" >Success get weather history, total <strong>{{searchresult.length}}</strong> data.</p>
                        <div>
                            <p class="successinfo blue"><i class="fi fi-rr-cloud-rain"></i> Total Precipitation Sum <strong>{{Math.round(totalrain)}} mm</strong></p>
                            <p class="successinfo blue"><i class="fi fi-rr-clock-three"></i> Total Rain Hours <strong>{{totalrainhour}} hours</strong></p>
                        </div>
                    </div>
                    <p class="successinfo failed" v-else>Sorry, there is no weather data to displayed.</p>
                </div>
                <div class="weatherresult" >
                    <div  v-for="day in searchresult" class="weatheritem">
                        <figure>
                            <img :src="`./weathericon/${day.weathercode}.svg`" alt="icon" width="80">
                        </figure>
                        <h4>{{weathercode[day.weathercode].substring(0,19)}}</h4>
                        <div class="weatherdetail" :class=" isExInfo ? 'exinfo' : '' ">
                            <p title="Weather Date"><i class="fi fi-rr-calendar-lines"></i> {{day.date}}</p>
                            <p title="Weather Temperature"><i class="fi fi-rr-temperature-high"></i> {{day.temperature}}&deg; Celcius <strong>(max)</strong></p>
                            <p title="Rain Sum"><i class="fi fi-rr-cloud-showers"></i> {{day.precipitation_sum}} mm <span class="rainhours" title="Rain Duration"><i class="fi fi-rr-alarm-clock"></i> {{day.precipitation_hours}} hour's</span></p>
                            <p title="Wind Speed"><i class="fi fi-rr-wind"></i> {{day.windspeed}} Km/h</p>
                        </div>
                        <button class="checkweather" @click="isExInfo = !isExInfo">Detail</button>
                    </div>
                </div>
                <div class="navcontrol">
                    <button v-if="searchresult" @click="horizontalScroll('weatherresult','minus')">&lt;</button>
                    <button v-if="searchresult" @click="horizontalScroll('weatherresult','plus')">&gt;</button>
                </div>
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
            windspeed: '',
            currentWeather: '',
            forecast: '',
            startdate: '',
            enddate: '',
            isExInfo: false,
            isExInfosrc: false,
            searchresult: '',
            totalrain: '',
            totalrainhour: '',
            isFilter: true,
            weathercode : 
                { 
                    0 : 'Clear Sky',
                    1 : 'Mainly Clear',
                    2 : 'Partly Cloudly',
                    3 : 'Overcast',
                    45 : 'Fog',
                    48: 'Depositing Rime Fog',
                    51: 'Drizzle Slight',
                    53: 'Drizzle Moderate',
                    55: 'Drizzle Dense',
                    56 : 'Freeze Drizzle Slight',
                    57 : 'Freeze Drizzle Dense',
                    61: 'Rain Slight',
                    63: 'Rain Moderate',
                    65: 'Rain Heavy',
                    66: 'Freezing Rain Light',
                    67: 'Freezing Rain Heavy',
                    71: 'Snow Fall Slight',
                    73: 'Snow Fall Moderate',
                    75: 'Snow Fall Heavy',
                    77: 'Snow Grains',
                    80: 'Rain Showers Slight',
                    81: 'Rain Showers Moderate',
                    82: 'Rain Showers Violent',
                    85: 'Snow Showers Slight',
                    86: 'Snow Showers Heavy',
                    95: 'Thunderstrom Slight',
                    96: 'Thunderstrom Moderate',
                    99: 'Thunderstrom Heavy',
                }
        }
    },
    methods: {
        loadData(data){
            this.location = 'Loa Kulu - Kutai Kartanegara, Indonesia';
            this.currentWeather = parseInt(data.current_weather.weathercode);
            this.temperature = data.current_weather.temperature;
            this.lastUpdated = data.current_weather.time;
            this.timezone = data.timezone;
            this.windspeed = data.current_weather.windspeed
        },
        horizontalScroll(list, param){
            param == 'plus' ? document.querySelector(`.${list}`).scrollLeft += 360 : document.querySelector(`.${list}`).scrollLeft -= 360 
        },
        loadSearchResult(data){
            this.searchresult = data.days;
        },
        convertData(data){
            const totaldata = data.daily.time.length;
            let newArray = [];
            for(let i = 0; i < totaldata; i++){
                // console.log(data.daily.time[i])
                let convertedObj = {
                    date: data.daily.time[i],
                    precipitation_sum : data.daily.precipitation_sum[i],
                    temperature: data.daily.temperature_2m_max[i],
                    weathercode: data.daily.weathercode[i],
                    windspeed: data.daily.windspeed_10m_max[i],
                    precipitation_hours: data.daily.precipitation_hours[i]
                }
                newArray.push(convertedObj)
            }
            return newArray;
        },
        loadForecast(data){
            this.forecast = this.convertData(data);
        },
        searchWeatherData(){
            axios.get(`https://api.open-meteo.com/v1/forecast?latitude=-0.64&longitude=116.79&daily=weathercode,temperature_2m_max,precipitation_sum,precipitation_hours,windspeed_10m_max&timezone=Asia%2FSingapore&start_date=${this.startdate}&end_date=${this.enddate}`)
                .then(res => {
                    this.searchresult = this.convertData(res.data)
                    this.totalrain = res.data.daily.precipitation_sum.reduce((a,b) => a+b, 0)
                    this.totalrainhour = res.data.daily.precipitation_hours.reduce((a,b) => a+b, 0)
                    // auto scroll to bottom
                    this.searchresult ? window.scrollTo({top: document.querySelector('.mainc').scrollHeight, behavior: 'smooth'}) : ''
                })
            // automate scroll
        }
    },
    mounted(){
        // current weather
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=-0.64&longitude=116.79&current_weather=true&timezone=auto')
            .then(res => this.loadData(res.data))
        // forecast 1 week
        axios.get('https://api.open-meteo.com/v1/forecast?latitude=-0.64&longitude=116.79&timezone=auto&daily=weathercode,temperature_2m_max,precipitation_sum,windspeed_10m_max,precipitation_hours')
            .then(res => this.loadForecast(res.data))
    }
}
</script>

<style>
    .weathersummary{
        display: flex;
        justify-content: space-between;
    }
    .weathersummary>div{
        margin-top: 8px;
    }
    .weathersummary>div>p{
        margin: 0 4px;
    }
    .rainhours{
        margin-left: 8px;
        font-size: 0.64rem;
        background: var(--biru2);
        color: var(--biru1);
        border-radius: 0.25rem;
        padding: 4px 8px;
    }
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
    .weatherlist::-webkit-scrollbar, .weatherresult::-webkit-scrollbar {
        width: 5px;
      }
    .weatherlist, .weatherresult{
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
    .weatheritem>figure{
        display: flex;
        justify-content: center;
        align-items: center;
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
    .weatheritem>h4{
        text-align: left;
        width: 180px;
    }
    .weatheritem>figure{
        width: 100%;
        height: 90px;
    }
    .weatheritem>figure>img{
        margin-bottom: 16px;
    }
    .weatherdetail{
        text-align: left !important;
        margin-top: 8px;
        color: var(--hitam2);
        font-size: 0.9rem;
        overflow: hidden;
        max-height: 45px;
        transition: max-height 0.3s ease;
        position: relative;
    }
    .exinfo{
        max-height: 150px;
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
    .botdesc>h4>i, .fi-rr-marker, .fi-rr-wind, .fi-rr-cloud-showers, .fi-rr-alarm-clock, .fi-rr-cloud-rain, .fi-rr-clock-three{
        display: inline-block;
        margin-right: 4px;
        transform: translateY(1.5px);
    }
    .fi-rr-clock-three, .fi-rr-cloud-rain{
        transform: translateY(1.5px);
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