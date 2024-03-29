<template>
  <ContentSection title="Contact Me" :is-last-section="true" :use-dark-theme="true">
    <div class="container">

      <div class="contact-text">
        If you are interested in working with me on a project, feel free to contact me via email or phone below. Check out my social media links as well to keep up to date with any projects I am currently working on!
      </div>
      <div class="contact-section">
        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
          <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
        </svg>

        <span>(812) 251-4425</span>
      </div>
      <div class="contact-section">

        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg>
        <span>mutchler@iu.edu</span>
      </div>
    </div>

  </ContentSection>
</template>

<script setup>
useHead({
  title: 'Contact | Erin',
  meta: [
    { name: 'description', content: 'Connect with Erin for collaboration opportunities in policy advocacy, technology for education, or community development projects.' }
  ],
  bodyAttrs: {
    class: 'contact-page'
  }
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

svg {
  fill: var(--light);
  margin-right: 2rem;
}

.contact-text {
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 2rem 0;
}

.contact-section {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.6rem;
  margin: 1rem 0;
}
</style>