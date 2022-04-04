<template>
  <div id="app">
    <h1>App.vue에서 수정하고 있습니다</h1>
    <p>보통은 여기서 수정하지 않고 app.vue에 연결된 라우터나 컴포넌트 화면에 출력</p>
    <p>아래 Home과 About은 Router로 제공되고있습니다</p>
    <p>아래에 연결된 위치는 index에서 확인가능</p>
    <nav>
      <!--컴포넌트 내용만 바꿈, 새로고침 X , 서버재연결 X-->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/show">Show</router-link> | 
      
    </nav>
    <ul>
      <li v-for="(num, i) in 4" :key="i"></li>
    <!--바인드를 이용해서 문자열로 바꿔 넣어서 수정 가능-->
    <router-link :to="`/dynamic/${num}`"> dynamic{{num}}</router-link>
    </ul>


    <!--새로고침이 일어남 - a , from-->
    <a href="http://">하이퍼링크</a>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
