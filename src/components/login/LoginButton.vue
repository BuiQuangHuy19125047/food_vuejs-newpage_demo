<template>
    <div id="login-button">
        <a v-bind:href="link" class="button-content">
            <i class="material-icons button-icon">{{icon}}</i>
            {{text}}
        </a>
    </div>
</template>

<script>
export default {
    props:{
        text: String,
        icon: String,
        link: String,
    }
}
</script>

<style scoped>
#login-button{
    position: relative;
    display: flex;
    max-width: 100%;
    width: 360px;
    min-height: 40px;    
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    border: none;
    /* cursor: pointer; */
    margin-top: 8px;
}

.button-icon{
    margin-right: 8px;
}

.button-content{
    padding: 8px 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
}
</style>