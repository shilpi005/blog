<template>
 <div class="main-div">
  <navBar />
  <searchFilter />
  <subHeader />
  <dataTable />
  <!-- <searchFilter />
  <subHeader />
  <dataTable /> -->
 </div>
</template>

<script>
import navBar from '../components/header/navBar.vue';
import searchFilter from '../components/searchFilter.vue';
import subHeader from '../components/subHeader.vue';
import dataTable from '../components/dataTable.vue';
// import addLead from '../components/addLead.vue';
  export default {
    name:'homeView',
    components: {
      navBar,
      searchFilter,
      subHeader,
      dataTable,
      // addLead
    },
  }
</script>

<style scoped>
.main-div{
  background-color: #ECECEC;
  min-height:100%;
}
</style>
