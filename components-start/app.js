const app=Vue.createApp({
    data(){
        return{
            friends:[
                {
                    id:'pSingh',
                    name:'Prashant Singh',
                    phone:'8599 5494 989',
                    email:'prashant@test.com'
                },
                {
                    id:'ram05',
                    name:'Ram Shukla',
                    phone:'4856 5295 895',
                    email:'ram@test.com'
                }
            ]
        }
    }
});
app.component('friend-contact',{
    template:`
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{detailsAreVisible?'Hide':'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>
        `,
    data(){
        return {
            detailsAreVisible:false,
            friend:{
                id:'pSingh',
                name:'Prashant Singh',
                phone:'8599 5494 989',
                email:'prashant@test.com'
            }
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible=!this.detailsAreVisible
        }
    }
});
app.mount('#app')