<script setup>
import {ref} from "vue";
import { slime } from '../data/monsters.js'

const clicks = ref(0)
const monster = slime

function attack(){
  clicks.value++
}

function reset(){
  clicks.value = 0
}
</script>

<template>
  <section class="panel">
    <h2>{{monster.name}}</h2>
    <p>{{monster.level}}</p>
    <button class="monster-button", data-testid="attack" @click="attack()" type="button">
      <img :src="monster.image" :alt="monster.name"/>
      <span>Attaquer</span>
    </button>

    <p>Nombre total de clics</p>
    <strong data-testid="monster">{{clicks}}</strong>

    <button @click="reset()" type="button">
      Réinitialiser
    </button>
  </section>
</template>

<style scoped>
.monster-button {
  display: grid;
  justify-items: center;
  gap: 12px;
  background: #17121e;
  color: #d4b77a;
  border: 1px solid #493747;
  cursor: pointer;
}
.monster-button img {
  width: 160px;
  height: 160px;
  image-rendering: pixelated;
}
.monster-button:hover {
  background: #30243c;
}
.monster-button:active img {
  transform: scale(0.94);
}
</style>