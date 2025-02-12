<template>
  <div class="bugtracker">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="left1" style="margin-left: -80px">
            <h1 class="text-h4">
              {{ t('$vuetify.aboutBugTracker.welcome') }}
            </h1>
            <br>
            <p>{{ t('$vuetify.aboutBugTracker.description1') }}</p>
            <p>{{ t('$vuetify.aboutBugTracker.description2') }}</p>
            <p>{{ t('$vuetify.aboutBugTracker.description3') }}</p>
            <p>{{ t('$vuetify.aboutBugTracker.description4') }}</p>
            <p>{{ t('$vuetify.aboutBugTracker.description5') }}</p>
            <button
              style="background-color: #090091;"
              @click="openPopup"
            >
              {{ t('$vuetify.aboutBugTracker.newTicket') }}
            </button>
          </div>
        </v-col>
        <v-col cols="8">
          <div class="right-side">
            <div class="right1">
              <h2>{{ t('$vuetify.aboutBugTracker.unresolvedTickets') }}</h2>
              <div class="table-container">
                <v-container style="padding-bottom: 10px;">
                  <v-row>
                    <v-col
                      cols="12"
                      class="d-flex justify-end"
                    >
                      <v-text-field
                        v-model="search"
                        append-inner-icon="fa-solid fa-magnifying-glass"
                        :label="t('$vuetify.aboutBugTracker.search')"
                      />
                    </v-col>
                  </v-row>
                </v-container>
                <table>
                  <thead>
                    <tr>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.number') }}</th>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.title') }}</th>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.variant') }}</th>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.section') }}</th>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.description') }}</th>
                      <th>{{ t('$vuetify.aboutBugTracker.ticket.status') }}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(bug, index) in exampleBugs"
                      :key="index"
                    >
                      <td>{{ bug.ticketNumber }}</td>
                      <td>{{ bug.title }}</td>
                      <td>{{ t(bug.ticketType) }}</td>
                      <td>{{ t(bug.section) }}</td>
                      <td>{{ bug.description }}</td>
                      <td :class="{'status-offen': bug.status === '$vuetify.aboutBugTracker.status.open', 'status-in-bearbeitung': bug.status === '$vuetify.aboutBugTracker.status.inProgress'}">
                        {{ t(bug.status) }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              v-if="showPopup"
              class="popup"
            >
              <div class="popup-content">
                <span
                  class="close"
                  @click="showPopup = false"
                >
                  &times;
                </span>
                <h1 class="text-h4">
                  {{ t('$vuetify.aboutBugTracker.name') }}
                </h1>
                <br>
                <form @submit.prevent="submitBug">
                  <div>
                    <label for="type">
                      {{ t('$vuetify.aboutBugTracker.ticket.variant') }}:
                      <span style="color: red;">*</span>
                    </label>
                    <div style="position: relative; width: 100%;">
                      <select
                        id="type"
                        v-model="bug.ticketType"
                        required
                        style="width: 100%; border: 1px solid grey; appearance: none; -webkit-appearance: none; -moz-appearance: none; padding-right: 30px; padding-left: 10px;"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          hidden
                        >
                          {{ t('$vuetify.aboutBugTracker.select') }}
                        </option>
                        <option value="bug">
                          {{ t('$vuetify.aboutBugTracker.type.bug') }}
                        </option>
                        <option value="feedback">
                          {{ t('$vuetify.aboutBugTracker.type.feedback') }}
                        </option>
                      </select>
                      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; border-left: 1px solid grey; padding-left: 5px;">&#9662;</span>
                    </div>
                    <br>
                    <label for="section">
                      {{ t('$vuetify.aboutBugTracker.ticket.section') }}:
                      <span style="color: red;">*</span>
                    </label>
                    <div style="position: relative; width: 100%;">
                      <select
                        id="section"
                        v-model="bug.section"
                        required
                        style="width: 100%; border: 1px solid grey; appearance: none; -webkit-appearance: none; -moz-appearance: none; padding-right: 30px; padding-left: 10px;"
                      >
                        <option
                          value=""
                          selected
                          disabled
                          hidden
                        >
                          {{ t('$vuetify.aboutBugTracker.select') }}
                        </option>
                        <option value="undefined">
                          {{ t('$vuetify.aboutBugTracker.section.undefined') }}
                        </option>
                        <option value="map">
                          {{ t('$vuetify.aboutBugTracker.section.map') }}
                        </option>
                        <option value="courses">
                          {{ t('$vuetify.aboutBugTracker.section.courses') }}
                        </option>
                        <option value="timetable">
                          {{ t('$vuetify.aboutBugTracker.section.timetable') }}
                        </option>
                        <option value="bugtracker">
                          {{ t('$vuetify.aboutBugTracker.section.bugtracker') }}
                        </option>
                        <option value="faq">
                          {{ t('$vuetify.aboutBugTracker.section.faq') }}
                        </option>
                      </select>
                      <span style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); pointer-events: none; border-left: 1px solid grey; padding-left: 5px;">&#9662;</span>
                    </div>
                    <br>
                  </div>
                  <div>
                    <label for="title">
                      {{ t('$vuetify.aboutBugTracker.ticket.title') }}:
                      <span style="color: red;">*</span>
                    </label>
                    <input
                      id="title"
                      v-model="bug.title"
                      type="text"
                      required
                    >
                  </div>
                  <div>
                    <label for="description">
                      {{ t('$vuetify.aboutBugTracker.ticket.description') }}:
                      <span style="color: red;">*</span>
                    </label>
                    <textarea
                      id="description"
                      v-model="bug.description"
                      required
                    />
                  </div>
                  <div>
                    <p style="color: #bc3e3e;">
                      {{ t('$vuetify.aboutBugTracker.duplicateInfo') }}
                    </p>
                    <label>{{ t('$vuetify.aboutBugTracker.ticket.number') }}:</label>
                    <p>{{ ticketNumber }}</p>
                  </div>
                  <button
                    type="submit"
                    style="background-color: #090091; color: white;"
                  >
                    {{ t('$vuetify.aboutBugTracker.send') }}
                  </button>
                </form>
              </div>
            </div>
            <div
              v-if="showConfirmation"
              class="confirmation-popup"
            >
              <div class="confirmation-content">
                <div class="throbber" />
                <h2 class="text-h5">
                  {{ t('$vuetify.aboutBugTracker.beingSend') }}
                </h2>
                <p>{{ t('$vuetify.aboutBugTracker.ticket.number') }}: {{ confirmationTicketNumber }}</p>
                <p>{{ t('$vuetify.aboutBugTracker.ticket.title') }}: {{ confirmationTitle }}</p>
              </div>
            </div>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
  import { useLocale } from 'vuetify';
  const { t } = useLocale();
  const showPopup = ref(false);
  const showConfirmation = ref(false);
  const search = ref('');
  const bug = reactive({
    ticketType: '',
    section: '',
    title: '',
    description: '',
    status: '$vuetify.aboutBugTracker.status.open'
  });
  const confirmationTitle = ref('');
  const confirmationTicketNumber = ref('');
  const ticketNumber = ref('');
  const exampleBugs = [
      { ticketNumber: '#1556', title: 'FAQ Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.faq', description: 'Die FAQs könnten besser strukturiert sein.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1523', title: 'Bugtracker Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.bugtracker', description: 'Der Bugtracker speichert keine Daten.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1490', title: 'Stundenplan Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.timetable', description: 'Der Stundenplan könnte übersichtlicher sein.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1467', title: 'Kursdetails Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.courses', description: 'Die Kursdetails sind unvollständig.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1434', title: 'Kartenansicht Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.map', description: 'Die Kartenansicht könnte schneller laden.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1401', title: 'FAQ Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.faq', description: 'Einige FAQs sind nicht mehr relevant.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1389', title: 'Bugtracker Usability', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.bugtracker', description: 'Der Bugtracker könnte benutzerfreundlicher sein.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1356', title: 'Stundenplan Anzeigeproblem', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.timetable', description: 'Der Stundenplan wird nicht vollständig angezeigt.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1323', title: 'Kursübersicht Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.courses', description: 'Die Kursübersicht könnte mehr Filteroptionen haben.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1290', title: 'Kartenansicht Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.map', description: 'Die Kartenansicht zeigt falsche Daten an.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1267', title: 'FAQ Verbesserung', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.faq', description: 'Die FAQs könnten detaillierter sein.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1234', title: 'Bugtracker Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.bugtracker', description: 'Der Bugtracker stürzt häufig ab.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1203', title: 'Stundenplan Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.timetable', description: 'Der Stundenplan könnte farblich besser gestaltet sein.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1189', title: 'Fehler in Kursdetails', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.courses', description: 'Die Kursdetails werden nicht korrekt angezeigt.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1156', title: 'Kartenansicht Verbesserung', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.map', description: 'Die Kartenansicht könnte interaktiver sein.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1123', title: 'FAQ Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.faq', description: 'Einige FAQs sind veraltet.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1099', title: 'Bugtracker Feedback', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.bugtracker', description: 'Der Bugtracker ist schwer zu bedienen.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1078', title: 'Stundenplan Fehler', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.timetable', description: 'Einige Kurse werden doppelt angezeigt.', status: '$vuetify.aboutBugTracker.status.open' },
      { ticketNumber: '#1045', title: 'Feedback zu Kursen', ticketType: '$vuetify.aboutBugTracker.type.feedback', section: '$vuetify.aboutBugTracker.section.courses', description: 'Die Kursübersicht könnte übersichtlicher sein.', status: '$vuetify.aboutBugTracker.status.inProgress' },
      { ticketNumber: '#1023', title: 'Fehler in der Kartenansicht', ticketType: '$vuetify.aboutBugTracker.type.bug', section: '$vuetify.aboutBugTracker.section.map', description: 'Die Kartenansicht lädt nicht korrekt.', status: '$vuetify.aboutBugTracker.status.open' }
  ];
    function openPopup() {
      showPopup.value = true;
      ticketNumber.value = '#' + Math.floor(1557 + Math.random() * 8443).toString();
    }
    function submitBug() {
      confirmationTitle.value = bug.title;
      confirmationTicketNumber.value = ticketNumber.value;
      exampleBugs.unshift({ ...bug, ticketNumber: ticketNumber.value }); // Add new tickets on top
      bug.ticketType = '';
      bug.section = '';
      bug.title = '';
      bug.description = '';
      showConfirmation.value = true;
      showPopup.value = false;
      setTimeout(() => {
          showConfirmation.value = false;
      }, 3500);
    }
</script>

<style scoped>
.bugtracker {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 20px 0 0 50px;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 35%;
  padding: 10px;
  border-radius: 4px;
  margin-left: -120px; /* Adjust this value as needed */
}

.right {
  width: calc(55% + 50px);
  position: absolute;
  right: 20px;
}

.table-container {
  max-height: calc(100vh - 200px);
  overflow: auto;
}

.search-bar {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 12px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.status-offen {
  background-color: red;
  color: white;
}

.status-in-bearbeitung {
  background-color: yellow;
  color: black;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background: rgba(var(--v-theme-background), 1);
  padding: 20px;
  border-radius: 4px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

h2 {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.confirmation-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.confirmation-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  animation: fadeOut 6s forwards;
}

.throbber {
  width: 40px;
  height: 40px;
  border: 4px solid #28a745;
  border-top: 4px solid transparent;
  border-radius: 50%;
  margin: 0 auto 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
