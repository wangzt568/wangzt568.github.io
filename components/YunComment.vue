<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const container = ref<HTMLElement>()
const route = useRoute()
function mountComments() {
  if (!container.value) return
  container.value.replaceChildren()
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.setAttribute('repo', 'wangzt568/wangzt568.github.io')
  const frontmatter = route.meta.frontmatter as { from?: string } | undefined
  // Match the issue term used by Hexo before the route migration.
  script.setAttribute('issue-term', frontmatter?.from || 'pathname')
  script.setAttribute('theme', 'preferred-color-scheme')
  script.crossOrigin = 'anonymous'
  script.async = true
  container.value.append(script)
}
onMounted(mountComments)
watch(() => route.path, mountComments, { flush: 'post' })
</script>

<template>
  <section ref="container" class="yun-card w-full p-4" aria-label="GitHub comments" />
</template>
