<template>
  <div>
    <img src="../assets/pngimg.com-google_PNG19644.png" alt="">
    <input type="text" v-model="x" @keypress.enter="suchen()"> 
    
  </div>
</template>

<script>
export default {
data() {
    return {
        x :''
    }
},
methods: {
    suchen(){
        if( x = 'wer die beste freundin der welt' ){
            print('Ist Emma')
        }
    }
},
}
</script>

<style>

</style>