<template>
    <div class="editPage container mx-auto p-4 flex">
        <div class="box-left mr-3 px-2">
            <ul class="text-base">
                <li class="mb-2"><a href="#" class="font-bold active">Edit Profile</a></li>
                <li class="mb-2"><a href="#" class="text-gray">Photos</a></li>
                <li class="mb-2"><a href="#" class="text-gray">Trust and Verification</a></li>
                <li class="mb-2"><a href="#" class="text-gray">Reviews</a></li>
                <li class="mb-2"><a href="#" class="text-gray">References</a></li>
            </ul>
            <a href="#" class="btn mt-6 block text-center p-1 rounded text-sm font-bold">View Profile</a>
        </div>

        <div class="box-right flex-1">
            <div class="box-1">
                <div class="title px-4 py-2">
                    <h3>Required</h3>
                </div>

               <div class="form text-sm p-5">
                   <div class="input-item flex mb-6">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <label for="firstName">First Name</label>
                        </div>
                        <div class="input-box flex-1">
                            <input type="text" placeholder="First Name" id="firstName" class="w-full pl-3 rounded-sm">
                        </div>
                   </div>

                   <div class="input-item flex">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <label for="lastName">Last Name</label>
                        </div>
                        <div class="flex-1">
                            <div class="input-box">
                                <input type="text" placeholder="Last Name" id="lastName" class="w-full pl-3 rounded-sm">
                            </div>
                            <p class="text-box leading-normal py-2 text-gray mb-3">Your public profile only shows your first name. When you request a booking, your host will see your first and last name.</p>
                        </div>
                   </div>

                   <div class="input-item flex mb-6">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <label for="emailAddress">Email Address</label><span class="iconfont icon-suoding ml-1" title="Private"></span>
                        </div>
                        <div class="input-box flex-1">
                            <input type="text" placeholder="Email Address " id="emailAddress" class="w-full pl-3 rounded-sm">
                        </div>
                   </div>

                    <div class="input-item flex mb-6">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <label for="phoneNumber">Phone Number</label><span class="iconfont icon-suoding ml-1" title="Private"></span>
                        </div>
                        <div class="flex-1">
                            <div v-if="phoneNumberState">
                                <div class="input-box phoneNumber-box flex">
                                    <span class="phoneNumber px-3 inline-block w-1/3 font-bold">+86 *** **** 1745</span>
                                    <span class="inline-block px-3 flex-1"><span class="iconfont icon-gou mr-1"></span>Confirmed</span>
                                </div>
                                <span class="iconfont icon-bianji3 mr-1"></span><span href="#" class="md:hover:underline cursor-pointer" @click="phoneNumberState=!phoneNumberState">Edit phone number</span>
                            </div>
                            <transition name="fade">
                                <div class="editNumber w-4/6 p-4" v-if="!phoneNumberState">
                                    <div class="item-input mb-2">
                                        <div>
                                            <label for="location">Choose a country:</label>
                                        </div>
                                        <div class="countryInput">
                                            <select id="location" class="w-full p-2">
                                                <option value="">China</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="item-input">
                                        <div>
                                            <label for="addNumber">Add a phone number:</label>
                                        </div>
                                        <div class="addressInput flex">
                                            <span class="phoneNumberTitle w-12 text-center">+86</span><input type="text" id="addNumber" class="flex-1 px-2">
                                        </div>
                                    </div>
                                    <div class="mt-1">
                                        <button class="verifyBtn px-5 rounded text-sm font-bold text-white">Verify via SMS</button>
                                        <a href="#" class="block">Why Verify?</a>
                                    </div>
                                </div>
                            </transition>
                            
                            <p class="text-box leading-normal py-2 text-gray mt-1">This is only shared once you have a confirmed booking with another Airbnb user. This is how we can all get in touch.</p>
                        </div>
                   </div>

                    <div class="input-item flex">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <label for="describeYourself">Describe Yourself</label>
                        </div>
                        <div class="input-textarea flex-1">
                            <textarea id="describeYourself" class="w-full pl-3 rounded-sm h-48"></textarea>
                        </div>
                   </div>
               </div>
            </div>

            <div class="box-2 mt-6">
                <div class="title px-4 py-2">
                    <h3>Optional</h3>
                </div>

               <div class="form text-sm p-5">
                   <div class="input-item flex">
                        <div class="input-label mr-3 w-1/4 text-right">
                            <span>Shipping Address</span><span class="iconfont icon-suoding ml-1" title="Private"></span>
                        </div>
                        <div class="flex-1">
                            <div class="input-box">
                                <span class="iconfont icon-tianjia"></span><span class=" addAddress md:hover:underline cursor-pointer" @click="addressState=!addressState">Add shipping address</span>
                            </div>
                            <div class="shippingAddress p-4 mt-4" v-if="addressState">
                                <div class="item-input mb-2">
                                    <div>
                                        <label for="country">Country</label>
                                    </div>
                                    <div>
                                        <select id="country" class="w-3/6 p-2">
                                            <option value="">China</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="item-input mb-2">
                                    <div class="flex">
                                        <label for="address1" class="w-7/12">Address Line 1</label>
                                        <label for="address2" class="flex-1 ml-3">Address Line 2</label>
                                    </div>
                                    <div class="addressInput flex">
                                        <input type="text" id="address1" class="w-7/12 px-2">
                                        <input type="text" id="address2" class="ml-3 flex-1 px-2">
                                    </div>
                                </div>

                                <div class="item-input mb-2">
                                    <div>
                                        <label for="City">City / Town / District</label>
                                    </div>
                                    <div class="addressInput">
                                        <input type="text" id="City" class="w-full px-2">
                                    </div>
                                </div>

                                <div class="item-input mb-2">
                                    <div>
                                        <label for="State">State / Province / County / Region</label>
                                    </div>
                                    <div class="addressInput">
                                        <input type="text" id="State" class="w-full px-2">
                                    </div>
                                </div>

                                <div class="item-input mb-2">
                                    <div>
                                        <label for="zip">ZIP / Postal Code</label>
                                    </div>
                                    <div class="addressInput">
                                        <input type="text" id="zip" class="w-full px-2">
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <button class="saveBtn px-6 py-1 rounded text-base font-bold text-white">Save</button>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'editPage',
    data(){
        return {
            addressState:false,
            phoneNumberState:true
        }
    }
}
</script>

