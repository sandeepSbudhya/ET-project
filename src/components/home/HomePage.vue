<template>
  <v-card @toggle-drawer="alert('toggled')">

    <v-navigation-drawer @toggle-drawer="drawer=!drawer" absolute>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </v-card>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = true;
    },
  },
};
</script>