<template>
  <view class="book-page">
    <!-- 顶部标题栏 -->
    <view class="header">
      <text class="title">图书展示</text>
    </view>

    <!-- 书籍列表 -->
    <view class="book-list">
      <view v-for="(book, index) in books" :key="index" class="book-item">
        <image :src="book.cover" class="cover" />
        <view class="info" style="display: flex;align-items: center;justify-content: space-between;">
          <text class="title">{{ book.title }}</text>
        </view>
		<View>
			 <text class="author">{{ book.author }}</text>
		</View>
		<View>
			 <text class="price">数量:{{ book.num }}</text>
		</View>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      books: [
		{ title: '活着', author: '余华', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_156,h_208,q_100/5dd12d3b/group6/M00/2B/41/CmQUOFcMj9CEBj_gAAAAAI1eU64427806210.jpg?v=pM2Jvx9M&t=CmQUN16Is6s." },
        { title: '白夜行', author: '东野圭吾', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_156,h_208,q_100/4d34e2fc/group6/M00/14/0A/CmQUN1X04TeEaeGYAAAAAAfqtYc360167620.jpg?v=BoDMKYZ2&t=CmQUN16Ir6s." },
        { title: '解忧杂货店', author: '东野圭吾', num: 10, cover: "" },
        { title: '追风筝的人', author: '卡勒德·胡赛尼', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/c7e8ee64/group6/M00/25/8F/CmQUNlX1xgeEL1ZwAAAAABLSfxc881652627.jpg?v=3aK2c17z&t=CmQUNmJT7t0." },
        { title: '三体', author: '刘慈欣', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/08c0f360/group61/M00/9C/7A/CmQUOVycjHiEHEavAAAAAAqB0h8765287492.jpg?v=zzHQJdFa&t=CmQUOV6IxR4." },
        { title: '围城', author: '钱钟书', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/875dbc52/group6/M00/95/BE/CmQUNllwdTmEeTyFAAAAAKg5HN8712314063.jpg?v=E-Vtnz0n&t=CmQUNl6IuFw." },
        { title: '1984', author: '乔治·奥威尔', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/0c2d1957/group6/M00/14/F7/CmQUNlX04q2EZ7qFAAAAABPsWkI259942924.jpg?v=K3Xum8ic&t=CmQUNmQFm90." },
        { title: '人间失格', author: '太宰治', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/1257343b/group61/M00/4C/EA/CmQUOVxGUheERsM0AAAAAM2NtEM938875778.jpg?v=G5Cmkk5h&t=CmQUOV6Iv1Y." },
        { title: '平凡的世界', author: '路遥', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/0fc64390/group61/M00/8F/C6/CmQUOVyQnaKES5D5AAAAAKy6Afc541531539.jpg?v=BwLL8pOf&t=CmQUOWLD6bI." },
        { title: '挪威的森林', author: '村上春树', num: 10, cover: "https://bookbk.img.zhangyue01.com/idc_1/m_1,w_300,h_400/c12fd586/group61/M00/A5/46/CmQUOGSBPe2EVwveAAAAACLjV8k985357597.jpg?v=xGwEUumG&t=fwAAAWZCzw0." }
        // 添加更多书籍...
      ]
    };
  }
};
</script>

<style scoped>
.book-page {
  padding: 20rpx;
}

.header {
  margin-bottom: 20rpx;
  text-align: center;
}

.title {
  font-size: 24rpx;
  font-weight: bold;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20rpx;
}

.book-item {
  width: calc(33.33% - 20rpx);
  margin-bottom: 20rpx;
  padding: 20rpx;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 0 4px rgba(0, 0, 0, .3);
}

.cover {
  width: 100%;
  height: 240rpx;
}

.info {
  flex: 1;
}

.title {
  font-size: 28rpx;
  font-weight: bold;
   overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.author {
  font-size: 24rpx;
  width: 100%;
  color: #666;
   overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
}

.price {
  font-size: 24rpx;
  color: #f60;
}
</style>
