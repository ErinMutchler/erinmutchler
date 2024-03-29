<template>
  <ContentSection title="My Work" :is-last-section="true">
    <div class="card-container">
      <PortfolioSelectionCard title="Policy Analysis and Advocacy"
                        copy="Driving change through informed policy, I delve into the heart of societal issues, advocating for initiatives that aim to uplift and empower. My analytical approach towards public affairs is designed to navigate complex issues with strategic thinking and evidence-based solutions, promoting justice and equity at every level of society."
                        button-text="Learn more"
                        button-link-to="/portfolio/policy"
                        :background-image="card1" link-to="/portfolio/policy"/>
      <PortfolioSelectionCard title="Technology and Education"
                        copy="With a belief in the transformative power of technology, I focus on bridging the digital divide and fostering innovation. Through educational programs and resource development, I aim to unlock the potential of technology as a tool for personal and communal growth, ensuring that the benefits of our digital age are accessible to all."
                        button-text="Learn more"
                        button-link-to="/portfolio/technology"
                        :background-image="card2" link-to="/portfolio/technology" />
      <PortfolioSelectionCard title="Community Engagement and Development"
                        copy="At the core of my work lies a commitment to community building. By facilitating collaborative projects and engaging in grassroots initiatives, I strive to strengthen the fabric of community life. My efforts are geared towards creating sustainable, inclusive spaces where every voice is heard and every member has the opportunity to thrive."
                        button-text="Learn more"
                        button-link-to="/portfolio/community"
                        :background-image="card3" link-to="/portfolio/community" />
    </div>
  </ContentSection>
</template>

<script setup>
import card1local from '/public/card1.png';
import card2local from '/public/card2.png';
import card3local from '/public/card3.png';


const card1 = ref(card1local);
const card2 = ref(card2local);
const card3 = ref(card3local);

useHead({
  title: 'Portfolio | Erin - Projects in Policy, Technology, and Community',
  meta: [
    { name: 'description', content: 'Explore Erin’s portfolio, featuring projects in policy analysis and advocacy, technology integration in education, and initiatives for community engagement and development.' }
  ]
})
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 960px) {
  .card-container {
    flex-direction: column;
    align-items: center;

  }
}
</style>