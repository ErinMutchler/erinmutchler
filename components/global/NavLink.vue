<template>
  <NuxtLink :to="to" class="nav-link"><slot/></NuxtLink>
</template>

<script setup>
defineProps({
  to: {
    required: true,
    type: String,
  }
});
</script>

<style scoped>
.nav-link {
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.4rem;
  color: var(--light);
  transition: 2ms;
  letter-spacing: 0.15em;
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}


.nav-link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: var(--light);
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav-link:hover:after {
  width: 100%;
  left: 0;
}
</style>