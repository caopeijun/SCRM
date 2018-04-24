<template>
    <div class="navbar" >
      <ul>
      	<li style="border-bottom: 0.03rem solid #E35D40;color: #E35D40;">待审核</li>
      	<li>待确认</li>
      	<li>待付款</li>
      	<li>待发货</li>
      	<li>待收货</li>
      	<li>全部</li>
      </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style>


 * {
  margin: 0;
  padding: 0;
  text-decoration:none;
  list-style: none;
}
 /* .icon-shouye-copy-copy-copy,.icon-wode1,.icon-gouwu,.icon-faxian{
   font-size: 0.6rem;
    color: black;
  } */

  .navbar{
      position: relative;
      /*margin-top: 1.52rem;*/
      width: 100%;
      text-align: center;
      background: #fff;
      height: 1rem;
      font-size: 0.37rem;
      color: #333;
    }
    .navbar ul li{
    	float: left;
    	margin-left: 0.3rem;margin-right: 0.3rem;
    	height: 0.85rem;line-height: 0.85rem;margin-top: 0.1rem;
    }
  
</style>

