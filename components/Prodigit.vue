<!-- 产品-数字化绩效 -->
<template>
    <article class="prodigit">
        <div class="prodigit-con">
            <h1 class="txt-5004455 prodigit-h1">数字化管理</h1>
            <div class="prodigit-layout">
                <ul class="prodigit-ul">
                    <li 
                        v-for="(item, index) in digitalManagementItems" 
                        :key="index"
                        class="prodigit-ul-item"
                        :style="{ '--delay': `${index * 0.1}s` }"
                    >
                        <img 
                            class="prodigit-icon mb-24" 
                            :src="item.icon" 
                            :alt="item.title" 
                        />
                        <h4 class="txt-5002025 prodigit-h4 mb-16">{{ item.title }}</h4>
                        <h6 class="txt-4001624 prodigit-h6">{{ item.description }}</h6>
                    </li>
                </ul>
                <div class="prodigit-pic">
                    <img 
                        class="pic theme_light" 
                        src="/public/img/light/zh_product_pic12.png" 
                        alt="数字化管理" 
                    />
                    <img 
                        class="pic theme_dark" 
                        src="~/public/img/dark/zh_product_pic12.png" 
                        alt="数字化管理" 
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
const digitalManagementItems = [
    {
        icon: '/img/prodigit_icon1.svg',
        title: '数据可视化',
        description: '将复杂的工作数据转化为直观的图表和仪表盘，帮助管理者快速洞察团队工作状况，做出更明智的决策。'
    },
    {
        icon: '/img/prodigit_icon2.svg',
        title: '智能分析',
        description: '利用AI技术对团队工作数据进行深度分析，自动生成工作效率报告，识别潜在的工作瓶颈和改进机会。'
    },
    {
        icon: '/img/prodigit_icon3.svg',
        title: '实时追踪',
        description: '实时监控项目进度、任务完成情况和团队绩效，确保团队目标的透明度和可追溯性。'
    }
]
</script>
