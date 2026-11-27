<script setup>
import {ref} from "vue";

const clicks = ref(0)

function attack(){
  clicks.value++
}

function reset(){
  clicks.value = 0
}
</script>

<template>
  <section class="panel">
    <p>Nombre total de clics</p>
    <strong data-testid="counter">{{clicks}}</strong>
    <button @click="attack">Attaquer</button>
    <button @click="reset">Réinitialiser</button>
  </section>
</template>

<style scoped>

</style>