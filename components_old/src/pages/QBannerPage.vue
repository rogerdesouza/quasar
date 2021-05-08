<template>
  <q-page padding>
    <q-banner class="bg-blue text-white" rounded dense inline-actions
      dark v-if="notificationBar">
      <template v-slot:avatar>
        <q-avatar>
          <q-icon name="wifi" />
        </q-avatar>
      </template>
      The wi-fi is disconected
      <template v-slot:action>
        <q-btn label="Turn on" flat />
        <q-btn label="Dismiss" flat @click="notificationBar=false" />
      </template>
    </q-banner>
  </q-page>
</template>

<script>
export default {
  name: 'QBannerPage',
  data () {
    return {
      notificationBar: true
    }
  }
}
</script>
