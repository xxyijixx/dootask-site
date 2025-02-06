<template>
  <div class="home-page">
    <CookieConsent></CookieConsent>

    <div class="ad-dialog">
      <div class="ad-dialog-backdrop"></div>
      <div class="ad-dialog-wrapper">
        <div id="ad-dialog-header" class="ad-dialog-header">
          <div id="ad-dialog-header-img" class="ad-dialog-header-img"></div>
        </div>
        <div id="ad-dialog-content" class="ad-dialog-content">
          {{ t('ad.dialog_qr_code_tip') }}
        </div>
        <div class="ad-dialog-footer">
          <button id="ad-dialog-footer-btn" class="ad-dialog-footer-btn">
            确定
          </button>
        </div>
      </div>
    </div>
    <div id="layout" class="ad-wrapper">
      <HeaderBar id="ad-banner">
        <div class="topics">
          <div class="topics-con">
            <div class="topics-layout">
              <div class="topics-tit mb-32" style="width: auto !important">
                <span class="txt-6007290 topics-h1-green">
                  <span id="ad-banner-title-part1">DooTask</span>
                  <span id="ad-banner-title-underline">
                    <svg
                      class="arcs ad"
                      width="303"
                      height="47"
                      viewBox="0 0 303 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="arc"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M80.7308 27.6815C67.7286 31.9281 52.7004 36.1573 38.2511 37.2015C25.8945 38.1065 13.9833 36.7142 4.20939 30.762C2.82903 29.9266 1.1147 30.501 0.357722 32.0499C-0.0101685 32.7819 -0.0965865 33.582 0.10908 34.3518C0.314747 35.1217 0.803546 35.8278 1.51545 36.3835C12.1576 42.8752 25.1376 44.5634 38.6073 43.5192C53.3238 42.4401 68.6192 38.1935 81.8885 33.8773C83.6989 37.8717 87.4059 41.1683 92.2413 43.0841C100.857 46.7911 112.635 46.7389 125.036 44.6504C143.048 41.7788 162.395 34.4691 174.841 29.3175C175.353 29.1086 176.11 28.778 177.067 28.3429C177.357 29.0564 177.668 29.7352 178.024 30.4313C181.075 36.3661 186.485 41.187 191.984 42.8926C226.872 53.7876 267.682 40.7345 300.788 30.1181C301.651 29.7251 302.32 29.1168 302.688 28.3908C303.055 27.6648 303.1 26.8633 302.814 26.1151C302.391 24.3747 300.833 23.4349 299.319 23.9048C266.969 34.295 227.384 47.3133 193.476 36.7316C189.29 35.4437 185.238 31.7366 182.923 27.229C182.655 26.7243 182.433 26.2196 182.21 25.6975C187.266 23.0647 191.627 19.6969 195.056 15.7772C196.586 14.0321 197.496 12.0005 197.691 9.89049C197.887 7.78043 197.362 5.66764 196.17 3.76837C193.943 0.409393 190.581 0.113524 187.041 1.87133C183.305 4.06681 180.259 6.90026 178.136 10.1556C175.877 13.9037 174.947 18.0569 175.442 22.1818C174.329 22.704 173.438 23.1042 172.881 23.3305C160.703 28.3429 141.712 35.5133 124.19 38.4024C112.858 40.3168 102.104 40.5779 94.2228 37.1841C91.376 36.0727 89.0418 34.2967 87.5436 32.1021L94.4009 29.7526C98.7201 28.2732 107.759 25.8193 114.171 21.4335C116.839 19.7188 118.973 17.5523 120.412 15.098C121.85 12.6436 122.556 9.96562 122.476 7.26658C122.554 6.03434 122.211 4.80805 121.484 3.71325C120.756 2.61846 119.669 1.69448 118.335 1.03594C114.594 -0.704466 108.138 0.148332 105.733 0.722665C98.4529 2.46307 88.7235 9.66834 83.9145 17.7786C82.0105 20.8782 80.9276 24.2466 80.7308 27.6815ZM86.7198 25.68L92.6865 23.6438C96.7163 22.2515 105.154 20.0585 111.166 15.9686C112.881 14.9958 114.287 13.7263 115.271 12.2591C116.256 10.7919 116.794 9.16669 116.843 7.51024C116.843 7.21437 116.576 7.12735 116.353 7.02292C115.993 6.83692 115.593 6.70146 115.173 6.62263C112.42 6.17995 109.567 6.29984 106.891 6.97071C100.791 8.43265 92.642 14.5241 88.6122 21.329C87.7647 22.7162 87.1295 24.1766 86.7198 25.68ZM181.075 19.2406C183.881 17.6547 186.45 15.8274 188.733 13.7931C189.864 12.7944 190.795 11.6678 191.494 10.4515C191.774 10.0044 191.919 9.51331 191.919 9.01569C191.919 8.51807 191.774 8.027 191.494 7.57985C191.411 7.43237 191.257 7.3166 191.065 7.25789C190.873 7.19917 190.659 7.2023 190.47 7.26658C190.026 7.35576 189.605 7.50286 189.223 7.70168C186.481 9.31936 184.243 11.402 182.678 13.7931C181.692 15.5093 181.147 17.3602 181.075 19.2406Z"
                        fill="url(#paint0_linear_1346_204)"
                        opacity="0.8"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1346_204"
                          x1="22.5372"
                          y1="-10.882"
                          x2="116.024"
                          y2="144.196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FF7155" />
                          <stop offset="0.497468" stop-color="#EF3E56" />
                          <stop offset="1" stop-color="#EE61D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
                <span class="txt-6007290 topics-h1">
                  <span id="ad-banner-title-part2">,轻量级</span>
                  <br />
                  <span id="ad-banner-title-part3">任务管理工具</span>
                </span>
              </div>
              <h4 class="txt-4001830 topics-h4 mb-32">
                <span id="ad-banner-description"
                  >助力团队高效推进项目，让工作更简单。</span
                >
              </h4>
              <div class="flex-cc topics-btn">
                <div id="ad-banner-sign-up-button">
                  <a :href="`/${locale}/price`">
                    <button class="btn btn-primary">免费注册</button>
                  </a>
                </div>
                <div id="ad-banner-self-host-button">
                  <a
                    href="https://github.com/kuaifan/dootask/tree/pro"
                    target="_blank"
                  >
                    <button class="btn btn-default">私有化部署</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderBar>
      <main>
        <section class="ad-plan">
          <div class="section-wrapper">
            <!-- <div class="section-title animate__animated animate__fadeInDown animate__fast animate__delay-1s">
            <span id="ad-plan-title"> 9月双重钜惠来袭！ </span>
          </div>
          <div class="section-description animate__animated animate__fadeInDown animate__fast animate__delay-1s">
            <span id="ad-plan-description"> 让生活变轻松，让工作变高效 </span>
          </div> -->
            <div id="ad-plan-content" class="section-content">
              <div class="plan-item animate__animated">
                <div class="plan-item-title">
                  <span>免费版</span>
                </div>
                <div class="plan-item-price">
                  <span class="plan-item-price-current price">
                    0
                    <span class="plan-item-price-payment"> /月 </span>
                  </span>
                  <span class="plan-item-price-original"> 最多3人 </span>
                </div>
                <div class="plan-item-button">
                  <a>
                    <button class="btn-primary">立即部署</button>
                  </a>
                </div>
                <div class="plan-item-description">
                  <ul class="plan-item-description-list">
                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        支持私有化部署
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        技术咨询服务
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        专属运营客服
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        12小时服务响应
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="plan-item active animate__animated">
                <div class="plan-item-tag">最受欢迎</div>
                <div class="plan-item-title">
                  <span>10人专业版</span>
                </div>
                <div class="plan-item-price">
                  <span class="plan-item-price-current price">
                    ￥5,800
                    <span class="plan-item-price-payment"> </span>
                  </span>
                  <span class="plan-item-price-original price"> ¥8,800 </span>
                </div>
                <div class="plan-item-button">
                  <a>
                    <button class="btn-primary">立即购买</button>
                  </a>
                </div>
                <div class="plan-item-description">
                  <ul class="plan-item-description-list">
                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        支持私有化部署
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        技术咨询服务
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        专属运营客服
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        12小时服务响应
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="/img/ad/checked.svg" alt="undefined" />
                      </i>
                      <span class="plan-item-description-item-content">
                        赠1年免费技术维护
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="plan-item animate__animated">
                <div class="plan-item-tag">热销</div>
                <div class="plan-item-title">
                  <span>无限专业版</span>
                </div>
                <div class="plan-item-price">
                  <span class="plan-item-price-current price">
                    ¥16,800
                    <span class="plan-item-price-payment"> </span>
                  </span>
                  <span class="plan-item-price-original price"> ¥18,888 </span>
                </div>
                <div class="plan-item-button">
                  <a>
                    <button class="btn-primary">立即购买</button>
                  </a>
                </div>
                <div class="plan-item-description">
                  <ul class="plan-item-description-list">
                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        支持私有化部署
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        技术咨询服务
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        LOGO定制
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        专属运营客服
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        12小时服务响应
                      </span>
                    </li>

                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img
                          src="https://cms.hitosea.com/uploads/plan_checked_ea40b42593.svg"
                          alt="undefined"
                        />
                      </i>
                      <span class="plan-item-description-item-content">
                        赠1年免费技术维护
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ad-intro">
          <div class="section-wrapper">
            <div
              class="section-title animate__animated animate__fadeInDown animate__fast animate__delay-1s"
            >
              <span id="ad-intro-title"> 为何选择DooTask？ </span>
            </div>
            <div
              class="section-description animate__animated animate__fadeInDown animate__fast animate__delay-1s"
            >
              <span id="ad-intro-description"> &nbsp; </span>
            </div>
            <div id="ad-intro-content" class="section-content">
              <div class="ad-intro-item">
                <div class="ad-intro-item-header">
                  <img src="/img/ad/intro-card-head.png" alt="head" />
                </div>
                <div class="ad-intro-item-image">
                  <img src="/img/ad/intro-card-img01.svg" alt="img" />
                </div>
                <div class="ad-intro-item-title">
                  <span> 项目管理 </span>
                </div>
                <div class="ad-intro-item-description">
                  <span
                    >支持多种项目管理模式，如敏捷开发、水晶计划、看板等，适用于各种规模和类型的项目管理。用户可以使用DooTask里的项目管理工具，例如任务分配、进度跟踪、资源分配等来管理整个项目。
                  </span>
                </div>
              </div>
              <div class="ad-intro-item">
                <div class="ad-intro-item-header">
                  <img src="/img/ad/intro-card-head.png" alt="head" />
                </div>
                <div class="ad-intro-item-image">
                  <img src="/img/ad/intro-card-img02.svg" alt="img" />
                </div>
                <div class="ad-intro-item-title">
                  <span> 团队协作 </span>
                </div>
                <div class="ad-intro-item-description">
                  <span
                    >DooTask的丰富实用的工具可以方便团队成员之间的沟通和协作，提高工作效率。例如，团队成员可以使用DooTask里的文档协作工具、在线思维导图、流程图等工具进行协作。
                  </span>
                </div>
              </div>
              <div class="ad-intro-item">
                <div class="ad-intro-item-header">
                  <img src="/img/ad/intro-card-head.png" alt="head" />
                </div>
                <div class="ad-intro-item-image">
                  <img src="/img/ad/intro-card-img03.svg" alt="img" />
                </div>
                <div class="ad-intro-item-title">
                  <span> 数据安全保护 </span>
                </div>
                <div class="ad-intro-item-description">
                  <span
                    >DooTask在消息功能上使用非对称加密技术，确保用户的信息得到最大程度的保护。此外，它还提供了强大的权限管理系统，能够根据不同用户的角色和职责，灵活地设置他们在项目管理中的权限和操作范围。
                  </span>
                </div>
              </div>
              <div class="ad-intro-item">
                <div class="ad-intro-item-header">
                  <img src="/img/ad/intro-card-head.png" alt="head" />
                </div>
                <div class="ad-intro-item-image">
                  <img src="/img/ad/intro-card-img04.svg" alt="img" />
                </div>
                <div class="ad-intro-item-title">
                  <span> 自由定制 </span>
                </div>
                <div class="ad-intro-item-description">
                  <span
                    >DooTask是一款完全开源的工具，用户可以自由修改和定制，避免了商业软件订阅费用带来的额外成本。
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBar class="ad-footer"></FooterBar>
      <SideNav></SideNav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import '@/assets/scss/common.scss';
