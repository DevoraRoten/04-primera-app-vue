<template>
<div>
 <img alt="Vue logo" src="../assets/logo.png">
   <div class="bg-dark"></div>

   <div class="indecision-conainer">
      <input type="text" v-model="question" placeholder="Hazme una pregunta">
      <p>Recuerda  terminar con un signo de interrogacion (?)</p>
   </div>

   <div>
      <h2>{{question}}</h2>
      <h1>resp</h1>
   </div>

</div>
  

</template>

<script>
export default {
   data(){
      return{
         question: null
      }
      
   },
   watch: {
      question(value){
         if(!value.includes('?')) return
      }

   }

}
</script>

<style scoped>

   

</style>