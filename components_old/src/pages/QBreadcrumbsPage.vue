<template>
  <q-page padding>
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" to="/">
        Home
      </q-breadcrumbs-el>
      <q-breadcrumbs-el icon="widgets">
        Components
      </q-breadcrumbs-el>
      <q-breadcrumbs-el icon="scatter_plot" to="breadcrumbs">
        Breadcrumbs
      </q-breadcrumbs-el>
      <q-breadcrumbs-el v-if="tab">
        {{ tab }}
      </q-breadcrumbs-el>
    </q-breadcrumbs>
    <q-tabs v-model="tab">
      <q-tab name="one">One</q-tab>
      <q-tab name="two">Two</q-tab>
      <q-tab name="three">Three</q-tab>
    </q-tabs>
  </q-page>
</template>

<script>
export default {
  name: 'QBreadcrumbsPage',
  data () {
    return {
      tab: ''
    }
  }
}
</script>
