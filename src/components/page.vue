<template>
    <div class="page">
        <div class="container mx-auto">
            <!-- box1 -->
            <div class="content-box flex py-24">
                <div class="text-box flex-1 px-8">
                    <div class="alignY-Box">
                        <p class="title font-bold text-4xl">Getting started is easy</p>
                        <div class="border-bottom w-32 h-2 mt-3"></div>
                        <p class="text w-3/5 font-normal leading-loose py-8 text-base text-gray-600">
                            Find a bunch of things you love. And then find people to follow. That’s all you need to do to see
                            and talk about what’s happening. Congratulations! You’ve just mastered Twitter. So let’s get
                            started.
                        </p>
                    </div>  
                </div>
                <div class="flex-1">
                    <img src="../assets/img1.jpg" class="img-box w-9/12">
                </div>
            </div>

            <!-- box2 -->
            <div class="content-box flex py-24">
                <div class="flex-1">
                    <img src="../assets/img2.jpg" class="img-box w-9/12">
                </div>

                <div class="text-box text-box-2 flex-1 px-8">
                    <div class="alignY-Box">
                        <svg class="c60__icon m-6" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 84 84">
                            <circle cx="36.84" cy="36.66" r="25.5" style="fill: #1da1f2"></circle>
                            <path d="M83.2,74.51,67.91,59.22a37,37,0,1,0-8.69,8.69L74.51,83.2a6.15,6.15,0,0,0,8.69-8.69Zm-45.32-12A24.59,24.59,0,1,1,62.46,37.88,24.61,24.61,0,0,1,37.88,62.46Z" transform="translate(-1 -1)" style="fill: #1da1f2"></path>
                            <g class="c60__full-eye">
                                <circle cx="36.94" cy="36.91" r="24.75" style="fill: #fff"></circle>
                            </g>
                        </svg>
                        <p class="title font-bold text-4xl">See what’s happening</p>
                        <div class="border-bottom w-32 h-2 mt-3"></div>
                        <div class="text w-3/5 font-normal leading-loose py-8 text-gray-600">
                            <p class="pl-5 text-base"><span></span> Find out what topics and hashtags are trending</p> 
                            <p class="pl-5 text-base"><span></span> Discover curated stories showcasing the very best of today’sbiggest events</p> 
                            <p class="pl-5 text-base"><span></span> Dive into headlines and videos in real time</p>                      
                        </div>
                    </div>  
                </div>
            </div>

            <!-- box3 -->
            <div class="content-box flex py-24">
                <div class="text-box flex-1 px-8">
                    <div class="alignY-Box">
                        <svg class="c60__icon m-6" xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 107 89">
                            <g class="c60__house-fill">
                                <path d="M97.48,27.09,55.56,4.46a4.15,4.15,0,0,0-3.94,0L9.72,27.09a4.15,4.15,0,1,0,3.94,7.3l3-1.65,6.6,46.67c.89,5,5.42,8.55,11,8.55H72.85c5.6,0,10.14-3.52,11-8.66l6.59-46.56,3.06,1.65a4.15,4.15,0,1,0,3.94-7.3ZM53.59,60.62A13.48,13.48,0,1,1,67.07,47.14,13.48,13.48,0,0,1,53.59,60.62Z" style="fill: #1da1f2"></path>
                                <circle cx="53" cy="47" r="14" style="fill: #fff"></circle>
                            </g>
                        </svg>
                        <p class="title font-bold text-4xl">Follow your interests</p>
                        <div class="border-bottom w-32 h-2 mt-3"></div>
                        <div class="text w-3/5 font-normal leading-loose py-8 text-gray-600">
                            <p class="pl-5 text-base"><span></span>Find out about breaking news, entertainment, sports, politics, and everyday interests</p>   
                            <p class="pl-5 text-base"><span></span>Share photos, videos, GIFs, memes and more</p> 
                        </div>
                    </div>  
                </div>
                <div class="flex-1">
                    <img src="../assets/img3.jpg" class="img-box w-4/5">
                </div>
            </div>
            
            
        </div>
    </div>
</template>



<script>

export default {
    name: "page"
}
</script>

<style scoped>

    /* 
        Font Size https://tailwindcss.com/docs/font-size/#app 
        
        width: 100% ref: https://tailwindcss.com/docs/width  .w-screen and .w-full

    */

    .alignY-Box{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
    .img-box{
        height: auto;
        margin: auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        min-width: 460px;
    }

    /* border-bottom-with-background-color-1da1f2 */
    .border-bottom {
        background-color: theme('colors.blue.100');
    }

    /* P 最好不要Before */
    div.text P span{
        width: 0.45em;
        height:0.45em;
        position: absolute;
        display: block;
        background-color: theme('colors.blue.100');
        margin-right: 18px;
        left: 0;
        top: 12px;
    }
    div.text p {
        position: relative;
    }
    .content-box{
        border-bottom: 1px solid #ccc;
    }
    .text-box{
        min-width: 460px;
    }

    /* 响应式 */
    @media (max-width: 767px){
        .content-box{
            display: block;
            height: auto;
            padding-top: 4em;
            border-bottom: 1px solid #ccc;
        }
        .text{
            width: 100%;
        }
        div.text P{
            width: 100%;
         }
        .text-box{
            display: block;
            padding: 0;
            width: 100%;
            margin-bottom: 3.2em;
        }
        /* 
            md:mt-3
            https://tailwindcss.com/docs/margin/#app
         */

        .text-box-2{
            margin-bottom: 0;
            margin-top: 3.2em;
        }
        .img-box{
            display: block;
            top: 0;
            transform: translateY(0);
            width: 100%;
        }
        .alignY-Box{
            top: 0;
            transform: translateY(0);
            padding: 0 1.3em;
        }
        .c60__icon{
            margin: auto;
            height: 50px;
            width: 50px;
            margin-bottom: 1.2em;
        }
    }
</style>
