<template>
  <div class="i18n">
    {{$t('message.el.colorpicker.confirm')}}
    <p>{{ '15602215864' | formatPhone }}</p>
    <p>{{'*'|repeat(3)}}</p>
    <p>{{'starta'|replace('a','**')}}</p>
    <p>{{'15602215864'|secretPhone}}</p>
    
  </div>
</template>

<script>

export default {
  name: 'i18n',
}
</script>

<style lang="scss" scoped>

</style>
