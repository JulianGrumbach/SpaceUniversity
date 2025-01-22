<template>
  <div class="meetingPlanner">
    <v-container>
      <v-card width="600" v-if="state.poll">
        <v-card-title>
          <v-text-field
            label="Question"
            hide-details
            v-model="state.poll.question"
          />
        </v-card-title>

        <v-card-text>
          <v-list dense>
            <v-checkbox
              v-model="state.poll.multipleAnswers"
              label="Multiple answers"
            />
            <v-subheader>Answers</v-subheader>
            <v-list-item
              :key="index"
              v-for="(answer, index) of state.poll.answers"
            >
              <v-text-field
                :append-outer-icon="'mdi-close'"
                @click:append-outer="removeAnswer(answer)"
                hide-details
                v-model="answer.text"
              />
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-btn @click="() => addAnswer()" outlined> add answer </v-btn>
          <v-btn @click="deletePoll" color="red" outlined>delete poll</v-btn>
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
import { pollStore } from '@/store/pouchDB/poll-store';

export default {
  name: 'PollDetails',
  props: {
    id: String,
  },
  setup(props, { root }) {
    const state = reactive({
      poll: {},
    });
    pollStore.read(props.id).then(poll => {
      state.poll = poll;
      root.$route.meta.breadcrumbs[3].text = poll.question;
    });
    const submit = () => {
      pollStore.update(state.poll).then(() => {
        root.$router.back();
      });
    };
    const cancel = () => {
      root.$router.back();
    };
    const addAnswer = () => {
      state.poll.answers.push({
        text: '',
        votes: 0,
      });
    };
    const removeAnswer = answer => {
      state.poll.answers = state.poll.answers.filter(a => a !== answer);
    };
    const deletePoll = () => {
      if (confirm('Are you sure to delete it?')) {
        pollStore.delete(state.poll._id).then(() => {
          root.$router.go(-1);
        });
      }
    };
    return {
      addAnswer,
      cancel,
      deletePoll,
      removeAnswer,
      state,
      submit,
    };
  },
};
</script>