import '@/assets/scss/rem.scss';
import '@/assets/scss/ad.scss';
import '@/assets/scss/home.scss';
import '@/assets/css/animate.min.css';
import Qs from 'qs';
definePageMeta({
  layout: 'blank',
});
defineOgImageComponent('NuxtSeo')
const { locale, t } = useI18n();

onMounted(() => {
  fetchAdBanner(locale.value);
  fetchAdPlan(locale.value);
  fetchAdIntro(locale.value);

  manageAnimate();

  handleDialog();
});

// 获取广告banner数据
function fetchAdBanner(language: string) {
  const query = Qs.stringify(
    {
      locale: language,
      populate: {
        title: {
          populate: '*',
        },
        description: {
          populate: '*',
        },
        background: {
          populate: '*',
        },
        underline: {
          populate: '*',
        },
        signUpButton: {
          populate: '*',
        },
        selfHostButton: {
          populate: '*',
        },
        localizations: {
          populate: '*',
        },
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-banner?${query}`;
  fetchData(apiUrl).then(handleAdBannerResponse).catch(handleError);
}

// 获取广告计划数据
function fetchAdPlan(language: string) {
  const query = Qs.stringify({
    locale: language,
    populate: {
      plans: {
        populate: {
          price: {
            populate: '*',
          },
          button: {
            populate: '*',
          },
          features: {
            populate: '*',
          },
        },
      },
    },
  });
  const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-plan?${query}`;
  fetchData(apiUrl).then(handleAdPlanResponse).catch(handleError);
}

// 获取广告介绍数据
function fetchAdIntro(language: string) {
  const query = Qs.stringify({
    locale: language,
    populate: {
      intros: {
        populate: {
          bar: {
            populate: '*',
          },
          cover: {
            populate: '*',
          },
          title: {
            populate: '*',
          },
          description: {
            populate: '*',
          },
        },
      },
    },
  });
  const apiUrl = `https://cms.hitosea.com/api/doo-task-ad-intro?${query}`;
  fetchData(apiUrl).then(handleAdIntroResponse).catch(handleError);
}

// 处理广告banner响应
function handleAdBannerResponse(response: any) {
  // 在此实现广告banner处理逻辑
  try {
    const {
      data: {
        attributes: {
          title,
          description,
          background,
          underline,
          signUpButton,
          selfHostButton,
        },
      },
    } = response;
    handleAdBannerTitle(title);
    handleAdBannerDescription(description);
    handleAdBannerBackground(background);
    handleAdBannerUnderline(underline);
    handleAdBannerSignUpButton(signUpButton);
    handleAdBannerSelfHostButton(selfHostButton);
  } catch (error) {
    console.error('处理广告banner响应时出错:', error);
  }
}

interface TitleItem {
  key: 'part1' | 'part2' | 'part3';
  text: string;
  style?: Record<string, string>;
}

interface TitleText {
  [key: string]: {
    text: string;
    style?: Record<string, string>;
  };
}

function handleAdBannerTitle(title: TitleItem[] | string) {
  const titleText: TitleText = {};
  if (Array.isArray(title)) {
    title.forEach((item: TitleItem) => {
      titleText[item.key] = { text: item.text, style: item.style };
    });
  }
  const titlePart1El = document.getElementById('ad-banner-title-part1');
  const titlePart2El = document.getElementById('ad-banner-title-part2');
  const titlePart3El = document.getElementById('ad-banner-title-part3');

  if (titlePart1El && titleText['part1']) {
    titlePart1El.textContent = titleText['part1'].text;
    if (titleText['part1'].style) {
      Object.assign(titlePart1El.style, getStyle(titleText['part1'].style));
    }
  }
  if (titlePart2El && titleText['part2']) {
    titlePart2El.textContent = titleText['part2'].text;
    if (titleText['part2'].style) {
      Object.assign(titlePart2El.style, getStyle(titleText['part2'].style));
    }
  }
  if (titlePart3El && titleText['part3']) {
    titlePart3El.textContent = titleText['part3'].text;
    if (titleText['part3'].style) {
      Object.assign(titlePart3El.style, getStyle(titleText['part3'].style));
    }
  }
}

interface Description {
  text: string;
  style?: Record<string, string>;
}

interface Link {
  label: string;
  href: string;
  target?: string;
  slug?: string;
}

interface SignUpButton {
  theme?: string;
  style?: Record<string, string>;
  link: Link;
}

function handleAdBannerDescription(description: Description): void {
  const descriptionText = {
    text: description.text,
    style: description.style,
  };
  const descriptionEl = document.getElementById('ad-banner-description');
  if (descriptionEl && descriptionText.text) {
    descriptionEl.textContent = descriptionText.text;
    if (descriptionText.style) {
      console.log(
        'getStyle(descriptionText.style)',
        getStyle(descriptionText.style),
      );
      Object.assign(descriptionEl.style, getStyle(descriptionText.style));
    }
  }
}

function handleAdBannerBackground(background: any): void {
  const backgroundUrl = getMediaUrl(background);
  const adBannerEl = document.getElementById('ad-banner');

  if (adBannerEl && backgroundUrl) {
    adBannerEl.style.backgroundImage = `url(${backgroundUrl})`;
  }
}

function handleAdBannerUnderline(underline: any): void {
  const underlineUrl = getMediaUrl(underline);
  const adBannerTitleUnderlineEl = document.getElementById(
    'ad-banner-title-underline',
  );
  if (adBannerTitleUnderlineEl && underlineUrl) {
    adBannerTitleUnderlineEl.innerHTML = `<img class="arcs ad" src="${underlineUrl}" alt="underline" />`;
  }
}

function handleAdBannerSignUpButton({
  theme,
  style,
  link: { label, href, target, slug },
}: SignUpButton): void {
  const signUpButtonEl = document.getElementById('ad-banner-sign-up-button');
  if (signUpButtonEl) {
    signUpButtonEl.innerHTML = `
        <a href="${href}" ${target === '_blank' ? 'target="_blank"' : ''} >
          <button class="btn btn-primary">
            ${label}
          </button>
        </a>`;
    if (style) {
      Object.assign(signUpButtonEl.style, getStyle(style));
    }
  }
}

function handleAdBannerSelfHostButton({
  theme,
  style,
  link: { label, href, target, slug },
}: any) {
  const selfHostButtonEl = document.getElementById(
    'ad-banner-self-host-button',
  );
  if (selfHostButtonEl) {
    if (href === '#') {
      selfHostButtonEl.innerHTML = `
      <a>
        <button class="btn btn-default">
          ${label}
        </button>
      </a>`;
      function showDialog(e: MouseEvent) {
        e.preventDefault();
        e.stopPropagation();

        const dialogEl = document.querySelector('.ad-dialog');
        if (!dialogEl) return;
        dialogEl.classList.add('show');
        lockBodyScroll(true);
        handleDialogAnimate(true);
      }
      selfHostButtonEl.addEventListener('click', showDialog);
    } else {
      selfHostButtonEl.innerHTML = `
      <a href="${href}" ${target === '_blank' ? 'target="_blank"' : ''} >
        <button class="btn btn-default">
          ${label}
        </button>
      </a>`;
    }
    Object.assign(selfHostButtonEl.style, getStyle(style));
  }
}
function lockBodyScroll(bool: boolean) {
  document.body.style.overflowY = bool ? 'hidden' : 'auto';
}
function handleDialogAnimate(bool: boolean) {
  const dialogEl = document.querySelector('.ad-dialog');
  if (!dialogEl) return;

  const dialogWrapperEl = dialogEl.querySelector('.ad-dialog-wrapper');
  if (!dialogWrapperEl) return;

  if (bool) {
    dialogWrapperEl.classList.add(
      'animate__animated',
      'animate__bounceIn',
      'animate__faster',
    );
    dialogWrapperEl.addEventListener('animationend', () => {
      dialogWrapperEl.classList.remove(
        'animate__animated',
        'animate__bounceIn',
        'animate__faster',
      );
    });
  } else {
    dialogWrapperEl.classList.remove(
      'animate__animated',
      'animate__bounceIn',
      'animate__faster',
    );
  }
}

// 管理动画
function manageAnimate() {
  let throttleTimer: boolean | null = null;
  const throttle = (callback: Function, time: number) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
      callback();
      throttleTimer = false;
    }, time);
  };

  window.addEventListener('scroll', () => {
    throttle(() => {
      detectAdPlanEl();
      detectAdIntroEl();
    }, 200);
  });
}

