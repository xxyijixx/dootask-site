<template>
  <div>
    <HeaderBar></HeaderBar>
    <!-- 内容区域 -->
    <main>
      <!-- 主要区域划分 -->
      <section>
        <Indexmain></Indexmain>
        <!-- 合作公司区域 -->
        <Companies></Companies>
        <!-- 功能卡片区域 -->
        <FunctionCard></FunctionCard>
        <!-- 为什么选择我们区域 -->
        <WhyChoose></WhyChoose>
        <Collaboration></Collaboration>
      </section>
    </main>
    <FooterBar></FooterBar>
  </div>
</template>

<script setup>
import Indexmain from '~/components/Indexmain.vue'
import Companies from '~/components/Companies.vue'
import FunctionCard from '~/components/FunctionCard.vue'
import WhyChoose from '~/components/WhyChoose.vue'
import Collaboration from '~/components/Collaboration.vue'
import FooterBar from '~/components/FooterBar.vue'
</script>

