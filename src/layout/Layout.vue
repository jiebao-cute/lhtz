<template>
    <div>
        <Header></Header>
        <Sidebar></Sidebar>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header/Header.vue';
import Sidebar from '@/components/sidebar/Sidebar.vue';
export default {
    name: 'Layout',
    components: {
        Header,
        Sidebar
    }
}
</script>

<style lang="scss" scoped></style>