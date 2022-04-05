<template>
    <div>
        <h3>{{$route.params.id}}</h3>
        <p>동적라우팅을 하고있습니다</p>
    </div>
</template>

<script>
export default {
    name : 'DynamicComponent'
}
</script>