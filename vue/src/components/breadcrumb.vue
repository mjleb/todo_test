<template>
    <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item" ><a href="/"><i class="fa fa-home" aria-hidden="true"></i></a></li>
        
        <li class="breadcrumb-item" v-if="parents.title"><a :href="parents.url">{{parents.title}}</a></li>
        <li class="breadcrumb-item active" aria-current="page">{{title}}</li>
    </ol>
    </nav>
</template>

<script>


export default {
    name: 'Breadcrumb',
    props: ['title','parents'],
}
</script>