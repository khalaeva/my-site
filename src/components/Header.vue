<template>
    <div class="header">
        <div class="header-logo">
            <h1>AH</h1>
        </div>
        <div class="header-menu">
            <h2>About</h2>
            <h2>Stack</h2>
            <h2>Projects</h2>
            <h2>Contacts</h2>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '@/styles/style';
@import '@/styles/fonts';
.header{
    margin: 0px  30px;
    padding: 20px 70px 0 70px;
    display: flex;
    justify-content: space-between;
    height: 85px;
    &-logo {
        font-family: 'Mori';
    }
    &-menu {
        padding: 0 50px 0 50px;
        width: 70%;
        display: flex;
        justify-content: space-between;
        font-family: 'Mori-Regular';
    }
    border-bottom: 1px solid black;
}
</style>