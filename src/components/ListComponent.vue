<template>
    <div class="scrolling-component" ref="scrollComponent">
        <PostComponent v-for="(post,idx) in posts" 
        :post="post" :key="idx" />
    </div>
</template>



<script>
import getPosts from "../scripts/postLoader.js"
import {ref, onMounted, onUnmounted} from "@vue/composition-api"
import PostComponent from './PostComponent.vue'

export default {
    components: { PostComponent },
    name: "ListComponent",
    setup() {
        const posts = ref(getPosts(10))
		const scrollComponent = ref(null)

        const loadMorePosts = () => {
			let newPosts = getPosts(10)
			posts.value.push(...newPosts)
		}

        const handleScroll = () => {
			let element = scrollComponent.value
			if ( element.getBoundingClientRect().bottom < window.innerHeight ) {
				loadMorePosts()
			}
		}

        onMounted(() => {
			window.addEventListener("scroll", handleScroll)
		})

		onUnmounted(() => {
			window.removeEventListener("scroll", handleScroll)
		})
        return {
			posts,
			scrollComponent
		}
    }
}
</script>