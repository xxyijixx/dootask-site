<!-- 解决方案-场景应用 -->
<template>
    <article class="app">
        <div class="bg-style">
            <div class="app-con">
            <div class="app-tit">
                <h1 class="txt-5004455 app-h1 mb-16">场景应用</h1>
                <div style="text-align: center">
                <h6 class="txt-4001830 app-h5" style="width: 600px">
                    该产品支持各种应用场景，帮助团队协作
                </h6>
                </div>
            </div>
            <ul class="app-ul mt-80">
                <li 
                v-for="(item, index) in sceneApplications" 
                :key="index" 
                class="app-ul-item"
                :class="{ 'mb-48': index < sceneApplications.length - 1 }"
                >
                <div class="app-bg-box">
                    <img 
                    class="app-bg" 
                    :id="`solution_pic${index + 1}`" 
                    :src="item.picSrc" 
                    :alt="item.title" 
                    />
                </div>
                <h4 class="txt-5002025 app-h4 mb-16">{{ item.title }}</h4>
                <h6 class="txt-4001624 app-h6">{{ item.description }}</h6>
                </li>
            </ul>
            </div>
        </div>
    </article>
</template>  
<script setup>
    const sceneApplications = [
        {
        picSrc: '/img/light/zh_solution_pic1.png',
        title: '项目管理',
        description: '支持多种项目管理模式，如敏捷开发、水晶计划、看板等，适用于各种规模和类型的项目管理。用户可以使用DooTask里的项目管理工具，例如任务分配、进度跟踪、资源分配等来管理整个项目。'
        },
        {
        picSrc: '/img/light/zh_solution_pic2.png',
        title: '团队协作',
        description: 'DooTask的丰富实用的工具可以方便团队成员之间的沟通和协作，提高工作效率。例如，团队成员可以使用DooTask里的文档协作工具、在线思维导图、流程图等工具进行协作。'
        },
        {
        picSrc: '/img/light/zh_solution_pic3.png',
        title: '数据安全保护',
        description: 'DooTask在消息功能上使用非对称加密技术，确保用户的信息得到最大程度的保护。此外，它还提供了强大的权限管理系统，能够根据不同用户的角色和职责，灵活地设置他们在项目管理中的权限和操作范围。'
        },
        {
        picSrc: '/img/light/solution_pic4.png',
        title: '自由定制',
        description: 'DooTask是一款完全开源的工具，用户可以自由修改和定制，避免了商业软件订阅费用带来的额外成本。'
        }
    ]
</script>