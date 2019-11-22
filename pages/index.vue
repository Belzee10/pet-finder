<template>
  <v-row>
    <v-col class="d-flex flex-column align-center" cols="12">
      <v-img :src="require('@/assets/images/logo.svg')" width="100"></v-img>
      <h1 class="font-weight-light">Pet Finder</h1>
    </v-col>
    <v-col cols="8" offset="2">
      <v-list>
        <v-list-item v-for="(item, index) in pets" :key="item.id" @click="">
          <v-list-item-avatar>
            <v-img :src="require(`@/assets/images/${index + 1}.svg`)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn v-if="!item.adopted" small color="primary">Adopt</v-btn>
            <div v-else>
              <span style="color: black;">Adopted</span>
            </div>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  async asyncData({ $axios }) {
    const pets = await $axios.$get('http://localhost:3100/pets');
    return { pets };
  }
};
</script>
