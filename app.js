const app = Vue.createApp({
    data(){
        return {
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logs:[]
        };
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.winner='draw';
            }
            else if(value<=0){
                this.winner='monster';
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner='draw';
            }
            else if(value<=0){
                this.winner='player';
            }
        }
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth<=0)
                return {width:0+"%"};
            return {width:this.monsterHealth+"%"};
        },
        playerBarStyles(){
            if(this.playerHealth<=0)
                return {width:0+"%"};
            return {width:this.playerHealth+"%"};
        }
    },
    methods:{
        startGame(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.currentRound=0;
            this.winner=null;
            this.logs=[];
        },
        surrender(){
            this.winner='monster';
        },
        attackMonster(){
            const attack_val= Math.floor(Math.random()*7)+5;
            this.monsterHealth-=attack_val;
            this.addLogMessage('player','attack',attack_val)
            this.attackPlayer();
        },
        attackPlayer(){
            const attack_val= Math.floor(Math.random()*7)+8;
            this.playerHealth-=attack_val;
            this.addLogMessage('monster','attack',attack_val)
        },
        specialAttackMonster(){
            const attack_val= Math.floor(Math.random()*15)+10;
            this.monsterHealth-=attack_val;
            this.currentRound++;
            this.addLogMessage('player','special attack',attack_val)
            this.attackPlayer();
        },
        healPlayer(){
            const HealValue= Math.floor(Math.random()*15)+8;
            if(this.playerHealth+HealValue>100){
                this.playerHealth=100;
                HealValue=0;
            }
            else{
                this.playerHealth+=HealValue;
            }
            this.addLogMessage('player','heal',HealValue)
            this.attackPlayer();
        },
        addLogMessage(who,what,value){
            this.logs.unshift({
               actionType:what,
               actionBy:who,
               actionValue:value
            });
        }
    },
    // LIFE CYCLE HOOKS
    beforeCreate(){
        console.log('beforeCreate()');
    },
    created(){
        console.log('created()');
    },
    beforeMount(){
        console.log('beforeMount()');
    },
    mounted(){
        console.log('mounted()');
    },
    beforeUpdate(){
        console.log('beforeUpdate()');
    },
    updated(){
        console.log('updated()');
    },
    beforeUnmount(){
        console.log('beforeUnmount()')
    },
    unmounted(){
        console.log('unmounted()')
    }
});
app.mount('#game');
// setTimeout(function(){
//     app.unmount();
// },3000);