<template>
  <div class="poll">
    <v-container>
      <v-card width="600">
        <v-card-title> Polls </v-card-title>

        <v-card-text>
          <v-list>
            <span :key="poll.id" v-for="poll of state.polls">
              <v-divider />
              <v-list-item :key="poll._id" two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ poll.question }}</v-list-item-title>
                  <span class="mx-4">
                    <v-list-item-subtitle
                      :key="answer.text"
                      v-for="answer of poll.answers"
                    >
                      {{ answer.text }} ({{ answer.votes }})
                    </v-list-item-subtitle>
                  </span>
                </v-list-item-content>

                <v-list-item-action>
                  <span>
                    <v-btn
                      :disabled="poll.answers.length === 0 || poll.closed"
                      :to="'/playground/poll/' + poll._id"
                      color="primary"
                      fab
                      small
                    >
                      <v-icon v-if="poll.multipleAnswers">
                        mdi-checkbox-marked-outline
                      </v-icon>
                      <v-icon v-if="!poll.multipleAnswers">
                        mdi-radiobox-marked
                      </v-icon>
                    </v-btn>
                    <v-btn
                      :to="'/playground/poll/' + poll._id + '/edit'"
                      v-if="isTutor()"
                      color="primary"
                      icon
                    >
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                  </span>
                </v-list-item-action>
              </v-list-item>
            </span>
          </v-list>
        </v-card-text>

        <v-card-actions>
          <v-btn v-if="isTutor()" @click="addPoll" outlined>add poll</v-btn>
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
  name: 'Poll',
  setup() {
    const state = reactive({
      polls: [],
    });
    const init = () => {
      pollStore.list('id').then(polls => {
        state.polls = polls;
      });
    };
    init();
    const isTutor = () => pochtaStore.role.name === 'tutor';
    const addPoll = () => {
      pollStore
        .add({
          id: state.polls.length + 1,
          question: 'What is your question?',
          answers: [],
        })
        .then(() => {
          init();
        });
    };
    return {
      addPoll,
      isTutor,
      state,
    };
  },
};
</script>
