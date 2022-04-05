<template>
    <div>
        <h1>중첩라우터입니다</h1>
        <p>두개의 컴포넌트를 라우팅합니다</p>
        <nav>
            <router-link to='/double/one'>1</router-link>
            <router-link to='/double/two'>2</router-link>
        </nav>
        <!--보이는 공간-->
            <router-view></router-view>
    </div>
</template>

<script>
//연결해주기위해 스크립트사용
export default {
    name : 'DoubleView'
}
</script>