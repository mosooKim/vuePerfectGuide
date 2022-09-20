<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in this.$store.state.jobs" class="post">
                포인트 영역
                <div class="points">
                    {{ item.points || 0 }}
                </div>
                기타 정보 영역
                <div>
                    <p class="news-title">
                        <a :href="item.url" class="news-title">{{ item.title }}</a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <a :href="item.url">
                            {{ item.domain }}
                        </a>
                    </small>
                </div>
            </li>
        </ul> -->
        <!-- <div v-for="job in this.$store.state.jobs ">{{ job.title }}</div> -->
        <!-- <p v-for="job in this.$store.state.jobs">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }}, {{ job.domain }}</small>
        </p> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
// import bus from '../utils/bus.js';
// // import { fetchJobsList } from '../api/index.js';

export default {
    components: {
        ListItem
    },
    //     mounted() {
    //     bus.$emit('end:spinner');
    // },
    mixins: [ListMixin],
    // created() {
    //     bus.$emit('start:spinner');
    //     setTimeout(() => {
    //         this.$store.dispatch('FETCH_JOBS')
    //             .then(() => {
    //                 console.log('fetched');
    //                 bus.$emit('end:spinner');
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    //     }, 3000);
//     // created() {
//     //     this.$store.dispatch('FETCH_JOBS');
//     // //     // fetchJobsList()
//     // //     //     .then(response => this.jobs = response.data)
//     // //     //     .catch(error => console.log(error));
//     }
}
</script>

<style scope>
/* .news-list {
   margin: 0; 
   padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
} */
</style>