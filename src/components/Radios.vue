<template>

    <div class="radios">
      <label class="radios-label" v-for="item in options">
        <input type="radio" v-model="currentValue"
               class="radios-item"
               :value="item._id">
          <span class="radios-title-wrap">{{item.name}}</span>
      </label>
    </div>

</template>

<script>
    export default {
        name: "Radios",
      props:{
        options:{
          type:Array
        },
        value:String
      },
      data(){
          return{
            currentValue:this.value
          }
      },
      watch:{
        value(val){
          this.currentValue=val
        },
        currentValue(val){
          this.$emit('input',val)
          this.$emit('change',val)
        }
      }

    }
</script>

<style scoped>
  .radios{
    margin-bottom: 30px;
  }
.radios-item{
  display: none;
}
.radios-title-wrap{
    padding: 10px 15px;
    font-size: 13px;
    color: #f1f;
    border: 1px solid #f1f1f1;
    font-weight: 400;
    border-radius: 4px;
    margin: 0 10px;
   width: 40px;
  }
 .radios-item:checked+.radios-title-wrap{
   color: #fff;
   background: #4091ff;
 }

</style>
