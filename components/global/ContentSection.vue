<template>
  <section :class="[useDarkTheme === true ? 'dark' : 'light', isLastSection === true ? 'lastSection' : '']">
    <div class="content">
      <h1>{{title}}</h1>
      <slot></slot>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  useDarkTheme: {
    type: Boolean,
    default: false,
    required: false,
  },
  title: {
    type: String,
    default: "",
    required: false,
  },
  isLastSection: {
    type: Boolean,
    default: false,
    required: false,
  }
});
</script>

<style scoped>
section {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lastSection {
  min-height: calc(100vh - 176px);
}

.dark {
  background-color: var(--dark);
  color: var(--light);
}

.light {
  background-color: var(--light);
  color: var(--dark);
}

.content {
  max-width: 960px;
  width: 98%;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  margin: 1rem 0;
  padding: 0;
}

p {

}
</style>

