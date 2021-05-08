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
        <q-item
          v-for="menuItem in componentMenuItens"
          :key="menuItem"
          clickable
          :to="menuItem"
        >
          <q-item-label>
            Q{{ menuItem }}
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

import componentImporter from '../router/componentImporter'

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      componentMenuItens: componentImporter.getPathNames()
    }
  }
}
</script>
