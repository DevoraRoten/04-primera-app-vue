<template>
<div>
 <img alt="Vue logo" v-show="!url" src="../assets/logo.png">
 <img :src="url" v-show="url" alt="">
   <div class="bg-dark"></div>

   <div class="indecision-conainer">
      <input type="text" v-model="question" placeholder="Hazme una pregunta">
      <p>Recuerda  terminar con un signo de interrogacion (?)</p>
   </div>

   <div>
      <h2 v-show="isValidQuestion">{{question}}</h2>
      <h1 v-show="isValidQuestion">{{ answer}}</h1>
   </div>

</div>
  

</template>

<script>
export default {
   data(){
      return{
         question: null,
         answer: null,
         url: null,
         isValidQuestion: false
      }
      
   },
   methods: {
      async getAnswer(){
         this.answer= 'Pensando...'
         const {answer,image} = await fetch('https://yesno.wtf/api').then(r=>r.json())
         console.log(answer)
         this.answer=answer==="yes"? 'Sí!' : 'No' 
         this.url=image

         
      }
   },
   watch: {
      question(value){
         this.isValidQuestion=false
         if(!value.includes('?')) return
         this.isValidQuestion=true
         this.getAnswer()
      }

   }

}
</script>

<style scoped>

   

</style>