<template>
  <div>
    <v-container style="padding-bottom: 10px;">
      <v-row>
        <v-col cols="12" class="d-flex justify-end">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="height: calc(100vh - 160px); overflow-y: auto; padding-bottom: 10px;">
      <v-row>
        <v-col cols="12">
          <h2><strong>What is Space University?</strong></h2>
          <p>Space University is an online platform providing educational resources and courses related to space science and technology.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>How can I enroll in a course?</strong></h2>
          <p>You can enroll in a course by visiting the 'Courses' section, selecting the course you are interested in, and clicking the 'Enroll' button.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Are the courses free?</strong></h2>
          <p>Some courses are free, while others may require a fee. Please check the course details for more information.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Do I get a certificate after completing a course?</strong></h2>
          <p>Yes, you will receive a certificate of completion for most courses. Please check the course details for more information.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Can I access the courses offline?</strong></h2>
          <p>Currently, our courses are only available online. We are working on providing offline access in the future.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>How do I reset my password?</strong></h2>
          <p>You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>How can I contact support?</strong></h2>
          <p>You can contact our support team by emailing support@spaceuniversity.com or by using the contact form on our website.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>What is the refund policy?</strong></h2>
          <p>We offer a 30-day refund policy for most courses. Please check the course details for more information.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>Can I share my course access with others?</strong></h2>
          <p>No, sharing your course access with others is against our terms of service. Each user must have their own account.</p>
        </v-col>
        <v-col cols="12">
          <h2><strong>How do I update my profile information?</strong></h2>
          <p>You can update your profile information by logging into your account and navigating to the 'Profile' section.</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
    };
  },
};
</script>

<style scoped>
h2 {
  margin-top: 20px;
}
</style>