<template>
  <ContentSection title="Technology and Education" :is-last-section="true">
    <p>Community is at the center of all of my work, whether it is through my advocacy education work. Here are a few of the larger community events I have worked with.</p>
    <section>
      <h2>Terre Haute Pride Festival 2023</h2>
      <p>While on the board of the Pride Center of Terre Haute, I helped to put on the 2nd annual Pride Festival in Terre Haute, Indiana. My work for this event included creating graphics for publicity and information about the event, as well as working with community sponsors prior to the event and during the event. During the event, I helped to coordinate our volunteer workers and provided logistical support to vendors throughout the day. </p>
      <div class="image-gallery">
        <img src="@/assets/images/pride-1.jpg" alt="Students at laptop" />
        <img src="@/assets/images/pride-2.jpg" alt="Students running robots at competition table" />
        <img src="@/assets/images/pride-3.jpg" alt="VCPL Mini-bots" />
        <img src="@/assets/images/pride-4.jpg" alt="Man runnin robot at competition table" />
      </div>

    </section>
    <section>
      <h2>LA LGBT Center Volunteering</h2>
      <p> Since moving to Los Angeles, I have begun to volunteer with the LA LGBT Center for their community events. Recent events that I have volunteered for include the Senior Pride Pantry and the Center South Market Days.</p>
      <div class="image-gallery">
        <img src="@/assets/images/center-3.jpg" alt="Erin at LA LGBT Center event" />
        <img src="@/assets/images/center-2.jpeg" alt="Senior Pride Pantry" />
        <img src="@/assets/images/center-1.jpeg" alt="Center South Farmers Market" />
      </div>
    </section>
    <section>
      <h2>T4CS Discord Server</h2>
      <p>One of my favorite projects I have been working on recently is a Discord Server dedicated to trans and gender nonconforming folks who are interested in gaming together. The server started out as a way for a few of my friends to play video games together, but it has blossomed into a wonderful community for trans folks, by trans folks. We are currently working on a website and new community building initiatives like friendly tournaments within th server.</p>
    </section>
  </ContentSection>
</template>

<script setup>
useHead({
  title: 'Community Engagement and Development | Erin',
  meta: [
    { name: 'description', content: 'Highlighting Erin’s commitment to community engagement, showcasing projects that encourage sustainable development and collective action.' }
  ]
})
</script>

<style scoped>
.image-gallery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}

.image-gallery > img {
  width: 23%;
  margin: 0.4rem;
}

@media screen and (max-width: 960px) {
  .image-gallery {
    justify-content: center;
  }
  .image-gallery > img {
    width: 45%;
  }
}

@media screen and (max-width: 600px) {
  .image-gallery > img {
    width: 80%;
  }
}

a {
  color: var(--primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>