<style scoped>
    .box-left{
        width: 25%;
    }
    .box-left .btn{
        border: 1px solid theme('colors.gray.700');
    }
    .box-left .text-gray,
    .box-right .text-gray{
        color: theme('colors.gray.300');
    }
    .box-left .text-gray:hover{
        color: theme('colors.gray.400');
    }
    .box-left .active{
        color: theme('colors.black.200');
    }
    .box-right .title{
        background-color: theme('colors.gray.500');
        border-bottom: 1px solid theme('colors.gray.600');
    }
    .box-right .box-1,
    .box-right .box-2{
        border: 1px solid theme('colors.gray.600');
    }
    .box-right .form .input-item{
        line-height: 2.5em;
        color: theme('colors.black.200');
    }
    .box-right .form .input-label,
    .box-right .form .editNumber{
        color: theme('colors.black.200');
    }
    .box-right .form .editNumber .countryInput, 
    .box-right .form .editNumber .addressInput{
        height: 2.5em;
        line-height: 2.5em;
    }
    .box-right .form .input-box{
        height: 2.5em;
    }
    .box-right .form .phoneNumber{
        border-right: 1px solid theme('colors.gray.800');
        background-color: theme('colors.gray.500');
    }
    .box-right .form .phoneNumber-box{
        border: 1px solid theme('colors.gray.800');
    }
    .box-right .form .input-box input,
    .box-right .form .input-textarea textarea,
    .box-right .form .editNumber,
    .box-right .form .editNumber input,
    .box-right .form .editNumber .phoneNumberTitle{
        border: 1px solid theme('colors.black.300');
    }
    .box-right .form .editNumber .phoneNumberTitle{
        border-right: 0;
        line-height: 2.5em;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 0.5s;
    }
    .fade-enter, .fade-leave-to {
        transform: translateY(-1.5em);
    }

    .box-right .form .addAddress{
        color: theme('colors.green.200');
    }
    .box-right .form .shippingAddress{
        border: 1px solid theme('colors.black.400');
        color: theme('colors.black.200');
    }
    .box-right .form .shippingAddress #country,
    .box-right .form .editNumber #location,
    .box-right .form .shippingAddress .addressInput input{
        border: 1px solid theme('colors.black.300');
    }
    .box-right .form .verifyBtn,
    .box-right .form .shippingAddress .saveBtn{
        background-color: theme('colors.red.100');
    }

    @media (min-width: 1600px) {
        .container {
            max-width: 1080px!important;
        }
    }
    @media (min-width: 1280px){
        .container {
            max-width: 1080px!important;
        }
    }

    @media (max-width:1023px){
        .container .box-right .box-1 .form .editNumber{
            width: 100%!important;
        }
        .container .box-right .box-1 .form .phoneNumber{
            width: 50%!important;
        }
    }
    @media (max-width:768px){
        .editPage{
            display: block!important;
            max-width: 100%!important;
        }
        .container .box-left,
        .container .box-right{
            display: block;
            width: 100%;
        }
        .container .box-left{
            margin-bottom: 2em;
        }
    }
</style>