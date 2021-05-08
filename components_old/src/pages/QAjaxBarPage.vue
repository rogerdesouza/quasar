<template>
  <q-page padding>
    <q-ajax-bar
      color="green"
      size="14px"
      position="bottom"

      ref="bar"
    />
    <q-btn
      label="Fake Request"
      @click="fakeAjaxRequest"
    />
    <pre> {{ result }}</pre>
  </q-page>
</template>

<script>
export default {
  name: 'QAjaxBarPage',
  data () {
    return {
      result: null
    }
  },
  methods: {
    fakeAjaxRequest () {
      // this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => {
      //     this.result = response.data
      //   })
      const bar = this.$refs.bar
      bar.start()
      setTimeout(() => {
        bar.stop()
      }, 3000)
    }
  }
}
</script>
