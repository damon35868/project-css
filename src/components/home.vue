<template>
    <div class="link-bar">
        <router-link tag="div" to="/twitterPageHome" class="link-twitter">Go twitterPage</router-link>
        <router-link tag="div" to="/airbnbPageHome" class="link-airbnb">Go airbnbPage</router-link>
    </div>
</template>

<style scoped>
.link-bar{
  position: absolute;;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.link-twitter{
  cursor: pointer;
  border: 2px solid theme('colors.blue.100');
  color: theme('colors.blue.100');
  padding: 0.5em;
  margin-bottom: 1.5em;
  font-size: 2.6em;
  border-radius: 1.2em;
  transition: 0.6s all;
}
.link-airbnb{
  cursor: pointer;
  border: 2px solid theme('colors.blue.100');
  color: theme('colors.blue.100');
  padding: 0.5em;
  margin-top: 1.5em;
  font-size: 2.6em;
  border-radius: 1.2em;
  transition: 0.6s all;
}
.link-twitter:hover,
.link-airbnb:hover{
  color: theme('colors.white.100');
  background-color: theme('colors.blue.100');
}
</style>
