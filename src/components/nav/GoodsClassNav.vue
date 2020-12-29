
<template>
  <div class="item-class-show">
    <!-- 使用row网格系统 -->
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '文学综合馆',
          tags: [ '小说', '文学', '传记', '青春', '科幻', '悬疑', '散文', '纪实', '动漫', '惊悚', '言情' ]
        },
        {
          tagName: '童书馆',
          tags: [ '绘本', '科普百科', '儿童文学', '幼儿启蒙', '动漫卡通', '少儿文学', '益智游戏' ]
        },
        {
          tagName: '教育馆',
          tags: [ '中小教辅', '外语学习', '考试', '教材', '字典词典', '课外读物', '字帖', '考研', '初级会计', '二建' ]
        },
        {
          tagName: '经管综合馆',
          tags: [ '管理', '经济', '投资', '会计', '营销', '企业创业', '领导学', '财务管理', '人力资源', '商务实务' ]
        },
        {
          tagName: '生活馆',
          tags: [ '孕产胎教', '育儿家教', '美食', '家居', '健身保健', '旅游地图', '美妆', '体育', '娱乐休闲', '婚恋两性' ]
        },
        {
          tagName: '人文社科馆',
          tags: [ '政治军事', '国学古籍', '历史', '心理', '哲学宗教', '社会科学', '文化', '法律', '世界史', '传统名家' ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid rgb(151, 104, 59);
}
.item-class-group:first-child {
  border-top: 1px solid rgb(212, 147, 62);
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  background-color: #fdc344;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #24906c;
  line-height: 45px;
  cursor: pointer;
}
.item-class-select :hover{
 color: #ff0000
}
</style>
