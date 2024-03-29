<template>
  <button @click="toggle" class="hamburger-button" aria-controls="navbar-dropdown" aria-expanded="false">
    <svg viewBox="0 0 100 100" width="40" height="40">
      <rect width="80" height="10" x="10" y="25" rx="5" :class="[ isActive ? 'active' : 'inactive', isActive ? 'top' : '']"></rect>
      <rect width="80" height="10" x="10" y="45" rx="5" :class="[ isActive ? 'active' : 'inactive', isActive ? 'middle' : '']"></rect>
      <rect width="80" height="10" x="10" y="65" rx="5" :class="[ isActive ? 'active' : 'inactive', isActive ? 'bottom' : '']"></rect>
    </svg>
  </button>
</template>

<script setup>
const isActive = ref(null);

const toggle = () => {
  isActive.value = !isActive.value;
}
</script>

<style scoped>
button {
  background: transparent;
  border-radius: 0.3rem;
  border: 2px solid var(--light);
  cursor: pointer;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

rect {
  fill: var(--light);
}

.active {
  transition:
      transform 300ms ease-in,
      rotate 300ms ease-in 300ms,
      opacity 0ms 300ms
;
  transform-origin: center;
}

.inactive {
  transition:
      transform 300ms ease-in 300ms,
      rotate 300ms ease-in 0ms,
      opacity 0ms 300ms
;
  transform-origin: center;
}

.top{
  transform: translateY(20px);
  rotate: 45deg;
}

.bottom {
  rotate: -45deg;
  transform: translateY(-20px);
}

.middle {
  opacity: 0;
}
</style>