const couldAdPlanElAnimate: Record<string, boolean> = {};
const couldAdIntroElAnimate: Record<string, boolean> = {};

function detectAdPlanEl() {
  const adPlanEl = document.querySelector('.ad-plan');
  if (isElementOutOfViewport(adPlanEl)) {
    const els = document.querySelectorAll('.plan-item');
    for (const el of els) {
      couldAdPlanElAnimate[`${el.id}`] = true;
    }
    return;
  }

  const _couldAdPlanElAnimate =
    Object.values(couldAdPlanElAnimate).every(Boolean);
  if (!_couldAdPlanElAnimate) return;
  if (isElementPartiallyInViewport(adPlanEl)) {
    const els = document.querySelectorAll('.plan-item');
    for (const el of els) {
      el.classList.add('animate__flipInX');
      couldAdPlanElAnimate[`${el.id}`] = false;
      el.addEventListener(
        'animationend',
        () => {
          el.classList.remove('animate__flipInX');
        },
        { once: true },
      );
    }
    return;
  }
}

function detectAdIntroEl() {
  const adIntroEl = document.querySelector('.ad-intro');
  if (isElementOutOfViewport(adIntroEl)) {
    const els = document.querySelectorAll('.ad-intro-item');
    for (const el of els) {
      couldAdIntroElAnimate[`${el.id}`] = true;
    }
    return;
  }

  const _couldAdIntroElAnimate = Object.values(couldAdIntroElAnimate).every(
    Boolean,
  );
  if (!_couldAdIntroElAnimate) return;
  if (isElementPartiallyInViewport(adIntroEl)) {
    const els = document.querySelectorAll('.ad-intro-item');
    for (const el of els) {
      el.classList.add('animate__zoomIn');
      couldAdIntroElAnimate[`${el.id}`] = false;
      el.addEventListener(
        'animationend',
        () => {
          el.classList.remove('animate__zoomIn');
        },
        { once: true },
      );
    }
    return;
  }
}

