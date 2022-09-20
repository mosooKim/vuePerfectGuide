<template>
    <div>
        <list-item></list-item>
        <!-- <ul class="news-list">
            <li v-for="item in fetchedAsk" class="post">
                포인트 영영
                <div class="points">
                    {{ item.points }}
                </div>
                기타 정보 영역
                <div>
                    <p class="news-title">
                        <router-link v-bind:to="`item/${item.id}`" class="news-title">
                            {{ item.title }}
                        </router-link>
                    </p>
                    <small class="link-text">
                        {{ item.time_ago }} by
                        <router-link v-bind:to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
                    </small>
                </div>
            </li>
        </ul> -->
        <!-- <div v-for="item in fectchedAsk">{{ item.title }}</div> -->
        <!-- <p v-for="item in fetchedAsk"> -->
            <!-- <a :href="item.url">
                {{ item.title }}
            </a> -->
            <!-- <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
            </router-link>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p> -->
    </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';
// import bus from '../utils/bus.js';
// // import { fetchAskList } from '../api/index.js';
// // import { mapState } from 'vuex';
// // import { mapGetters } from 'vuex';

export default {
    components: {
        ListItem
    },
    // mounted() {
    //     bus.$emit('end:spinner');
    // },
    mixins: [ListMixin],
    // created() {
    //     bus.$emit('start:spinner');
    //     this.$store.dispatch('FETCH_ASK')
    //         .then(() => {
    //             console.log('fetched');
    //             bus.$emit('end:spinner');
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
}
//     components: {
//         ListItem
//     },
//     // computed: {
//     //     ...mapGetters([
//     //         'fetchedAsk'
//     //     ]),

//     //     // #2
//     //     // 이 방법도 편하진 않다
//     //     // ...mapState({
//     //     //     ask: state => state.ask
//     //     // })

//     //     // #1
//     //     // ask() {
//     //     //     return this.$store.state.ask;
//     //     // }
//     // },
//     created() {
//         bus.$emit('start:spinner');
//         setTimeout(() => {
//             this.$store.dispatch('FETCH_ASK')
//                 .then(() => {
//                     console.log('fetched');
//                     bus.$emit('end:spinner');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//         }, 3000);
//     // created() {
//     //     this.$store.dispatch('FETCH_ASK');

//     //     // var vm = this;
//     //     // fetchAskList()
//     //     //     .then(function(response) {
//     //     //         vm.ask = response.data;
//     //     //     })
//     //     //     .catch(function(error) {
//     //     //         console.log(error);
//     //     //     })
//     }
// }
</script>

<style>
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