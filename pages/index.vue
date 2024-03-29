<template>
  <div class="page-1">
    <div class="site-banner">
    </div>
    <h1>Erin Mutchler</h1>
    <h2>
      Bridging worlds through innovation, advocacy, and artistry.
    </h2>
  </div>

  <ContentSection :use-dark-theme="true" title="My Story" :is-last-section="true">
    <ContentDoc path="about" />
  </ContentSection>
</template>

<script setup>
useHead({
  title: 'About Me | Erin - Tech, Policy, and Community Advocate',
  meta: [
    { name: 'description', content: 'Learn about Erin, a dedicated professional at the intersection of technology, policy analysis, and community advocacy, committed to driving social change and fostering inclusivity.' }
  ]
});
</script>

<style scoped>
.page-1 {
  min-height: calc(100vh - 80px);
}
.site-banner {
  width: 100vw;
  max-width: 100%;
  height: calc(50vh + 10vw);
  overflow: hidden;
  background-image: url('@/assets/images/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
}

h1 {
  color: var(--primary);
  font-size: max(6vw, 3.4rem);
  font-weight: 500;
  margin: 1rem 0 0 6%;
  text-transform: uppercase;
  user-select: none;
}

h2 {
  color: var(--primary);
  font-size: max(3vw, 1.4rem);
  font-weight: 500;
  margin: 0.6rem 0 0 15%;
  user-select: none;
}

@media screen and (min-width: 1400px){
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 3rem;
  }
}
</style>