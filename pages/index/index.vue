<template>
  <view class="login-page">
	<view style="margin-bottom: 20px;color:aqua">休闲书吧</view>
    <view class="login-form">
      <view class="form-group">
        <label for="username">用户名:</label>
        <input type="text" id="username" v-model="username" placeholder="请输入用户名" />
      </view>
      <view class="form-group">
        <label for="password">密码:</label>
        <input type="password" id="password" v-model="password" placeholder="请输入密码" />
      </view>
      <button @click="login" class="login-button">账号密码登录</button>
    </view>
    <view class="other-login-methods">
      <view @click="loginWithQQ"><image src="@/assets/QQ.png" style="width: 20px; height: 20px;" alt="QQ登录" /></view>
      <view @click="loginWithWeChat"><image src="@/assets/微信.png"  style="width: 20px; height: 20px;" alt="微信登录" /></view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

console.log(1);
const login = () => {
	uni.switchTab({
		url: '/pages/index1/index',
	});

  console.log('账号密码登录中...');
};

const loginWithQQ = () => {
  console.log('点击了QQ登录按钮');
};

const loginWithWeChat = () => {
  console.log('点击了微信登录按钮');
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://img2.soyoung.com/tieba/ios/post/20190627/3/c49a0115474133fd4f9e592e009e6c8d.jpg");
  height: 100vh;
  background-color: #f3f3f3;
}

.login-form {
  background-color: rgba(255, 255, 255, .4);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
  flex-direction: row;
  display: flex;
  align-items: center;
}

label {
  display: block;
}

input[type="text"],
input[type="password"],
button {
  padding: 0.5rem;
  font-size: 1rem;
}

.login-button {
  width: 100%;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #0056b3;
}

.other-login-methods {
  margin-top: 20px;
  text-align: center;
  display: flex;
  gap:10px;
  flex-direction: row;
}

.other-login-methods text {
  margin-right: 10px;
}

.other-login-methods button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  background: none;
  cursor: pointer;
}
</style>
