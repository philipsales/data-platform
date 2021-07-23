<template>
  <v-container class="generic-container">
  <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-card>
      <v-row class="">
        <v-col cols="5" class="valueset-input">
          <h2 class="form-subheader">Role Description</h2>
          <br>
          <form style="background-color: rd">
            <!-- <v-text-field
              outlined
              dense
              label="roleId"
              required
            ></v-text-field> -->
            <v-text-field
              outlined
              dense
              label="Role Name"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="Module"
              required
            ></v-text-field>
            <v-text-field
              outlined
              dense
              label="status"
              required
            ></v-text-field>

            <h2 class="form-subheader">Role Permissions</h2>
              <br>
              <v-data-table
                :headers="selectedPermissions.headers"
                :items="selectedPermissions.rows"
                :items-per-page="5"
                class="elevation-1">
                <template v-slot:item.action="{ item }">
                  <v-icon color="blue darken-1"
                    v-model="item.action"
                    text >mdi-delete</v-icon>
                </template>
              </v-data-table>
              <br>
            <v-btn
              color="pink"
              dark
              @click.stop="roleDrawer = !roleDrawer"
            >
              Toggle
            </v-btn>
            <v-btn
              class="mr-4 primary">
              submit
            </v-btn>
            </form>
        </v-col>
        <v-divider vertical inset></v-divider>
        <v-col cols="7" class="valueset-input">
          <h2 class="form-subheader">Permissions</h2>
          <br>
          <v-data-table
            :headers="overallPermissions.headers"
            :items="overallPermissions.rows"
            item-key="permissionId"
            :items-per-page="15"
            show-select
            class="elevation-1">
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
   <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="pink"
          dark
          @click.stop="roleDrawer = !roleDrawer"
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="roleDrawer"
      absolute
      right
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
    </v-container>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'RoleCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      roleDrawer: null,
      headerTitle: 'Create Role',
      items: [
        { title: 'Home', icon: 'mdi-home-city' },
        { title: 'My Account', icon: 'mdi-account' },
        { title: 'Users', icon: 'mdi-account-group-outline' },
      ],
      selectedPermissions: {
        headers: [
          { text: 'Module', value: 'module' },
          { text: 'Scope', value: 'scope' },
          { text: 'Function', value: 'function' },
          {
            text: '',
            value: 'action',
          },
        ],
        rows: [
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'create subset',
          },
        ],
      },
      overallPermissions: {
        headers: [
          {
            text: '',
            value: 'action',
          },
          { text: 'Module', value: 'module' },
          { text: 'Scope', value: 'scope' },
          { text: 'Function', value: 'function' },
          { text: 'Permission', value: 'permissionId' },
        ],
        rows: [
          {
            permissionId: '1',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            permissionId: '2',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
          {
            permissionId: '3',
            module: 'Terminology Server',
            scope: 'Subset',
            function: 'view subset',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.valueset-input {
  padding: 40px;
}
.valueset-search {
  padding: 40px;
}
</style>