function isElementPartiallyInViewport(el: Element | null) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right > 0
  );
}

function isElementOutOfViewport(el: Element | null) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom < 0 ||
    rect.top > (window.innerHeight || document.documentElement.clientHeight) ||
    rect.right < 0 ||
    rect.left > (window.innerWidth || document.documentElement.clientWidth)
  );
}

// 处理广告计划响应
function handleAdPlanResponse(response: any) {
  // 在此实现广告计划处理逻辑
  try {
    const {
      data: {
        attributes: { title, description, plans },
      },
    } = response;
    handleAdPlanTitle(title);
    handleAdPlanDescription(description);
    handleAdPlanPlans(plans);
  } catch (error) {
    console.error('处理广告计划响应时出错:', error);
  }
}

function handleAdPlanTitle(title: any) {
  const planTitleEl = document.getElementById('ad-plan-title');
  if (planTitleEl && title) {
    planTitleEl.textContent = title;
  }
}

function handleAdPlanDescription(description: any) {
  const planDescriptionEl = document.getElementById('ad-plan-description');
  if (planDescriptionEl && description) {
    planDescriptionEl.textContent = description;
  }
}

async function handleAdPlanPlans(plans: any) {
  const planContentEl = document.getElementById('ad-plan-content');
  if (planContentEl && Array.isArray(plans)) {
    const prevPlanItems = planContentEl.querySelectorAll('.plan-item');

    for (const prevPlanItem of prevPlanItems) {
      prevPlanItem.classList.add('animate__animated', 'animate__backOutDown');
      prevPlanItem.addEventListener(
        'animationend',
        () => {
          prevPlanItem.remove();
        },
        { once: true },
      );
    }

    plans.sort((a, b) => a.priority - b.priority);
    for (const plan of plans) {
      const planItemEl = document.createElement('div');
      planItemEl.className = `plan-item ${plan.activated ? 'active' : ''}`;
      planItemEl.innerHTML = `
          ${plan.tag ? `<div class="plan-item-tag">${plan.tag}</div>` : ''}
          <div class="plan-item-title">
              <span>${plan.title}</span>
          </div>
          <div class="plan-item-price">
              <span class="plan-item-price-current price">
                  ${plan.price.current}
                  <span class="plan-item-price-payment">
                      ${plan.price.payment ?? ''}
                  </span>
              </span>
              <span class="plan-item-price-original ${
                plan.price.isPrice ? 'price' : ''
              }">
                  ${plan.price.original ?? ''}
              </span>
          </div>
          <div class="plan-item-button">
              <a href="${plan.button.href}" ${
                plan.button.target === '_blank' ? 'target="_blank"' : ''
              }>
                  <button class="btn-primary">
                      ${plan.button.label}
                  </button>
              </a>
          </div>
          <div class="plan-item-description">
              <ul class="plan-item-description-list">
                ${plan.features
                  .map((feature: any) => {
                    const iconUrl = feature.icon.data
                      ? getMediaUrl(feature.icon)
                      : '/img/ad/checked.svg';
                    return `
                    <li class="plan-item-description-item">
                      <i class="plan-item-description-item-icon">
                        <img src="${iconUrl}" alt="${feature.title}" />
                      </i>
                      <span class="plan-item-description-item-content ${
                        feature.activated ? '' : 'disabled'
                      }">
                        ${feature.text}
                      </span>
                    </li>
                  `;
                  })
                  .join('')}
                </ul>
            </div>
          `;
      planContentEl.appendChild(planItemEl);
      planItemEl.classList.add(
        'animate__animated',
        'animate__backInUp',
        'animate__faster',
        'animate__delay-1s',
      );
      couldAdPlanElAnimate[`${plan.id}`] = false;
      planItemEl.addEventListener(
        'animationend',
        () => {
          planItemEl.classList.remove(
            'animate__backInUp',
            'animate__faster',
            'animate__delay-1s',
          );
          couldAdPlanElAnimate[`${plan.id}`] = true;
        },
        { once: true },
      );

      await new Promise((resolve) => {
        setTimeout(resolve, 150);
      });
    }

    overridePlanButton();
  }
}

