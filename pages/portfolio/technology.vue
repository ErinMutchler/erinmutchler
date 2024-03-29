<template>
  <ContentSection title="Technology and Education" :is-last-section="true">
    <p>Here are a few of my favorite technology projects I have worked on over the past few years. While most of these are designed for the Vigo County Public Library specifically, they can be implemented into any organization. Feel free to reach out to me regarding any of the projects as they are all open source and I am always willing to help my projects reach more people!</p>
    <section>
      <h2>Vigo Robotics</h2>
      <p>Vigo Robotics is a robotics platform fully designed by myself while working at the Vigo County Public Library.
        The platform includes the physical robots as well as a <a href="https://vigo-robotics.web.app"> web-based tool </a> for programming them. The purpose of this
        program was to create a robotics platform which would cater to a wide range of audiences with diverse skill
        levels. The robots themselves are prebuilt with ports for adding on new sensors and actuators,
        allowing students to explore beyond their pre-configured chassis. The <a href="https://vigo-robotics.web.app"> web-based IDE </a>a allows users to program in either Google's Blockly using pre-defined blocks designed for these robots or program in Circuit Python. This gives users a natural transition from block programming to text proramming.</p>
      <div class="image-gallery">
        <img src="@/assets/images/robotics-1.jpg" alt="Students at laptop" />
        <img src="@/assets/images/robotics-2.jpg" alt="Students running robots at competition table" />
        <img src="@/assets/images/robotics-3.jpg" alt="VCPL Mini-bots" />
        <img src="@/assets/images/robotics-4.jpg" alt="Man runnin robot at competition table" />
      </div>

    </section>
    <section>
      <h2>DIY Stylaphone</h2>
      <p>The DIY Stylaphone is a PCB (Printed Circuit Board) project I designed to teach library patrons how to solder electronics as well as the basics of analog electronics. These boards have only the bare minimum of components required for them to operate, allowing students to dip their toes into soldering without an overwhelming amount of soldering to do. Plus, at the end of the project, students walk away with a fun musical instrument they can play with each other! Each board was designed to be as cheap as possible to make it as accessible as possible. If you are interested in designing your own stylaphone but don't want to order bulk PCB's or electronic components, feel free to contact me and I will send you all of the components required with instructions included.  </p>
      <div class="image-gallery">
        <img src="@/assets/images/soldering-1.jpg" alt="Students holding stylaphone" />
        <img src="@/assets/images/soldering-2.jpg" alt="Mother with child holding stylaphone" />
        <img src="@/assets/images/soldering-3.jpg" alt="Woman holding stylaphone" />
        <img src="@/assets/images/soldering-4.jpg" alt="Family holding their stylaphones" />
      </div>
    </section>
    <section>
      <h2>Daniela Rus Botball Team 2023</h2>
      <p> From as early an age as I can remember, I was competing in robotics competitions like Botball. This past year I transitioned from my former role as a competitor to a coach. I, alongside my dad and former coach, took a team of young Botball participants to the Greater St. Louis Regional Botball Tournament where the team placed first in the seeding round, second place in the double elimination round, and second place overall. Alongside these overall awards, the team won the awards for Outstanding Documentation and Outstanding Programming. I am so proud of the work these bright young students did throughout the season and I look forward to coaching again in the future! </p>
      <div class="image-gallery">
        <img src="@/assets/images/botball-1.jpg" alt="Students holding stylaphone" style="width: 48%;" />
        <img src="@/assets/images/botball-2.jpg" alt="Mother with child holding stylaphone" style="width: 48%;" />
      </div>
      <video controls>
        <source src="@/assets/images/botball-1.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </section>
    <section>
      <h2>Green Thumb Tech</h2>
      <p>Green Thumb Tech is a series of programs I offered at the Vigo County Public Library. These programs were designed to teach library patrons how to utilize technology within their gardens. The core concept was focused on using an array of sensors such as soil moisture sensors, temperature sensors, and humidity sensors to notify you about the status of your plants. For this project, we used the Raspberry Pi Pico W as an affordable wifi-enabled microcontroller and used the free credits from the service, Twilio, to send SMS messages to participants phones with updates. </p>
    </section>
    <section>
      <h2>Intro to 3D Printing</h2>
      <p>One of the most frequent programs I would host at the Vigo County Public Library was Intro to 3D printing. We had so many library patrons who were interested in participating in 3D printing but could not attend the classes due to their schedule, transportation issues, or class availability. One of the last projects I worked on at VCPL was creating an online tutorial to teach library patrons what 3D printing is, how to 3D print at VCPL, and the rules and guidelines for using the free 3D printers offered there. Check out this <a href="https://my.nicheacademy.com/vigo/course/57776?categoryId=23592>"> tutorial </a> if you are interested in 3D printing at the Vigo County Public Library, or just want to learn a little more about how 3D printing works!</p>
    </section>
  </ContentSection>
</template>

<script setup>
useHead({
  title: 'Technology and Education | Erin',
  meta: [
    { name: 'description', content: 'See how Erin empowers communities through technology and education, bridging digital divides and enhancing learning experiences for all.' }
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
  margin: 0.4rem
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

video {
  width: 100%;
  margin: auto;
}
</style>