<template>
  <q-page padding>
    <q-avatar
      color="blue"
      icon="person"
      text-color="white"
    />
    <br />
    <br />
    <q-avatar
      color="blue"
      text-color="white"
    >
      RS
    </q-avatar>
    <br />
    <br />
    <q-avatar
      color="blue"
      square
      rounded
    >
      <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
    </q-avatar>
    <br />
    <br />
    <q-chip>
      <q-avatar
        color="blue"
      >
        <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
      </q-avatar>
      Aang
    </q-chip>
    <br />
    <br />
    <q-btn round>
      <q-avatar
        color="blue"
      >
        <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
      </q-avatar>
    </q-btn>

  </q-page>
</template>

<script>
export default {
  name: 'QAvatarPage'
}
</script>
