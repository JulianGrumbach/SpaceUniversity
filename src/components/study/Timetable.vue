<template>
    <div class="timetable">
        <h1>Persönlicher Stundenplan</h1>
        <table>
            <thead>
                <tr>
                    <th></th>
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
                    <td :style="{ backgroundColor: timetable['08:00']['Montag'].color }" @click="openPopup(timetable['08:00']['Montag'].course, 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '08:00', 'Montag')">{{ timetable['08:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['08:00']['Dienstag'].color }" @click="openPopup(timetable['08:00']['Dienstag'].course, '', '', '', '08:00', 'Dienstag')">{{ timetable['08:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['08:00']['Mittwoch'].color }" @click="openPopup(timetable['08:00']['Mittwoch'].course, '', '', '', '08:00', 'Mittwoch')">{{ timetable['08:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['08:00']['Donnerstag'].color }" @click="openPopup(timetable['08:00']['Donnerstag'].course, '', '', '', '08:00', 'Donnerstag')">{{ timetable['08:00']['Donnerstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['08:00']['Freitag'].color }" @click="openPopup(timetable['08:00']['Freitag'].course, '', '', '', '08:00', 'Freitag')">{{ timetable['08:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>09</b>:00</td>
                    <td class="course" :style="{ backgroundColor: timetable['09:00']['Montag'].color }" @click="openPopup('Mathematik 101', 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '09:00', 'Montag')">{{ timetable['09:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['09:00']['Dienstag'].color }" @click="openPopup('', '', '', '', '09:00', 'Dienstag')">{{ timetable['09:00']['Dienstag'].course }}</td>
                    <td class="course" :style="{ backgroundColor: timetable['09:00']['Mittwoch'].color }" @click="openPopup('Physik 101', 'Grundlagen der Physik', 'Raum 102', 'Dr. Schmidt', '09:00', 'Mittwoch')">{{ timetable['09:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['09:00']['Donnerstag'].color }" @click="openPopup('', '', '', '', '09:00', 'Donnerstag')">{{ timetable['09:00']['Donnerstag'].course }}</td>
                    <td class="course" :style="{ backgroundColor: timetable['09:00']['Freitag'].color }" @click="openPopup('Chemie 101', 'Einführung in die Chemie', 'Raum 103', 'Dr. Weber', '09:00', 'Freitag')">{{ timetable['09:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>10</b>:00</td>
                    <td :style="{ backgroundColor: timetable['10:00']['Montag'].color }" @click="openPopup('', '', '', '', '10:00', 'Montag')">{{ timetable['10:00']['Montag'].course }}</td>
                    <td class="course" :style="{ backgroundColor: timetable['10:00']['Dienstag'].color }" @click="openPopup('Mathematik 101', 'Einführung in die Mathematik', 'Raum 101', 'Dr. Müller', '10:00', 'Dienstag')">{{ timetable['10:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['10:00']['Mittwoch'].color }" @click="openPopup('', '', '', '', '10:00', 'Mittwoch')">{{ timetable['10:00']['Mittwoch'].course }}</td>
                    <td class="course" :style="{ backgroundColor: timetable['10:00']['Donnerstag'].color }" @click="openPopup('Physik 101', 'Grundlagen der Physik', 'Raum 102', 'Dr. Schmidt', '10:00', 'Donnerstag')">{{ timetable['10:00']['Donnerstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '10:00', 'Freitag')">{{ timetable['10:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>11</b>:00</td>
                    <td class="course" :style="{ backgroundColor: timetable['11:00']['Montag'].color }" @click="openPopup('Chemie 101', 'Einführung in die Chemie', 'Raum 103', 'Dr. Weber', '11:00', 'Montag')">{{ timetable['11:00']['Montag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '11:00', 'Dienstag')">{{ timetable['11:00']['Dienstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '11:00', 'Mittwoch')">{{ timetable['11:00']['Mittwoch'].course }}</td>
                    <td @click="openPopup('', '', '', '', '11:00', 'Donnerstag')">{{ timetable['11:00']['Donnerstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '11:00', 'Freitag')">{{ timetable['11:00']['Freitag'].course }}</td>
                </tr>
                <tr class="greyed-out">
                    <td><b>12</b>:00 🍴</td>
                    <td @click="openPopup('', '', '', '', '12:00', 'Montag')">{{ timetable['12:00']['Montag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '12:00', 'Dienstag')">{{ timetable['12:00']['Dienstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '12:00', 'Mittwoch')">{{ timetable['12:00']['Mittwoch'].course }}</td>
                    <td @click="openPopup('', '', '', '', '12:00', 'Donnerstag')">{{ timetable['12:00']['Donnerstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '12:00', 'Freitag')">{{ timetable['12:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>13</b>:00</td>
                    <td @click="openPopup('', '', '', '', '13:00', 'Montag')">{{ timetable['13:00']['Montag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '13:00', 'Dienstag')">{{ timetable['13:00']['Dienstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '13:00', 'Mittwoch')">{{ timetable['13:00']['Mittwoch'].course }}</td>
                    <td @click="openPopup('', '', '', '', '13:00', 'Donnerstag')">{{ timetable['13:00']['Donnerstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '13:00', 'Freitag')">{{ timetable['13:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>14</b>:00</td>
                    <td @click="openPopup('', '', '', '', '14:00', 'Montag')">{{ timetable['14:00']['Montag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '14:00', 'Dienstag')">{{ timetable['14:00']['Dienstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '14:00', 'Mittwoch')">{{ timetable['14:00']['Mittwoch'].course }}</td>
                    <td @click="openPopup('', '', '', '', '14:00', 'Donnerstag')">{{ timetable['14:00']['Donnerstag'].course }}</td>
                    <td @click="openPopup('', '', '', '', '14:00', 'Freitag')">{{ timetable['14:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>15</b>:00</td>
                    <td :style="{ backgroundColor: timetable['15:00']['Montag'].color }" @click="openPopup('', '', '', '', '15:00', 'Montag')">{{ timetable['15:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['15:00']['Dienstag'].color }" @click="openPopup('', '', '', '', '15:00', 'Dienstag')">{{ timetable['15:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['15:00']['Mittwoch'].color }" @click="openPopup('', '', '', '', '15:00', 'Mittwoch')">{{ timetable['15:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['15:00']['Donnerstag'].color }" @click="openPopup('', '', '', '', '15:00', 'Donnerstag')">{{ timetable['15:00']['Donnerstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['15:00']['Freitag'].color }" @click="openPopup('', '', '', '', '15:00', 'Freitag')">{{ timetable['15:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>16</b>:00</td>
                    <td :style="{ backgroundColor: timetable['16:00']['Montag'].color }" @click="openPopup('', '', '', '', '16:00', 'Montag')">{{ timetable['16:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['16:00']['Dienstag'].color }" @click="openPopup('', '', '', '', '16:00', 'Dienstag')">{{ timetable['16:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['16:00']['Mittwoch'].color }" @click="openPopup('', '', '', '', '16:00', 'Mittwoch')">{{ timetable['16:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['16:00']['Donnerstag'].color }" @click="openPopup('', '', '', '', '16:00', 'Donnerstag')">{{ timetable['16:00']['Donnerstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['16:00']['Freitag'].color }" @click="openPopup('', '', '', '', '16:00', 'Freitag')">{{ timetable['16:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>17</b>:00</td>
                    <td :style="{ backgroundColor: timetable['17:00']['Montag'].color }" @click="openPopup('', '', '', '', '17:00', 'Montag')">{{ timetable['17:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['17:00']['Dienstag'].color }" @click="openPopup('', '', '', '', '17:00', 'Dienstag')">{{ timetable['17:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['17:00']['Mittwoch'].color }" @click="openPopup('', '', '', '', '17:00', 'Mittwoch')">{{ timetable['17:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['17:00']['Donnerstag'].color }" @click="openPopup('', '', '', '', '17:00', 'Donnerstag')">{{ timetable['17:00']['Donnerstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['17:00']['Freitag'].color }" @click="openPopup('', '', '', '', '17:00', 'Freitag')">{{ timetable['17:00']['Freitag'].course }}</td>
                </tr>
                <tr>
                    <td><b>18</b>:00</td>
                    <td :style="{ backgroundColor: timetable['18:00']['Montag'].color }" @click="openPopup('', '', '', '', '18:00', 'Montag')">{{ timetable['18:00']['Montag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['18:00']['Dienstag'].color }" @click="openPopup('', '', '', '', '18:00', 'Dienstag')">{{ timetable['18:00']['Dienstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['18:00']['Mittwoch'].color }" @click="openPopup('', '', '', '', '18:00', 'Mittwoch')">{{ timetable['18:00']['Mittwoch'].course }}</td>
                    <td :style="{ backgroundColor: timetable['18:00']['Donnerstag'].color }" @click="openPopup('', '', '', '', '18:00', 'Donnerstag')">{{ timetable['18:00']['Donnerstag'].course }}</td>
                    <td :style="{ backgroundColor: timetable['18:00']['Freitag'].color }" @click="openPopup('', '', '', '', '18:00', 'Freitag')">{{ timetable['18:00']['Freitag'].course }}</td>
                </tr>
            </tbody>
        </table>

        <div v-if="showPopup" class="popup" @click="closePopup">
            <div class="popup-content" @click.stop>
                <span class="close" @click="closePopup">&times;</span>
                <p><b>{{ currentSlot.day }} - {{ currentSlot.time }}</b></p>
                <div v-if="popupContent.title">
                    <p><b>{{ popupContent.title }}</b></p>
                    <p>{{ popupContent.description }}</p>
                    <p><b>Raum:</b> {{ popupContent.room }}</p>
                    <p><b>Tutor:</b> {{ popupContent.tutor }}</p>
                    <div class="color-picker">
                        <label for="color">Farbe auswählen:</label>
                        <select id="color" v-model="selectedColor" :style="{ backgroundColor: selectedColor }">
                            <option value="#fffacd" style="background-color: #fffacd;">Gelb</option>
                            <option value="#add8e6" style="background-color: #add8e6;">Hellblau</option>
                            <option value="#90ee90" style="background-color: #90ee90;">Hellgrün</option>
                            <option value="#ffb6c1" style="background-color: #ffb6c1;">Hellrosa</option>
                            <option value="#d3d3d3" style="background-color: #d3d3d3;">Hellgrau</option>
                            <option value="#ffffff" style="background-color: #ffffff;">Weiß</option>
                        </select>
                    </div>
                    <button class="confirm-button" @click="saveColor">Farbe speichern</button>
                </div>
                <div v-else>
                    <input class="appointment-input" v-model="appointment" @keyup.enter="saveAppointment" placeholder="Termin eintragen" />
                    <div class="color-picker">
                        <label for="color">Farbe auswählen:</label>
                        <select id="color" v-model="selectedColor" :style="{ backgroundColor: selectedColor }">
                            <option value="#fffacd" style="background-color: #fffacd;">Gelb</option>
                            <option value="#add8e6" style="background-color: #add8e6;">Hellblau</option>
                            <option value="#90ee90" style="background-color: #90ee90;">Hellgrün</option>
                            <option value="#ffb6c1" style="background-color: #ffb6c1;">Hellrosa</option>
                            <option value="#d3d3d3" style="background-color: #d3d3d3;">Hellgrau</option>
                            <option value="#ffffff" style="background-color: #ffffff;">Weiß</option>
                        </select>
                    </div>
                    <button class="confirm-button" @click="saveAppointment">Bestätigen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Timetable',
    data() {
        return {
            showPopup: false,
            popupContent: {
                title: '',
                description: '',
                room: '',
                tutor: ''
            },
            appointment: '',
            currentSlot: {
                time: '',
                day: ''
            },
            selectedColor: '#fffacd',
            timetable: {
                '08:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '09:00': { 'Montag': { course: 'Mathematik 101', color: '#fffacd' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: 'Physik 101', color: '#fffacd' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: 'Chemie 101', color: '#fffacd' } },
                '10:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: 'Mathematik 101', color: '#fffacd' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: 'Physik 101', color: '#fffacd' }, 'Freitag': { course: '', color: '' } },
                '11:00': { 'Montag': { course: 'Chemie 101', color: '#fffacd' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '12:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '13:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '14:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '15:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '16:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '17:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } },
                '18:00': { 'Montag': { course: '', color: '' }, 'Dienstag': { course: '', color: '' }, 'Mittwoch': { course: '', color: '' }, 'Donnerstag': { course: '', color: '' }, 'Freitag': { course: '', color: '' } }
            }
        };
    },
    methods: {
        openPopup(title, description, room, tutor, time = '', day = '') {
            this.popupContent = { title, description, room, tutor };
            this.currentSlot = { time, day };
            this.appointment = this.timetable[time][day].course || '';
            this.selectedColor = this.timetable[time][day].color || '#fffacd';
            this.showPopup = true;
        },
        closePopup() {
            this.showPopup = false;
            this.popupContent = { title: '', description: '', room: '', tutor: '' };
            this.appointment = '';
        },
        saveAppointment() {
            if (this.currentSlot.time && this.currentSlot.day) {
                this.$set(this.timetable[this.currentSlot.time], this.currentSlot.day, { course: this.appointment, color: this.selectedColor });
            }
            this.closePopup();
        },
        saveColor() {
            if (this.currentSlot.time && this.currentSlot.day) {
                this.$set(this.timetable[this.currentSlot.time][this.currentSlot.day], 'color', this.selectedColor);
            }
            this.closePopup();
        }
    }
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
    background-color: white;
    transition: background-color 0.2s;
    margin-top: 20px; /* Added margin-top to place the button further down */
}

.confirm-button:hover {
    background-color: #f2f2f2;
}

.color-picker {
    margin-top: 20px;
    text-align: left;
}

.color-picker label {
    display: block;
    margin-bottom: 5px;
}
</style>