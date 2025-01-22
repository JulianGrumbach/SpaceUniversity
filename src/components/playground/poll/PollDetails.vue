<template>
  <div class="meetingPlanner">
    <v-container>
      <v-card width="600">
        <v-card-title>
          {{ state.poll.question }}
        </v-card-title>

        <v-card-text>
          <span v-if="state.poll.multipleAnswers">
            <v-list>
              <v-list-item
                v-for="answer of state.poll.answers"
                :key="answer.text"
              >
                <v-checkbox
                  :label="answer.text"
                  :value="answer.text"
                  v-model="state.selectedAnswers"
                />
              </v-list-item>
            </v-list>
          </span>
          <span v-if="!state.poll.multipleAnswers">
            <v-radio-group v-model="state.selectedAnswers">
              <v-radio
                :key="answer.text"
                :label="answer.text"
                :value="answer.text"
                v-for="answer of state.poll.answers"
                class="ma-4"
              />
            </v-radio-group>
          </span>
        </v-card-text>

        <v-card-actions>
          <v-btn :to="state.poll._id + '/edit'" outlined v-if="isTutor()">
            edit poll
          </v-btn>
          <v-spacer />
          <v-btn @click="cancel" outlined>cancel</v-btn>
          <v-btn @click="submit" outlined>submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { reactive } from '@vue/composition-api';
import { pochtaStore } from '@/store/localStorage/pochta-store';
import { pollStore } from '@/store/pouchDB/poll-store';

export default {
  name: 'PollDetails',
  props: {
    id: String,
  },
  setup(props, { root }) {
    const state = reactive({
      poll: {},
      selectedAnswers: [],
    });
    pollStore.read(props.id).then(poll => {
      state.poll = poll;
      root.$route.meta.breadcrumbs[3].text = poll.question;
    });
    const submit = () => {
      state.poll.answers.forEach(answer => {
        answer.votes =
          answer.votes + (state.selectedAnswers.includes(answer.text) ? 1 : 0);
      });
      pollStore.update(state.poll).then(() => {
        root.$router.back();
      });
    };
    const cancel = () => {
      root.$router.back();
    };
    const isTutor = () => pochtaStore.role.name === 'tutor';
    return {
      cancel,
      isTutor,
      state,
      submit,
    };
  },
};
</script>
