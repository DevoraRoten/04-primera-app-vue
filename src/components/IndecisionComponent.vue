<template>
<div>
 <img alt="Vue logo" v-show="!img" src="../assets/logo.png">
 <img :src="img" v-show="img" alt="">
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
         img: null,
         isValidQuestion: false
      }
      
   },
   methods: {
      
      async getAnswer(){
         this.answer= 'Pensando...'
         await fetch('https://yesno.wtf/api')
         .then( async()=>{
            const {answer,image} = await fetch('https://yesno.wtf/api').then(r=>r.json())
            this.answer=answer==="yes"? 'Sí!' : 'No' 
         this.img=image
         })
         
         .catch(e=>{console.log(e)
         this.answer='No se puede cargar el API'
         this.img = null})

         

         
      }
   },
   watch: {
      question(value){
         this.isValidQuestion=false
         console.log({value})
         if(!value.includes('?')) return
         this.isValidQuestion=true
         this.getAnswer()
      }

   }

}
</script>

<style scoped>

   

</style>