<template>
    <div class="middleFooter flex container mx-auto mt-16">
        <div class="box-left flex-none mr-8">
            <h2 class="text-3xl font-bold text-gray-700">Guest photos</h2>
        </div>
        <div class="box-right flex-1">
            <div class="img-div overflow-hidden mb-5 flex flex-wrap">
                <div v-for="(item,key) in list" :key="key" class="cursor-pointer relative" ref="imgDiv" :style="{height:imgWidth}">
                    <!-- <img :src="item.src" class="img-box w-full absolute top-0 right-0 left-0 right-0 object-cover"> -->
                    <img :src="item.src" class="img-box object-cover absolute h-full">
                </div>
            </div>
            <a href="#" class="show font-semibold md:hover:underline">Show all photos</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'middleFooter',
    data(){
        return {
            showState:true,
            list:[
                {"src":"https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1451&q=80"},
                {"src":"https://images.unsplash.com/photo-1558942594-272eab34c8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
                {"src":"https://images.unsplash.com/photo-1558917957-3b1012e5971d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"},
                {"src":"https://images.unsplash.com/photo-1542556398-9e1da7ad3669?ixlib=rb-1.2.1&auto=format&fit=crop&w=1526&q=80"},
                {"src":"https://images.unsplash.com/photo-1558934815-bae25159884a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},
                {"src":"https://images.unsplash.com/photo-1548408502-660566103b2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1948&q=80"}
            ],
            imgWidth: ''
        }
    },
    mounted () {
        const than = this;
        //四舍五入版
        // than.imgWidth = than.$refs.imgDiv[0].offsetWidth + 'px';
        //精准版
        than.imgWidth = than.$refs.imgDiv[0].getBoundingClientRect().width + 'px';
        window.addEventListener('resize',()=>{
            than.imgWidth = than.$refs.imgDiv[0].getBoundingClientRect().width + 'px';
        });
    }
}
</script>

<style scope>
    .box-left{
        width: 32.8%;
    }
    .show{
        color: theme('colors.green.100');
    }
    .img-div div{
        width: calc(100% / 3 - 1em);
        margin: 0.5em;
    }
    .img-div div:nth-child(1),
    .img-div div:nth-child(4){
        margin-left: 0;
    }

    @media (max-width: 767px){
        .middleFooter{
            display: block!important;
        }
        .middleFooter .box-left{
            width: 100%;
            margin-bottom: 1.2em;
        }
        .middleFooter .box-right{
            padding-bottom: 1.2em;
        }
        .img-div div:nth-child(1),
        .img-div div:nth-child(4){
            margin: 0.5em;
        }
        .img-div div:nth-child(odd){
            margin-left: 0;
        }
        .img-div div{
            width: calc(100% / 2 - 1em);
        }
    }
</style>