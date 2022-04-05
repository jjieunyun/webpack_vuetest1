<template>
  <div class="hello">
    <p style="color:blue">* HelloWorld.vue입니다 이곳에서 아래 링크들을 보여주고 있습니다</p>
    <p style="color:blue">** JSON Data를 가져와서 출력함</p>

    <!-- 아래 JSON데이터를 출력-->
    <!-- JSON은 반드시 자바스크립트 객체의 형태로 들어온다-->
    <!-- 사용할 속성의 이름을 알아두고 가져오자 -->
    <p>{{datas22.language[0]}}</p>

    <p style="color:blue">(1)원하는 값들만 v-for를 이용해서 출력</p>
    <p v-for= "(data,i) in datas22.language" :key="i">
      {{data.name}}
    </p>

    <p style="color:blue">(2)원하는 값들만 v-for를 이용해서 출력</p>
    <p v-for= "(student,i) in students.students" :key="i">
      이름 : {{student.name}} ,나이 : {{student.age}}
    </p>
  </div>
</template>

<script>
//JSON Data연결방법
//@를 사용하면 src파일로 연결됨
import datas from '@/assets/datas.json'
import students from '@/assets/students.json'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data : function () {
    return {
      //변수뒤의 이름은 import해온 이름과 동일해야함
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