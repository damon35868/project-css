<template>
    <div class="middle container mx-auto py-40 px-10">
        <p class="text text-5xl font-bold text-center text-white">It’s easy. Just press the button.</p>
        <button class="btn mt-6 text-2xl rounded-full py-1 px-5 bg-white font-bold mx-auto hover:bg-blue-200">Explore Mores</button>
    </div>
</template>

<script>
export default {
    name:"middle"
}
</script>

<style scoped>
    .middle{
        background-color: theme('colors.blue.100');
    }
    .btn{
        display: block;
        color: theme('colors.blue.100');
        transition: 0.6s all;
        outline: none;
        border: 1px solid theme('colors.white.100');
    }
    
    @media (max-width: 767px){
        .text{
            font-size: 2.2em;
        }
        .btn{
            font-size: 1em;
        }
    }
</style>
