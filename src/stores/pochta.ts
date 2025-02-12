import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import type { Role } from '@/classes/types'
import type Module from '@/classes/Module'
import type Event from '@/classes/Event'

const NAME = 'POCHTA_STORE'

export const usePochtaStore = defineStore(NAME, () => {
  const eventIds: Ref<string[]> = ref(useLocalStorage('eventIds', []))
  const event: Ref<Partial<Event>> = ref(useLocalStorage('event', {}))
  const module: Ref<Partial<Module>> = ref(useLocalStorage('module', {}))
  const moduleIds: Ref<string[]> = ref(useLocalStorage('moduleIds', []))
  const role: Ref<Role> = ref(useLocalStorage('role', {
    name: 'student',
    icon: 'fa-solid fa-user-graduate',
  }))

  function iam(newRole: Role) {
    role.value = newRole
  }

  function register(id: string) {
    eventIds.value.push(id)
  }

  function unregister(id: string) {
    eventIds.value = eventIds.value.filter(eventId => eventId != id)
  }

  function registerModule(id: string) {
    moduleIds.value.push(id)
  }

  function unregisterModule(id: string) {
    moduleIds.value = moduleIds.value.filter(moduleId => moduleId != id)
  }

  return { eventIds, event, module, moduleIds, role, iam, register, unregister, registerModule, unregisterModule }
})
