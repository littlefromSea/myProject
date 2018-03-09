
<template>
    <div id="hello">
      <ul v-for="(item,index) in items">
        <li @click="func(index)">{{item.content}}</li>
      </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    name: "Hello";
    return {
      items: [{ content: "nishi" }]
    };
  },
  methods: {
    func: function(idx) {
      this.$router.push({
        path: "./List",
        query: {
          msg: this.items[idx].content
        }
      });
    },
    getDate: function() {
      axios
        .post("https://bird.ioliu.cn/joke/rand?", {
          type: "text"
        })
        .then(
          function(res) {
            var data = res.data;
            if (data.status.code == 200) {
              this.items = data.data;
              console.log(this.items);
            } else {
              throw data.status.code;
            }
          }.bind(this)
        )
        .catch(function(error) {
          throw error;
        });
    }
  },
  mounted: function() {
    this.getDate(); //调取接口
  }
};
</script>

<style scoped>
ul li {
  border: 1px solid #000;
  padding: 5px;
  margin: 5px;
}
</style>