// 处理广告介绍响应
function handleAdIntroResponse(response: any) {
  try {
    const {
      data: {
        attributes: { title, description, intros },
      },
    } = response;
    handleAdIntroTitle(title);
    handleAdIntroDescription(description);
    handleAdIntroIntros(intros);
  } catch (error) {
    console.error('处理广告介绍响应时出错:', error);
  }
}

function handleAdIntroTitle(title: string) {
  const introTitleEl = document.getElementById('ad-intro-title');
  if (introTitleEl && title) {
    introTitleEl.textContent = title;
  }
}

function handleAdIntroDescription(description: any) {
  const introDescriptionEl = document.getElementById('ad-intro-description');
  if (introDescriptionEl && description) {
    introDescriptionEl.textContent = description;
  }
}

async function handleAdIntroIntros(intros: any) {
  const introContentEl = document.getElementById('ad-intro-content');
  if (introContentEl && Array.isArray(intros)) {
    const prevIntroItems = introContentEl.querySelectorAll('.ad-intro-item');
    for (const prevIntroItem of prevIntroItems) {
      prevIntroItem.classList.add('animate__animated', 'animate__zoomOut');
      prevIntroItem.addEventListener(
        'animationend',
        () => {
          prevIntroItem.remove();
        },
        { once: true },
      );
    }

    intros.sort((a, b) => a.priority - b.priority);

    for (const intro of intros) {
      const introItemEl = document.createElement('div');
      const barUrl = intro.bar.data
        ? getMediaUrl(intro.bar)
        : '/img/ad/intro-card-head.png';
      const coverUrl = intro.cover.data
        ? getMediaUrl(intro.cover)
        : `/img/ad/intro-card-img${intro.priority + 1}.svg`;
      introItemEl.className = 'ad-intro-item';
      introItemEl.innerHTML = `
          <div class="ad-intro-item-header">
              <img src="${barUrl}" alt="intro-bar" />
          </div>
          <div class="ad-intro-item-image">
              <img src="${coverUrl}" alt="intro-cover" />
          </div>
          <div class="ad-intro-item-title">
              <span>${intro.title}</span>
          </div>
          <div class="ad-intro-item-description">
              <span>${intro.description}</span>
          </div>
        `;
      introContentEl.appendChild(introItemEl);
      introItemEl.classList.add(
        'animate__animated',
        'animate__zoomIn',
        'animate__delay-1s',
      );
      couldAdIntroElAnimate[`${intro.id}`] = false;

      introItemEl.addEventListener(
        'animationend',
        () => {
          introItemEl.classList.remove('animate__zoomIn', 'animate__delay-1s');
          couldAdIntroElAnimate[`${intro.id}`] = true;
        },
        { once: true },
      );
      await new Promise((resolve) => {
        setTimeout(resolve, 150);
      });
    }
  }
}

