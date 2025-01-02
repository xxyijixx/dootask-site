<!-- 产品-组织管理 -->
<template>
    <article class="manage">
        <div class="manage-con">
            <div class="manage-t">
                <h1 class="txt-5004455 manage-h1 mb-16">
                    组织管理
                </h1>
                <h5 class="txt-4001830 manage-h5">
                    统一管理内部和外部工作，实时查看统计数据，透明的目标，可见的进展，可控的绩效
                </h5>
            </div>
            <div class="manage-b mt-80">
                <ul class="manage-ul">
                    <li v-for="(item, index) in manageItems" :key="index"
                        class="manage-ul-item mb-32 " :style="{ '--delay': `${index * 0.1}s` }">
                        <img class="manage-icon mr-16" :src="item.icon" :alt="item.title" />
                        <div class="manage-tit">
                            <h3 class="txt-5002025 manage-h3 mb-16">
                                {{ item.title }}
                            </h3>
                            <h6 class="txt-4001624 manage-h6">
                                {{ item.description }}
                            </h6>
                        </div>
                    </li>
                </ul>
                <div class="manage-svg product-animate-box" :style="{ '--delay': '0.2s' }">
                    <img class="manage-bg theme_light" src="/img/light/product_pic10.svg" alt="顺利打卡上班" />
                    <img class="manage-bg theme_dark" src="/img/dark/product_pic10.svg" alt="顺利打卡上班" />
                    <div class="manage-tips">
                        <img src="/img/product_icon1.svg" alt="出勤签到" />
                        <i class="manage-tips-txt txt-4001822">顺利打卡上班</i>
                    </div>
                    <h2 class="manage-svg-h2 txt-6003652">
                        出勤签到
                    </h2>
                </div>
            </div>
        </div>
    </article>
</template>

<script setup>
const manageItems = [
    {
        icon: '/img/product_subtract.svg',
        title: '考勤统计实时查看',
        description: '随时随地查看出勤数据，记录每个团队成员的工作时间，包括上班时间、下班时间、加班时间等，在企业内部实现目标管理以及绩效管理。'
    },
    {
        icon: '/img/product_subtract.svg',
        title: '极速打卡极致体验',
        description: '系统识别并连接公司wifi自动打卡，告别排队以及打开手机操作，员工不再忘记打卡。'
    },
    {
        icon: '/img/product_subtract.svg',
        title: '考勤数据可视化分析',
        description: '统计每个团队成员的出勤率、迟到次数、早退次数、加班时长等相关数据，并生成可视化的统计图表。通过这些数据和图表，企业管理层可以深入了解团队成员的工作状况和工作效率，为后续的人事安排和绩效考核提供参考依据。'
    }
]
</script>
