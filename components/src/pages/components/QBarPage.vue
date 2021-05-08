<template>
  <q-page padding>
    <q-bar>
      <q-btn dense icon="lens" size="8.5px" round flat color="red" />
      <q-btn dense icon="lens" size="8.5px" round flat color="yellow" />
      <q-btn dense icon="lens" size="8.5px" round flat color="green" />
      <q-space />
      <q-icon name="wifi" />
    </q-bar>

    <q-btn label="Click Here" @click="showDialog = true" />

    <q-dialog v-model="showDialog">
      <q-card>
        <q-bar class="bg-grey-7 text-grey-3">
          <div class="cursor-pointer">
            Menu
            <q-menu>
              <q-list>
                <q-item dense clickable>
                  <q-item-section>
                    Save
                  </q-item-section>
                </q-item>
                <q-item dense clickable>
                  <q-item-section>
                    Quit
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>
          <q-space />
          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense flat icon="close" @click="showDialog = false" />
        </q-bar>
        <q-card-section>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam harum, aspernatur alias laborum debitis veniam cumque iusto fuga obcaecati, accusantium error sint? Facere, expedita itaque! Tenetur beatae illum ipsa delectus.
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'QBarPage',
  data () {
    return {
      showDialog: false
    }
  }
}
</script>
