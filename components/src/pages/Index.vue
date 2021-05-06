<template>
  <q-page class="flex flex-center">
    <!-- <q-input
      label="Name"
      v-model="name"
      outlined
      rounded
      color="green"
      standout="bg-green text-white"
    >
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    <q-input
      label="Name"
      v-model="name"
      outlined
      color="green"
    >
    can use append, before or after to
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
    </q-input>
    -->
    <q-btn
      color="red"
      label="Buy Me!!"
      no-caps
      push
      icon="flag"
      @click="$q.notify({
        message: 'Crushing it at quasar!',
        color: 'blue',
        position: 'center',
        icon: 'thumb_up'
      })"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      name: ''
    }
  }
}
</script>
