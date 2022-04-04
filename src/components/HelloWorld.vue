<template>
  <div class="hello">
    <h3>HelloWorld.vue입니다 이곳에서 아래 링크들을 보여주고 있습니다</h3>
    <h1>{{ msg }}</h1>
    <!-- 아래 JSON데이터를 출력-->
    <!-- JSON은 반드시 자바스크립트 객체의 형태로 들어온다-->
    <!-- 사용할 속성의 이름을 알아두고 가져오자 -->
    <p>{{datas22.language[0]}}</p>

    <p v-for= "(data,i) in datas22.language" :key="i">
      {{data.name}}
      </p>
    <p v-for= "(student,i) in students.students" :key="i">
      이름 : {{student.name}} ,나이 : {{student.age}}
    </p>
  </div>
</template>

<script>
import datas from '@/assets/datas.json'
import students from '@/assets/students.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function () {
    return {
      datas22 : datas,
      students : students,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>