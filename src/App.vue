<template>
  <h1>{{ msg }}</h1>
  <HelloComponent />
</template>

<script>
import HelloComponent from '~/components/HelloComponent'

export default {
  components: {
    HelloComponent
  },
  data() {
    return {
      msg: 'Hello Vue!!'
    }
  }
}
</script>
