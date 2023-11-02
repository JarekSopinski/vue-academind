const PLAYER_MIN_ATTACK = 5;
const PLAYER_MAX_ATTACK = 12;
const MONSTER_MIN_ATTACK = 8;
const MONSTER_MAX_ATTACK = 15;
const SPECIAL_MIN_ATTACK = 10;
const SPECIAL_MAX_ATTACK = 25;

const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerBarStyles() {
      return { width: `${this.playerHealth}%` };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(PLAYER_MIN_ATTACK, PLAYER_MAX_ATTACK);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(MONSTER_MIN_ATTACK, MONSTER_MAX_ATTACK);
      this.playerHealth -= attackValue;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(SPECIAL_MIN_ATTACK, SPECIAL_MAX_ATTACK);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    }
  },
});

app.mount('#game');
