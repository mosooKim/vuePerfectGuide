<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in this.$store.state.news" class="post">
                포인트 영영
                <div class="points">
                    {{ item.points }}
                </div>
                기타 정보 영역
                <div>
                    <p class="news-title">
                        <a :href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul>
        <div v-for="user in this.$store.state.news">{{ user.title }}</div>
        <p v-for="item in this.$store.state.news">
            <a :href="item.url">
                {{ item.title }}
            </a>
            <small>
                {{ item.time_ago }} by 
                <router-link v-bind:to="'/user' + item.user">{{ item.user }}</router-link>
                <router-link v-bind:to="`/user/${item.user}`">{{ item.user }}</router-link>
            </small>
        </p> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
// import bus from '../utils/bus.js';
// import { fetchNewsList } from '../api/index.js';


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
    //     this.$store.dispatch('FETCH_NEWS')
    //             .then(() => {
    //                 console.log('fetched');
    //                 bus.$emit('end:spinner');
    //             })
    //             .catch((error) => {
    //                 console.log(error);
    //             });
    // }
        // setTimeout(() => {
        //     this.$store.dispatch('FETCH_NEWS')
        //         .then(() => {
        //             console.log('fetched');
        //             bus.$emit('end:spinner');
        //         })
        //         .catch((error) => {
        //             console.log(error);
        //         });
        // }, 3000);
        // bus.$emit('end:spinner');
        
//     var vm = this;
//     fetchNewsList()
//     axios.get('https://api.hnpwa.com/v0/news/1.json')
//         .then(function(response) {
//             console.log(response);
//             vm.users = response.data;
//         })
//         .catch(function(error) {
//             console.log(error);
//         })
    // }
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