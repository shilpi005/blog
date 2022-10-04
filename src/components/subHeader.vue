<template>
  <div>
    <v-tabs
      class="outer-tab"
      height="120px"
      fixed-tabs
      hide-slider
      show-arrows
      next-icon="mdi-chevron-right"
      prev-icon="mdi-chevron-left"
    >
      <v-tab
        class="inner-tab"
        v-for="item in items"
        :key="item.datas"
        active-class="active-class"
      >
        <div>
          <div>{{ item.values }}</div>
          <div>{{ item.datas }}</div>
        </div>
      </v-tab>
    </v-tabs>
  </div>
</template>

  <script>
export default {
  name: "subHeader",
  data() {
    return {
      items: [
        { values: 25, datas: "Leads" },
        { values: 25, datas: "Query Mail Sent Leads" },
        { values: 25, datas: "Quotation Sent Client" },
        { values: 25, datas: "Follow up Client" },
        { values: 25, datas: "Carry-forward Leads" },
        { values: 25, datas: "Irrelevent Leads" },
        
      ],
    };
  },
};
</script>

<style scoped>
/* .inner-tab:hover{
background-color: #3584FA;
color:#fff;
} */
.inner-tab {
  border-right: 2px solid #ececec;
}
.active-class {
  background: #3584fa;
  color: #fff;
}
</style>