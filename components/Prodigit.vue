<template>
    <article class="prodigit">
        <div class="prodigit-con">
            <h1 class="txt-5004455 prodigit-h1">数字化绩效</h1>
            <div class="prodigit-pic">
                <img 
                class="pic mt-80 theme_light" 
                src="/img/light/zh_product_pic11.png" 
                alt="数字化绩效" 
                />
                <img 
                class="pic mt-80 theme_dark" 
                src="/img/dark/zh_product_pic11.png" 
                alt="数字化绩效" 
                />
            </div>
            <div class="prodigit-layout">
            <ul class="prodigit-ul">
                <li 
                v-for="(item, index) in performanceItems" 
                :key="index"
                class="prodigit-ul-item"
                :style="{ '--delay': `${index * 0.1}s` }"
                >
                <i class="icon mb-24"></i>
                <h5 class="txt-5002025 performance-h5 mb-4">
                    {{ item.titleFirst }}
                </h5>
                <h5 class="txt-5002025 performance-h5 mb-16">
                    {{ item.titleSecond }}
                </h5>
                <h6 class="txt-4001624 performance-h6">
                    {{ item.description }}
                </h6>
                </li>
            </ul>
            </div>
        </div>
    </article>
</template>

<script setup>
    const performanceItems = [
        {
        titleFirst: '目标设定和跟踪，',
        titleSecond: '团队更聚焦',
        description: '帮助团队成员设定工作目标和KPI，并进行跟踪和管理，以便及时关注任务进展情况。'
        },
        {
        titleFirst: '绩效评估和反馈，',
        titleSecond: '管理更省心',
        description: '支持对团队成员的绩效进行评估和反馈，根据任务完成情况，自动生成绩效报告和统计图表，为后续的人事管理和绩效考核提供参考依据。'
        },
        {
        titleFirst: '数据可视化分析，',
        titleSecond: '结果更直观',
        description: '将任务完成情况、团队合作效率和个人绩效等数据转化为直观和易于理解的图表和数据分析，更好地了解团队成员的工作表现和绩效状况，并进行针对性的培训和指导。'
        },
        {
        titleFirst: '自定义报告和分析，',
        titleSecond: '服务更个性化',
        description: '用户可以根据自己的需求和业务流程，自定义绩效考核指标和报告内容，并进行分析，更好地符合团队成员的实际工作需求，以及企业的具体业务情况。'
        }
    ]
</script>

