<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        Components
        </q-item-label>
        <q-item clickable to="/ajax-bar">
          <q-item-label>
            QAjaxBar
          </q-item-label>
        </q-item>
        <q-item clickable to="/avatar">
          <q-item-label>
            QAvatar
          </q-item-label>
        </q-item>
        <q-item clickable to="/badge">
          <q-item-label>
            QBadge
          </q-item-label>
        </q-item>
        <q-item clickable to="/banner">
          <q-item-label>
            QBanner
          </q-item-label>
        </q-item>
        <q-item clickable to="/bar">
          <q-item-label>
            QBar
          </q-item-label>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
