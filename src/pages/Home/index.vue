<template>
  <div class="hello">
    <div v-for="(item, i) in list" :key="i">
      <el-card class="box-card">
        <div v-if="item.description">
          <div slot="header" class="clearfix">
            <span class="icon"><img :src="item.logo" alt=""/></span>
            <el-link :underline="false" type="primary" :href="item.url">
              {{ i + 1 }}. {{ item.title }}
            </el-link
            >
          </div>
          <div class="text item">
            {{ item.description }}
          </div>
        </div>
        <div v-else>
          <div class="text item clearfix">
            <span class="icon"><img :src="item.logo" alt=""/></span>
            <el-link :underline="false" type="primary" :href="item.url">
              {{ i + 1 }}. {{ item.title }}
            </el-link>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
//过滤没营养的平台
const filterDomain = ['s.weibo.com', 'mp.weixin.qq.com', 'baidu.com', 'douyin'];
export default {
  name: "page_home",
  props: {
    msg: String,
  },
  data() {
    return {
      list: [ ],
    };
  },
    computed:{
      dataList(){
          return this.list.filter(({domain}) => {
              return !filterDomain.includes(domain);
          });
      }
    },
  methods: {
    getList() {
      axios.get("/today/hot").then((res) => {
        this.list = res?.data?.data?.items;
      }).catch(() => {
          alert('网络异常')
      })
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
.hello {
  max-width: 700px;
  margin: 40px auto;
}

.clearfix {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.el-card {
  margin-bottom: 15px;
}

img {
  width: 100%;
}

.icon {
  width: 22px;
  height: 0;
  padding-bottom: 22px;
  margin-right: 5px;

  display: inline-block;
}
</style>
