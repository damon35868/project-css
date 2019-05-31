<template>
    <div class="middleTop flex container mx-auto">
        <div class="box-left flex-none mr-8 relative" ref="banner">
            <div class="box-left-btn absolute z-10">
                <img src="../../assets/img/share-arrow-swiper.svg" class="w-5 inline-block mr-2 cursor-pointer">
                <img src="../../assets/img/like-swiper.svg" class="w-5 inline-block mr-2 cursor-pointer">
            </div>
            <div :class="{swiper:fixedState,fixed:fixedState}" :style="{top: fixedTop,width:bannerWidth}" ref="moveEle">  
                 <swiper :options="swiperOption" ref="mySwiper" v-if="list.length!=0">
                <!-- slides -->
                <swiper-slide v-for="(item,key) in list" :key="key">
                    <img :src="item.src" class="w-full">
                </swiper-slide>

                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
           
        </div>

        <div class="box-right flex-1 text-gray-700">
            <div class="box1 relative">
                <div class="btn-box absolute right-0">
                    <span class="p-2 p-2 rounded shadow text-gray-700 text-sm cursor-pointer"><img src="../../assets/img/share-arrow.svg" class="w-4 inline-block mr-2">Share</span>
                    <span class="p-2 p-2 ml-3 rounded shadow text-gray-700 text-sm cursor-pointer"><img src="../../assets/img/like.svg" class="w-4 inline-block mr-2">Save</span>
                </div>
                <p class="text-xs font-semibold">COOKING CLASS</p>
                <h3 class="w-5/6 title text text-5xl font-bold leading-tight mb-2">Learn to Make Handmade Udon Noodles</h3>
                <p class="location text-lg cursor-pointer py-1 md:hover:underline"><img src="../../assets/img/location-sign.svg" class="w-4 inline-block mr-4">Tokyo</p>
                <p class="text-lg text pb-1"><img src="../../assets/img/time.svg" class="w-4 inline-block mr-4">2 hours total</p>
                <p class="text-lg text pb-1"><img src="../../assets/img/marker.svg" class="w-4 inline-block mr-4">Food, Drinks and Equipment</p>
                <p class="text-lg text pb-1"><img src="../../assets/img/speech-bubbles-comment-option.svg" class="w-4 inline-block mr-4">Offered in English and Japanese</p>
            </div>
            
            <div class="box2 py-8 px-2 mt-8 text-gray-700">
                <p class="text-lg"><img src="../../assets/img/award.svg" class="w-6 inline-block mr-4">Over 180 people rated this experience 5 stars.</p>
            </div>

            <div class="box3 py-8 text-gray-700">
                <div class="inline-block w-3/4 align-middle">
                    <h5 class="text-xl mb-4 text-black">About your host</h5>
                    <p class="text-lg">
                        Since living abroad I have always enjoyed teaching Japanese recipes to foreigners, such as udon and tempura, simple dishes which few outside of Japan know how to make. I want to share these traditional recipes with you along with cultural insights into Japan and making sure you enjoy yourself as much as possible. 
                    </p>
                    <p class="text-lg notive">
                        {{textBox3}}
                        <span class="more md:hover:underline cursor-pointer text-lg" v-if="showState3" @click="handleMore('box3')">+ More</span>
                    </p>
                </div>
                <div class="user-info inline-block w-1/4 text-center align-middle">
                    <a href="#" class="user-img"><img src="https://a0.muscache.com/im/pictures/user/f0d6ac90-2b40-438d-bb25-2a3afca24d35.jpg?aki_policy=profile_x_medium" class="w-16 rounded-full mx-auto mb-3"></a>
                    <div class="user">
                        <p>Naoko</p>
                        <a href="#" class="contact md:hover:underline">Contact host</a>
                    </div>
                </div>
            </div>

            <div class="box4 py-8 text-gray-700">
                <div class="w-3/4 align-middle">
                    <h5 class="text-xl mb-4 text-black">What we’ll do</h5>
                    <p class="text-lg">
                        I will teach you to make udon by hand, one of Japan’s most famous noodles, from a traditional recipe. I'll walk you through each step of the udon making process, the way it’s been made for hundreds of years.
                    </p>
                    <br />
                    <p class="text-lg notive">
                        {{textBox4}}
                        <span class="more md:hover:underline cursor-pointer text-lg" v-if="showState4" @click="handleMore('box4')">+ More</span>
                    </p>
                </div>
            </div>

            <div class="box5 py-8 text-gray-700">
                <div class="w-3/4 align-middle">
                    <h5 class="text-xl mb-4 text-black">What else you should know</h5>
                    <p class="text-lg">・Vegans and vegetarians are also very welcome to join.</p>
                    <p class="text-lg">・We can also prepare private prayer space for Muslim people</p>
                </div>
            </div>

            <div class="box6 py-8 text-gray-700">
                <div class="w-3/4 align-middle">
                    <h5 class="text-xl mb-4 text-black">What I’ll provide</h5>
                    <p class="text-lg">Snacks and Other<img src="../../assets/img/food-and-restaurant.svg" class="w-4 inline-block ml-1"></p>
                    <p class="text-lg">Udon and tempura meal. seasonal fruits</p>
                    <p class="text-lg">Vegan and vegetarian options available.</p>
                    <p class="text-lg">Drinks<img src="../../assets/img/drink.svg" class="w-4 inline-block ml-1"></p>
                    <p class="text-lg">Japanese tea</p>
                    <p class="text-lg">Equipment<img src="../../assets/img/backpack.svg" class="w-4 inline-block ml-1"></p>
                    <p class="text-lg">All ingredients and items (apron, towel and tools)</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'middleTop',
    components:{
    },
    data(){
        return {
            swiperOption: {
                //1.5s切换一次
                autoplay: 1500,
                setWrapperSize :true,
                //分页器
                pagination : '.swiper-pagination',
                loop:true,
                //鼠标点击分页器控制Swiper切换
                paginationClickable :true,
                //鼠标滚轮控制Swiper切换
                mousewheelControl : true,
                observeParents:true,
                autoplayDisableOnInteraction:false,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
            },
            list:[
                {'src':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559234889610&di=d09aeff4b3a83a67842ea74b2a5815c8&imgtype=jpg&src=http%3A%2F%2Fplat.renew.sh.cn%2Ffiles%2Fuseruploadfiles%2Fday_130925%2F2013-09-25_145215901.jpg'},
                {'src':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559829647&di=f2bf23d070c9db4448b7b47f5d77fe43&imgtype=jpg&er=1&src=http%3A%2F%2Fb1-q.mafengwo.net%2Fs13%2FM00%2FDA%2F61%2FwKgEaVzGqgSAPuT2AA1oMGHfWPc01.jpeg%3FimageView2%2F2%2Fw%2F600%2Fh%2F600%2Fq%2F90'},
                {'src':'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3882489327,3440733051&fm=26&gp=0.jpg'},  
            ],
            showState3:true,
            showState4:true,
            fixedState:false,
            fixedTop:'',
            textBox3:'From 2013 I have been organizing events showcasing Japanese cuisine to foreign…',
            textBox4:'Apart from just the recipe and preparation techniques, I will teach you how to add Japanese spirit into your udon noodles, to make the dish complete. After making the udon your friendly host…',
            screenWidth: document.body.clientWidth,
            scrollTop:document.documentElement.scrollTop,
            bannerWidth:'',
            clientHeight:'',
            eleWidth:'',
            eleHeight:''
        }
    },
    mounted () {
        const that = this;
        that.bannerWidth = that.$refs.banner.offsetWidth + 'px';
        that.clientHeight = that.$refs.banner.clientHeight;
        that.eleWidth = that.$refs.moveEle.getBoundingClientRect().width;
        that.eleHeight = that.eleWidth * 1.33333333333333;
        window.addEventListener('resize',()=>{
            that.screenWidth = document.body.clientWidth;
            that.bannerWidth = that.$refs.banner.offsetWidth + 'px';
            that.clientHeight = that.$refs.banner.clientHeight;
            that.eleWidth = that.$refs.moveEle.getBoundingClientRect().width;
            that.eleHeight = that.eleWidth * 1.33333333333333;
        });
        window.addEventListener('scroll',()=>{
            that.scrollTop = document.documentElement.scrollTop;
        });
    },
    methods:{
        handleMore (box) {
            switch(box){
                case 'box3': 
                this.showState3 = false;
                this.textBox3 = "From 2013 I have been organizing events showcasing Japanese cuisine to foreign students and people on working holidays living in Japan. Now I am running a restaurant and café in a traditional-style Japanese house in Asakusa, enjoying exchanging cultural differences with foreigners."; 
                break;

                case 'box4': 
                this.showState4 = false;
                this.textBox4 = "Apart from just the recipe and preparation techniques, I will teach you how to add Japanese spirit into your udon noodles, to make the dish complete. After making the udon your friendly host will prepare tempura for you, another hugely popular Japanese dish, which will go perfectly with your handmade udon. Let's create a memorable experience together, helping you to make some of Japan’s most famous dishes and having as much fun as possible in the process!";
                break;
            }
        }
    },
    watch:{
        screenWidth (val) {
            if(val <= 750){
                this.textBox3 = "From 2013 I have been organizing events showcasing Japanese cuisine to foreign students and people on working holidays living in Japan. Now I am running a restaurant and café in a traditional-style Japanese house in Asakusa, enjoying exchanging cultural differences with foreigners."; 
                this.textBox4 = "Apart from just the recipe and preparation techniques, I will teach you how to add Japanese spirit into your udon noodles, to make the dish complete. After making the udon your friendly host will prepare tempura for you, another hugely popular Japanese dish, which will go perfectly with your handmade udon. Let's create a memorable experience together, helping you to make some of Japan’s most famous dishes and having as much fun as possible in the process!";
                this.showState3 = false;
                this.showState4 = false;
            }else{
                this.textBox3 = 'From 2013 I have been organizing events showcasing Japanese cuisine to foreign…';
                this.textBox4 = 'Apart from just the recipe and preparation techniques, I will teach you how to add Japanese spirit into your udon noodles, to make the dish complete. After making the udon your friendly host…';
                this.showState3 = true;
                this.showState4 = true;
            }
        },
        scrollTop (val) {
            let clientTop = this.clientHeight - this.eleHeight;
            if(val >= 43 && val <= clientTop && this.screenWidth > 750){
                this.fixedState = true;
            }else if(val >= clientTop && this.screenWidth > 750){
                  this.fixedTop = -(val - clientTop) + "px";
                  this.fixedState = true;
            }else{
                this.fixedState = this.fixedState ? false : this.fixedState;
            }
        }
    }
}
</script>

<style scope>
    .box-left{
        width: 32.8%;
    }
    .swiper{
        top: 0;
    }
    .swiper-container {
        width: 100%;
    }  
    .swiper-button-prev,
    .swiper-button-next{
        height: 16px!important;
    }
    .box-left-btn{
        top: 0.5em;
        right: 0.5em;
        display: none;
    }
    .box1 .text{
        color: theme('colors.black.200');
    }
    .btn-box span{
        border:1px solid theme('colors.gray.200');
    }
    .box2,
    .box5{
        border-top: 1px solid theme('colors.gray.200');
        border-bottom: 1px solid theme('colors.gray.200');
    }
    .box3{
        border-bottom: 1px solid theme('colors.gray.200');
    }
    .box3 .contact,
    .location,
    .more{
        color: theme('colors.green.100');
    }

    @media (max-width: 767px){
        .middleTop{
            display: block!important;
        }
        .middleTop .btn-box{
            display: none;
        }
        .middleTop .box-left-btn{
            display: block;
        }
        .middleTop .box-left{
            display: block;
            width: 100%;
            margin-right: 0;
        }
        .middleTop .box1{
            margin-top: 1.2em;
        }
        .middleTop .box2 p{
            font-size: 0.9em;
        }
        .box1 .title{
            font-size: 2em;
            width: 100%;
        }
        .middleTop .more{
            display: none;
        }

        .box2 p,
        .box3 p,
        .box4 p,
        .box5 p,
        .box6 p{
            font-size:1em;
        }
        .box3 div:first-child,
        .box3 div:last-child,
        .box4 div,
        .box5 div,
        .box6 div{
            display: block;
            width: 100%;
        }
        .box3 div:last-child{
            margin-top: 1.5em;
            overflow: hidden;
        }
        .box3 div.user-info{
            border: 1px solid theme('colors.gray.200');
            border-radius: 0.6em;
            padding: 1em;
        }
        .box3 div:last-child .user-img{
            float: right;
            margin: 0;
        }
        .box3 div:last-child .user-img img{
            margin: 0;
        }
        .box3 div:last-child .user{
            padding-top: 8px;
            float: left;
            width: 30%;
            text-align: left;
            margin: 0;
        }
    }
</style>