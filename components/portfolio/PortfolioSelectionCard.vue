<template>
  <div class="card" :style="backgroundStyle" @click="goTo()">
    <div class="content">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <p class="copy">{{copy}}</p>
      <NuxtLink class="btn" :to="buttonLinkTo">{{buttonText}}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: false,
  },
  copy: {
    type: String,
    default: "",
    required: false,
  },
  buttonText: {
    type: String,
    default: "",
    required: false,
  },
  buttonLinkTo: {
    type: String,
    default: "/",
    required: false,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  linkTo: {
    type: String,
    required: true,
  },
});

const backgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${props.backgroundImage})`
  };
});

const goTo = () => {
  navigateTo(props.linkTo);
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 500px;
  max-width: 310px;
  color: var(--light);
  background-color: var(--dark);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transition: background-size 700ms ease-in-out;
  margin: 0.5rem;
  cursor: pointer;
}

.content {
  transform: translateY(calc(100% - 5rem));
  transition: 700ms cubic-bezier(.52,.08,.56,.91);
  background-color: rgba(0, 0, 0, 0);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  background-size: auto 110%;
}

.card:hover > .content {
  transform: translateY(0);
  background-color: rgba(0, 0, 0, 0.7);
}

.card:hover > .content > .copy {
  opacity: 1;
}

.copy {
  opacity: 0;
  transition: 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  padding: 0 0.6rem;
  text-align: justify;
}

.title {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem 0;
  margin: 0;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
}

.btn {
  background-color: var(--primary);
  color: var(--light);
  padding: 1rem;
  text-decoration: none;
  transition: 300ms ease-in-out;
}

.btn:hover {
  transform: scale(1.1);
}

</style>