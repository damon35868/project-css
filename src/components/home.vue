<template>
    <div class="link-bar">
        <router-link tag="div" to="/twitterPageHome" class="link-twitter text-center">Go twitterPage</router-link>
        <router-link tag="div" to="/airbnbPageHome" class="link-airbnb text-center my-5">Go airbnbPage</router-link>
        <router-link tag="div" to="/editPage" class="link-editPage text-center">Go airbnbEditPage</router-link>
    </div>
</template>

<style scoped>
.link-bar{
  position: absolute;;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.link-twitter,
.link-airbnb,
.link-editPage{
  cursor: pointer;
  border: 2px solid theme('colors.blue.100');
  color: theme('colors.blue.100');
  padding: 0.5em;
  font-size: 2.6em;
  border-radius: 1.2em;
  transition: 0.6s all;
}
.link-twitter:hover,
.link-airbnb:hover,
.link-editPage:hover{
  color: theme('colors.white.100');
  background-color: theme('colors.blue.100');
}

@media (max-width: 800px) {
    .link-twitter,
    .link-airbnb,
    .link-editPage{
      font-size: 1.5em;
    }
}
</style>
