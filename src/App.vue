<template>
<div>
 <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!--<MiPrimerComponente title="Entraron"/>
  <MiPrimerComponente />-->
  <indecision-component-vue/>
</div>

</template>

<script>
import IndecisionComponentVue from './components/IndecisionComponent.vue'

//import HelloWorld from './components/HelloWorld.vue'
//import MiPrimerComponente from './components/MiPrimerComponente.vue'
//import IndecisionComponentVue from './components/IndecisionComponent.vue'

export default {
  name: 'App',
  components: {
    //MiPrimerComponente,
    IndecisionComponentVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
