const PLAYER_MIN_ATTACK = 5;
const PLAYER_MAX_ATTACK = 12;
const MONSTER_MIN_ATTACK = 8;
const MONSTER_MAX_ATTACK = 15;

const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100
        }
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomValue(PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(MONSTER_MIN_ATTACK, MONSTER_MAX_ATTACK);
            this.playerHealth -= attackValue;
        }
    }
});

app.mount('#game');