// 通用Meta接口
export interface Meta {
  [key: string]: string | object;
}

// 通用Response接口
export interface ApiResponse<T> {
  data: T;
  meta: Meta;
}

// 图片格式接口
export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
}

// 图片格式集合
export interface ImageFormats {
  large?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  thumbnail?: ImageFormat;
}

// 媒体属性接口
export interface MediaAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: ImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  related?: Array<{
    __type: string;
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
  }>;
}

// 媒体数据接口
export interface MediaData {
  id: number;
  attributes: MediaAttributes;
}

// 介绍卡片接口
export interface IntroCard {
  id: number;
  title: string;
  description: string;
  priority: number;
  bar: {
    data: MediaData;
  };
  cover: {
    data: MediaData;
  };
}

// 价格信息接口
export interface PriceInfo {
  id: number;
  current: string;
  original: string;
  payment: string | null;
  isPrice: boolean;
}

// 按钮接口
export interface Button {
  id: number;
  label: string;
  href: string;
  target: string | null;
}

// 功能特性接口
export interface Feature {
  id: number;
  text: string;
  title?: string;
  activated: boolean;
  icon: {
    data: MediaData | null;
  };
}

// 套餐计划接口
export interface Plan {
  id: number;
  title: string;
  activated: boolean;
  priority: number;
  tag: string | null;
  price: PriceInfo;
  button: Button;
  features: Feature[];
}

// 标题样式接口
export interface TitlePart {
  id: number;
  text: string;
  key: string;
  style: Record<string, string>
}

export interface ThemedButton {
  id: number;
  theme: string;
  style: Record<string, string>;
  link: {
    id: number;
    label: string;
    href: string;
    target: string | null;
  };
}

// 主接口 - 为何选择DooTask
export interface WhyChooseDooTask {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    intros: IntroCard[];
  };
}

// 主接口 - 价格计划
export interface PricingPlans {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    plans: Plan[];
  };
}

// Banner相关的类型定义

// Banner 描述
export interface BannerDescription {
  id: number;
  text: string;
  key: string;
  style: Record<string, string>
}


// Banner基础属性
export interface BannerBaseAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  title: TitlePart[];
  description: BannerDescription;
  background: {
    data: MediaData;
  };
  underline: {
    data: MediaData;
  };
  signUpButton: ThemedButton;
  selfHostButton: ThemedButton;
}

// 本地化数据基础属性
export interface LocalizationBaseAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// 本地化数据
export interface LocalizationData {
  id: number;
  attributes: LocalizationBaseAttributes;
}

// Banner本地化属性
export interface BannerLocalization {
  id: number;
  attributes: BannerBaseAttributes & {
    localizations: {
      data: LocalizationData[];
    };
  };
}

// 主Banner接口
export interface AdBanner {
  id: number;
  attributes: BannerBaseAttributes & {
    localizations: {
      data: BannerLocalization[];
    };
  };
}

// API响应类型
export type WhyChooseDooTaskResponse = ApiResponse<WhyChooseDooTask>;
export type PricingPlansResponse = ApiResponse<PricingPlans>;
export type AdBannerResponse = ApiResponse<AdBanner>;
