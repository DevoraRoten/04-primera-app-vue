<template>
<div>
<h3 >{{ customTitle}}</h3>
<h3>{{ counter }} <sup>2</sup>= {{ squareCounter }}</h3>

<div class="buttonContainer">
    <button @click="increment()"> +1</button>
    <button @click="decrement()">-1</button>
</div>


</div>

  
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 15,
            //requerid: true
            validator(value){
                return value >=0

            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        }

    },
    computed: {
        squareCounter(){
            return this.counter*this.counter
        },
        customTitle(){
            return this.title || 'Counter'
        }
    }
 
}
</script>

<style>
button{
    background-color:rgb(5, 151, 66);
    border-radius: 3px;
    border: transparent;
    margin: 3px;
    padding: 5px;
}
button:hover{
    background-color: rgb(34, 226, 114);
    transition-duration: 3ms;
}

</style>