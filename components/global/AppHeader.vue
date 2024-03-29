<template>
  <header>
    <HamburgerIcon @click="expanded = !expanded" v-show="desktopWindow===false"></HamburgerIcon>

    <nav v-if="desktopWindow || expanded === true" :class="[desktopWindow === true ? '' : 'mobile']">
      <NavLink to="/">About</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  </header>

  <div class="spacer"></div>
</template>

<script setup>
const desktopWindow = ref(null);
const expanded = ref(null);

const windowWidth = ref(process.client ? window.innerWidth : 0);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
  desktopWindow.value = windowWidth.value > 940;
};

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
  updateWindowWidth();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>
header {
  background-color: var(--primary);
  box-sizing: border-box;
  min-height: 88px;
  padding: 1rem;
  position: fixed;
  width: 100%;
}

nav {
  display: flex;
  justify-content: center;
  max-width: 960px;
  margin: auto;
}

.spacer {
  height: 80px;
  background-color: var(--primary);
}

.mobile {
  flex-direction: column;
  align-items: center;
}
</style>