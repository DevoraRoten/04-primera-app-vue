<template>
<div>
<h2>Desde el primer componente</h2>
<h3> Counter</h3>
<h3>{{counter}} <sup>2</sup>= {{ squareCounter }}</h3>

<div>
    <button v-on:click="increment()"> +1</button>
    <button v-on:click="decrement()">-1</button>
</div>


</div>

  
</template>

<script>
export default {
    data() {
        return {
            counter: 5

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
        } 
    }
 
}
</script>

<style>
button{
    background-color:blueviolet;
    padding: 5px;
    margin: 3px;
}
button:hover{
    background-color: blue;
    transition-duration: 3ms;
}

</style>