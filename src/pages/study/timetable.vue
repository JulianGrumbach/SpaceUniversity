<template>
  <div class="timetable">
    <div class="header">
      <h1 class="text-h4">
        {{ t('$vuetify.study.timetable.longName') }}
      </h1>
      <v-text-field
        v-model="search"
        append-inner-icon="fa-solid fa-magnifying-glass"
        label="{{ t('$vuetify.study.timetable.searchDates')}}"
        single-line
        hide-details
      />
    </div>
    <br>
    <table>
      <thead>
        <tr>
          <th />
          <th>Montag</th>
          <th>Dienstag</th>
          <th>Mittwoch</th>
          <th>Donnerstag</th>
          <th>Freitag</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>08</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['08:00']['Montag'].color }"
            @click="openPopup(timetable['08:00']['Montag'].course, 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '08:00', 'Montag')"
          >
            {{ timetable['08:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['08:00']['Dienstag'].color }"
            @click="openPopup(timetable['08:00']['Dienstag'].course, '', '', '', '08:00', 'Dienstag')"
          >
            {{ timetable['08:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['08:00']['Mittwoch'].color }"
            @click="openPopup(timetable['08:00']['Mittwoch'].course, '', '', '', '08:00', 'Mittwoch')"
          >
            {{ timetable['08:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['08:00']['Donnerstag'].color }"
            @click="openPopup(timetable['08:00']['Donnerstag'].course, '', '', '', '08:00', 'Donnerstag')"
          >
            {{ timetable['08:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['08:00']['Freitag'].color }"
            @click="openPopup(timetable['08:00']['Freitag'].course, '', '', '', '08:00', 'Freitag')"
          >
            {{ timetable['08:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>09</b>:00</td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['09:00']['Montag'].color }"
            @click="openPopup('Mathematik 2', 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '09:00', 'Montag')"
          >
            {{ timetable['09:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['09:00']['Dienstag'].color }"
            @click="openPopup('', '', '', '', '09:00', 'Dienstag')"
          >
            {{ timetable['09:00']['Dienstag'].course }}
          </td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['09:00']['Mittwoch'].color }"
            @click="openPopup('Physik 1', 'Grundlagen der Physik', 'Raum 102', 'Dr. Schmidt', '09:00', 'Mittwoch')"
          >
            {{ timetable['09:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['09:00']['Donnerstag'].color }"
            @click="openPopup('', '', '', '', '09:00', 'Donnerstag')"
          >
            {{ timetable['09:00']['Donnerstag'].course }}
          </td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['09:00']['Freitag'].color }"
            @click="openPopup('Chemie 1', 'Einführung in die Chemie', 'Raum 103', 'Dr. Weber', '09:00', 'Freitag')"
          >
            {{ timetable['09:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>10</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['10:00']['Montag'].color }"
            @click="openPopup('', '', '', '', '10:00', 'Montag')"
          >
            {{ timetable['10:00']['Montag'].course }}
          </td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['10:00']['Dienstag'].color }"
            @click="openPopup('Mathematik 2', 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '10:00', 'Dienstag')"
          >
            {{ timetable['10:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['10:00']['Mittwoch'].color }"
            @click="openPopup('', '', '', '', '10:00', 'Mittwoch')"
          >
            {{ timetable['10:00']['Mittwoch'].course }}
          </td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['10:00']['Donnerstag'].color }"
            @click="openPopup('Physik 1', 'Grundlagen der Physik', 'Raum 102', 'Dr. Schmidt', '10:00', 'Donnerstag')"
          >
            {{ timetable['10:00']['Donnerstag'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '10:00', 'Freitag')">
            {{ timetable['10:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>11</b>:00</td>
          <td
            class="course"
            :style="{ backgroundColor: timetable['11:00']['Montag'].color }"
            @click="openPopup('Chemie 101', 'Einführung in die Chemie', 'Raum 103', 'Dr. Weber', '11:00', 'Montag')"
          >
            {{ timetable['11:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['11:00']['Dienstag'].color }"
            @click="openPopup('Soziologie 3', 'Fortgeschrittene in die Soziologie', 'Raum 107', 'Dr. Eberhardt', '11:00', 'Dienstag')"
          >
            {{ timetable['11:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['11:00']['Mittwoch'].color }"
            @click="openPopup('Soziologie 3', 'Fortgeschrittene in die Soziologie', 'Raum 108', 'Eberhardt', '11:00', 'Mittwoch')"
          >
            {{ timetable['11:00']['Mittwoch'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '11:00', 'Donnerstag')">
            {{ timetable['11:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['11:00']['Freitag'].color }"
            @click="openPopup('Philosophie 101', '', '', '', '11:00', 'Freitag')"
          >
            {{ timetable['11:00']['Freitag'].course }}
          </td>
        </tr>
        <tr class="greyed-out">
          <td><b>12</b>:00 🍴</td>
          <td @click="openPopup('', '', '', '', '12:00', 'Montag')">
            {{ timetable['12:00']['Montag'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '12:00', 'Dienstag')">
            {{ timetable['12:00']['Dienstag'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '12:00', 'Mittwoch')">
            {{ timetable['12:00']['Mittwoch'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '12:00', 'Donnerstag')">
            {{ timetable['12:00']['Donnerstag'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '12:00', 'Freitag')">
            {{ timetable['12:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>13</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['13:00']['Montag'].color }"
            @click="openPopup('Physik 1', 'Einführung in die Physik', 'Raum 109', 'Dr. Schmidt', '13:00', 'Montag')"
          >
            {{ timetable['13:00']['Montag'].course }}
          </td>
          <td @click="openPopup('', '', '', '', '13:00', 'Dienstag')">
            {{ timetable['13:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['13:00']['Mittwoch'].color }"
            @click="openPopup('Musik 101', '', '', '', '13:00', 'Mittwoch')"
          >
            {{ timetable['13:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['13:00']['Donnerstag'].color }"
            @click="openPopup('Sport 101', '', '', '', '13:00', 'Donnerstag')"
          >
            {{ timetable['13:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['13:00']['Freitag'].color }"
            @click="openPopup('Geographie 101', '', '', '', '13:00', 'Freitag')"
          >
            {{ timetable['13:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>14</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['14:00']['Montag'].color }"
            @click="openPopup('Physik 1', 'Einführung in die Physik', '', '', '14:00', 'Montag')"
          >
            {{ timetable['14:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['14:00']['Dienstag'].color }"
            @click="openPopup('Soziologie 3', '', '', '', '14:00', 'Dienstag')"
          >
            {{ timetable['14:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['14:00']['Mittwoch'].color }"
            @click="openPopup('Politikwissenschaft 101', '', '', '', '14:00', 'Mittwoch')"
          >
            {{ timetable['14:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['14:00']['Donnerstag'].color }"
            @click="openPopup('Wirtschaft 2', '', '', '', '14:00', 'Donnerstag')"
          >
            {{ timetable['14:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['14:00']['Freitag'].color }"
            @click="openPopup('Recht 101', '', '', '', '14:00', 'Freitag')"
          >
            {{ timetable['14:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>15</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['15:00']['Montag'].color }"
            @click="openPopup('', '', '', '', '15:00', 'Montag')"
          >
            {{ timetable['15:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['15:00']['Dienstag'].color }"
            @click="openPopup('', '', '', '', '15:00', 'Dienstag')"
          >
            {{ timetable['15:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['15:00']['Mittwoch'].color }"
            @click="openPopup('', '', '', '', '15:00', 'Mittwoch')"
          >
            {{ timetable['15:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['15:00']['Donnerstag'].color }"
            @click="openPopup('', '', '', '', '15:00', 'Donnerstag')"
          >
            {{ timetable['15:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['15:00']['Freitag'].color }"
            @click="openPopup('', '', '', '', '15:00', 'Freitag')"
          >
            {{ timetable['15:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>16</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['16:00']['Montag'].color }"
            @click="openPopup('', '', '', '', '16:00', 'Montag')"
          >
            {{ timetable['16:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['16:00']['Dienstag'].color }"
            @click="openPopup('', '', '', '', '16:00', 'Dienstag')"
          >
            {{ timetable['16:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['16:00']['Mittwoch'].color }"
            @click="openPopup('', '', '', '', '16:00', 'Mittwoch')"
          >
            {{ timetable['16:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['16:00']['Donnerstag'].color }"
            @click="openPopup('', '', '', '', '16:00', 'Donnerstag')"
          >
            {{ timetable['16:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['16:00']['Freitag'].color }"
            @click="openPopup('', '', '', '', '16:00', 'Freitag')"
          >
            {{ timetable['16:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>17</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['17:00']['Montag'].color }"
            @click="openPopup('', '', '', '', '17:00', 'Montag')"
          >
            {{ timetable['17:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['17:00']['Dienstag'].color }"
            @click="openPopup('', '', '', '', '17:00', 'Dienstag')"
          >
            {{ timetable['17:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['17:00']['Mittwoch'].color }"
            @click="openPopup('', '', '', '', '17:00', 'Mittwoch')"
          >
            {{ timetable['17:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['17:00']['Donnerstag'].color }"
            @click="openPopup('', '', '', '', '17:00', 'Donnerstag')"
          >
            {{ timetable['17:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['17:00']['Freitag'].color }"
            @click="openPopup('', '', '', '', '17:00', 'Freitag')"
          >
            {{ timetable['17:00']['Freitag'].course }}
          </td>
        </tr>
        <tr>
          <td><b>18</b>:00</td>
          <td
            :style="{ backgroundColor: timetable['18:00']['Montag'].color }"
            @click="openPopup('', '', '', '', '18:00', 'Montag')"
          >
            {{ timetable['18:00']['Montag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['18:00']['Dienstag'].color }"
            @click="openPopup('', '', '', '', '18:00', 'Dienstag')"
          >
            {{ timetable['18:00']['Dienstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['18:00']['Mittwoch'].color }"
            @click="openPopup('', '', '', '', '18:00', 'Mittwoch')"
          >
            {{ timetable['18:00']['Mittwoch'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['18:00']['Donnerstag'].color }"
            @click="openPopup('', '', '', '', '18:00', 'Donnerstag')"
          >
            {{ timetable['18:00']['Donnerstag'].course }}
          </td>
          <td
            :style="{ backgroundColor: timetable['18:00']['Freitag'].color }"
            @click="openPopup('', '', '', '', '18:00', 'Freitag')"
          >
            {{ timetable['18:00']['Freitag'].course }}
          </td>
        </tr>
      </tbody>
    </table>

    <div
      v-if="showPopup"
      class="popup"
      @click="closePopup"
    >
      <div
        class="popup-content"
        @click.stop
      >
        <span
          class="close"
          @click="closePopup"
        >&times;</span>
        <p><b>{{ currentSlot.day }} - {{ currentSlot.time }}</b></p>
        <div v-if="popupContent.title">
          <p><b>{{ popupContent.title }}</b></p>
          <p>{{ popupContent.description }}</p>
          <p><b>Raum:</b> {{ popupContent.room }}</p>
          <p><b>Tutor:</b> {{ popupContent.tutor }}</p>
          <div class="color-picker">
            <label for="color">Farbe auswählen:</label>
            <select
              id="color"
              v-model="selectedColor"
              :style="{ backgroundColor: selectedColor }"
            >
              <option
                value="#fffacd"
                style="background-color: #fffacd;"
              >
                Gelb
              </option>
              <option
                value="#add8e6"
                style="background-color: #add8e6;"
              >
                Hellblau
              </option>
              <option
                value="#90ee90"
                style="background-color: #90ee90;"
              >
                Hellgrün
              </option>
              <option
                value="#ffb6c1"
                style="background-color: #ffb6c1;"
              >
                Hellrosa
              </option>
              <option
                value="#d3d3d3"
                style="background-color: #d3d3d3;"
              >
                Hellgrau
              </option>
              <option
                value="#ffffff"
                style="background-color: #ffffff;"
              >
                Weiß
              </option>
            </select>
          </div>
          <button
            class="confirm-button"
            @click="saveColor"
          >
            Bestätigen
          </button>
          <button
            class="delete-button"
            @click="deleteAppointment"
          >
            Löschen
          </button>
        </div>
        <div v-else>
          <input
            v-model="appointment"
            class="appointment-input"
            placeholder="Termin eintragen"
            @keyup.enter="saveAppointment"
          >
          <div class="color-picker">
            <label for="color">Farbe auswählen:</label>
            <select
              id="color"
              v-model="selectedColor"
              :style="{ backgroundColor: selectedColor }"
            >
              <option
                value="#fffacd"
                style="background-color: #fffacd;"
              >
                Gelb
              </option>
              <option
                value="#add8e6"
                style="background-color: #add8e6;"
              >
                Hellblau
              </option>
              <option
                value="#90ee90"
                style="background-color: #90ee90;"
              >
                Hellgrün
              </option>
              <option
                value="#ffb6c1"
                style="background-color: #ffb6c1;"
              >
                Hellrosa
              </option>
              <option
                value="#d3d3d3"
                style="background-color: #d3d3d3;"
              >
                Hellgrau
              </option>
              <option
                value="#ffffff"
                style="background-color: #ffffff;"
              >
                Weiß
              </option>
            </select>
          </div>
          <button
            class="confirm-button"
            @click="saveAppointment"
          >
            Bestätigen
          </button>
          <button
            class="delete-button"
            @click="deleteAppointment"
          >
            Löschen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Reactive } from 'vue'
  import { useLocale } from 'vuetify'
  const { t } = useLocale()

  const showPopup = ref(false)
  const popupContent = reactive({
    title: '',
    description: '',
    room: '',
    tutor: ''
  })
  const appointment =  ref('')
  const currentSlot = reactive({
    time: '',
    day: '',
  })
  const selectedColor = ref('#fffacd')
  const search = ref('')

  const timetable: Reactive<{[time: string]: {[day: string]: {course: string; color: string;}}}> = reactive({
      '08:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
      '09:00': { 'Montag': { course: 'Mathematik 2', color: '#add8e6' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: 'Physik 1', color: '#ffb6c1' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: 'Chemie 1', color: '#fffacd' } },
      '10:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: 'Mathematik 2', color: '#add8e6' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: 'Physik 1', color: '#ffb6c1' }, 'Freitag': { course: '', color: '' } },
      '11:00': { 'Montag': { course: 'Chemie 1', color: '#fffacd' }, 'Dienstag': { course: 'Soziologie 3', color: '#90ee90' }, 'Mittwoch': { course: 'Soziologie 3', color: '#90ee90' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: 'Physik 1', color: '#ffb6c1' } },
      '12:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
      '13:00': { 'Montag': { course: 'Physik 1', color: '#ffb6c1' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: 'Mathematik 2', color: '#add8e6' }, 'Donnerstag': { course: 'Soziologie 3', color: '#90ee90' }, 'Freitag': { course: 'Physik 1', color: '#ffb6c1' } },
      '14:00': { 'Montag': { course: 'Physik 1', color: '#ffb6c1' }, 'Dienstag': { course: 'Soziologie 3', color: '#90ee90' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: 'Chemie 1', color: '#fffacd' }, 'Freitag': { course: 'Mathematik 2', color: '#add8e6' } },
      '15:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
      '16:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
      '17:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
      '18:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } }
    })

  function openPopup(title: string, description: string, room: string, tutor: string, time: string = '', day: string = '') {
    popupContent.title = title;
    popupContent.description = description;
    popupContent.room = room;
    popupContent.tutor = tutor;
    currentSlot.time = time;
    currentSlot.day = day;
    appointment.value = timetable[time][day].course || '';
    selectedColor.value = timetable[time][day].color || '#fffacd';
    showPopup.value = true;
  }

  function closePopup() {
    showPopup.value = false;
    popupContent.title = '';
    popupContent.description = '';
    popupContent.room = '';
    popupContent.tutor = '';
    appointment.value = '';
  }

  function saveAppointment() {
    if (currentSlot.time && currentSlot.day) {
      timetable[currentSlot.time][currentSlot.day].course = appointment.value;
      timetable[currentSlot.time][currentSlot.day].color = selectedColor.value;
    }
    closePopup();
  }

  function saveColor() {
    if (currentSlot.time && currentSlot.day) {
        timetable[currentSlot.time][currentSlot.day].color = selectedColor.value;
    }
    closePopup();
  }

  function deleteAppointment() {
    if (currentSlot.time && currentSlot.day) {
      timetable[currentSlot.time][currentSlot.day].course = '';
      timetable[currentSlot.time][currentSlot.day].color = '#ffffff';
    }
    closePopup();
  }
</script>

<style scoped>
.timetable {
  font-family: Arial, sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  transition: transform 0.2s; /* Smooth transition for transform */
}

th {
  background-color: #f2f2f2;
}

th:first-child, td:first-child {
  width: 10%; /* Adjust this value as needed */
}

th:not(:first-child), td:not(:first-child) {
  width: 18%; /* Adjust this value as needed */
}

td:hover {
  transform: scale(1.05); /* Slightly expand on hover */
}

.greyed-out {
  background-color: #867d7d;
}

.course {
  background-color: #fffacd; /* Light yellow background */
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
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  position: relative;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.appointment-input {
  border: 1px solid grey;
  padding: 5px;
  width: 80%;
  margin-bottom: 20px;
}

.confirm-button {
  border: 1px solid grey;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #090091;
  color: white; /* Added text color */
  transition: background-color 0.2s;
  margin-top: 20px; /* Adjusted margin-top */
  margin-right: 10px; /* Added margin-right for spacing */
}

.confirm-button:hover {
  background-color: #07034b;
}

.color-picker {
  margin-top: 20px;
  text-align: left;
}

.color-picker label {
  display: block;
  margin-bottom: 5px;
}

.delete-button {
  border: 1px solid grey;
  padding: 5px 10px;
  cursor: pointer;
  background-color: red; /* Changed background color to red */
  color: white; /* Added text color */
  transition: background-color 0.2s;
  margin-top: 20px; /* Adjusted margin-top to match confirm-button */
}

.delete-button:hover {
  background-color: darkred; /* Darker shade for hover */
}
.search-bar {
  margin: 0 auto;
  text-align: right;
}
</style>
