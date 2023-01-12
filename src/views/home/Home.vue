<template>
    <div class="home-container">

        <!-- 头部 Star -->
        <div class="header">
            <div class="logo" href="http://m.kuacoo.com/"></div>
            <div class="search"></div>
        </div>
        <!-- 头部 End -->

        <!-- 轮播 Star -->

        <!-- 轮播 End -->

        <!-- 尾部 Star -->
        <div class="footer">
            <div class="erea">中间坑社区</div>
            <div class="bei">粤ICP备2021132447号</div>
        </div>
        <!-- 尾部 End -->

    </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  methods: {

  },
  mounted () {

  }
}

</script>

<style lang="less">
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.1733rem;
    background: #333;
    padding: 0 .32rem;
    .logo{
        width: 2.4267rem;
        height: 100%;
        background: url(//p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1548732472557170/logo_shouyang_20190129.jpg) no-repeat center center;
        background-size: cover;
    }
    .search{
        width: .5333rem;
        height: .5333rem;
        background: url(//p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1548732472557170/icon_sousuo_shouyang_20190129.png) no-repeat center center;
        background-size: cover;
    }
  }
  .footer{
        width: 100%;
        height: 2.2133rem;
        background: #444;
        color: #fff;
        .erea{
            padding: .5333rem 0 .2667rem 0;
            text-align: center;
            font-size: .3467rem;
        }
        .bei{
            text-align: center;
            font-size: .2933rem;
        }
    }

</style>
