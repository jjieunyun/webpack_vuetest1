<template>
  <div id="app">
    <h3 style="color:red">1. App.vue에서 수정하고 있습니다</h3>
    <p>* 보통은 여기서 수정하지 않고 app.vue에 연결된 라우터나 컴포넌트 화면에 출력</p>
    <p>* 아래 Home과 About은 Router로 제공되고있습니다</p>
    <p>* 아래에 연결된 위치는 index에서 확인가능</p>
    <nav>
      <!--컴포넌트 내용만 바꿈, 새로고침 X , 서버재연결 X-->
      <!--주소의 URL을 바로 넣어줌-->
      <hr>
      <h3 style="color:red">2. Router Links(views폴더에 있음)</h3>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/show">Show</router-link> | 
      <router-link to="/double">중첩</router-link> |
      <router-link to="/doubledynamic">사용자페이지</router-link>
    </nav>

      <hr>
      <h3 style="color:red">3. $router속성을 이용해서 router 주소 가져오기</h3>
      <p>router-link뿐만 아니라 다양한 방법으로 가져올 수있다.</p>
      (1) $router.push({name : 'show'})를 이용해 가져오는 방법 : <button @click="$router.push({name : 'show'})">show</button>
      <br>
      (2) path : `/double`를 이용하여 가져오는 방법 : <button @click="$router.push('/double')">중첩</button> <br>

      (3) dynamic의 path값을 이용해서 v-for구문으로 가져오는 방법 : 
          <button 
          v-for="(id,i) in 4" 
          :key="i"
          @click="$router.push(`/dynamic/${id}`)"
          >{{id}}</button>
          <br>

      (4) 객체로 가져오기 name이랑 params랑 가져옴:  
          <button 
          v-for="(num,i) in 4"
          :key="i"
          @click="$router.push({name: 'doubledynamicid', params : {id : num}})"
          >
            {{num}}
          </button>

    <ul>
      <!-- 주소값을 조합해서 출력하고 싶을 때 -->
      <!-- 바인드를 이용해서 문자열로 바꿔서 넣어서 수정가능 -->
      <li v-for="(num, i) in 4" :key="i">
       <span>라우터링크   </span>
        <router-link :to="`/dynamic/${num}`">
          dynamic {{num}}
        </router-link>
      </li>
    </ul>


    <!--새로고침이 일어남 - a , from-->
    <a href="http://">하이퍼링크</a>
    <hr>
    <h3 style="color:red">4.라우터가 보여지는 부분</h3>
    <p style="color:red">router-view로 연결함</p>
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