function handleDialog() {
  const dialogEl = document.querySelector('.ad-dialog');
  if (!dialogEl) return;

  lockBodyScroll(dialogEl.classList.contains('show'));
  overridePlanButton();

  const dialogBackdropEl = dialogEl.querySelector('.ad-dialog-backdrop');
  if (dialogBackdropEl) {
    dialogBackdropEl.addEventListener('click', () => {
      dialogEl.classList.remove('show');
      lockBodyScroll(false);
      handleDialogAnimate(false);
    });
  }

  const dialogFooterBtnEl = dialogEl.querySelector('.ad-dialog-footer-btn');
  if (dialogFooterBtnEl) {
    dialogFooterBtnEl.addEventListener('click', () => {
      dialogEl.classList.remove('show');
      lockBodyScroll(false);
      handleDialogAnimate(false);
    });
  }
}

function overridePlanButton() {
  function showDialog(e: Event) {
    e.preventDefault();
    e.stopPropagation();

    const dialogEl = document.querySelector('.ad-dialog');
    if (!dialogEl) return;
    dialogEl.classList.add('show');
    lockBodyScroll(true);
    handleDialogAnimate(true);
  }

  const planButtonEl = document.querySelectorAll('.plan-item-button');
  planButtonEl.forEach((el) => {
    el.removeEventListener('click', showDialog);

    const aEl = el.querySelector('a');
    if (!aEl) return;
    if (!aEl.href || aEl.href.includes('#')) {
      aEl.removeAttribute('href');
      el.addEventListener('click', showDialog);
    }
  });
}
</script>
