---
title: API 配置
description: 在 NextAI 中添加和管理模型提供方
outline: [2,3]
---

# API 配置

> 首次使用未配置模型提供方时，点击顶部**模型名称**会提示“**请先添加模型提供方**”。完成本文步骤后即可开始对话。

::: info 本页你将完成
1. 进入 **设置 → 模型设置**  
2. 新增一个 **OpenAI 兼容** 提供方  
3. 填写 **模型地址（Base URL）** 与 **模型密钥（API Key）** 并保存  
4. 进行 **连接校验** 与 **常见报错排查**
:::

## 一、进入设置

1. 在首页点击顶部 **模型名称（首次为应用名占位）**，或点击左上角 **菜单** → 进入 **设置**。  
    ::: tip 提示
    全局侧滑可以收起或者展开菜单。
    :::
2. 在设置页点击 **模型设置**。

<figure class="narrow">
  <img src="/images/guide/api-config-1.jpg" alt="首页提示（未配置时）" loading="lazy" class="hero-shot zoomable" />
  <figcaption>首页提示（未配置时）</figcaption>
</figure>

<div class="shot-grid">
  <img src="/images/guide/api-config-2.png" alt="从侧边进入设置" class="zoomable" loading="lazy" />
  <img src="/images/guide/api-config-3.jpg" alt="设置页入口" class="zoomable" loading="lazy" />
</div>

## 二、新增提供方

在 **「模型设置」** 页面，点击右上角 **＋** 进入「添加提供方」。

- **是否启用**：开启后该提供方可在对话中被选择；
- **模型提供方**：选择 **OpenAI 兼容**（目前重点适配，其他厂商可先用其兼容层）；
- **提供方别名**：自定义名称（如 `DeepSeek` / `OpenAI`）；
- **模型地址（Base URL）**（必填）：例如 `https://api.openai.com/v1`；
- **模型密钥（API Key）**（必填）：从服务商控制台复制。

**参考截图**：

<div class="shot-grid">
  <img src="/images/guide/api-config-4.jpg" alt="模型设置列表" class="zoomable" loading="lazy" />
  <img src="/images/guide/api-config-5.jpg" alt="添加提供方表单" class="zoomable" loading="lazy" />
</div>

::: tip 常见 Base URL（示例）
- OpenAI：`https://api.openai.com/v1`  
- DeepSeek：`https://api.deepseek.com`  
- Moonshot：`https://api.moonshot.cn/v1`  
- 智谱：`https://open.bigmodel.cn/api/paas/v4`  
> 以服务商文档为准；部分厂商会使用代理或自建网关的 **兼容地址**。
:::

::: tip 安全建议
- 密钥仅保存在 **本机本地**，不会上传；  
- 建议 **每台设备单独密钥**、定期 **轮换/重置**；  
- 粘贴后检查是否包含多余 **空格或换行**。
:::

## 三、保存与生效

1. 填写完成后，点击右上角 **保存**；  
2. 返回聊天页，新建对话即可选择该提供方（或在顶部切换）。  
3. 若仍提示“请先添加模型提供方”，请检查：
   - 提供方已 **启用**；
   - Base URL、Key 均正确且无空格；
   - 当前网络可访问对应域名（公司/校园网可能限制）。

## 四、快速校验（可选）

在电脑终端用 `curl` 测试 **Base URL** 与 **Key** 是否有效（以下以 OpenAI 为例）：

```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```
如果能返回 JSON 列表，说明 网络可达 + Key 有效。
若返回 401 / 403 / 404 / 5xx，可参考下文“常见问题与排查”。


## 五、常见问题与排查


### 错误码速查表

| 场景/错误                     | 可能原因                                                       | 建议处理                                                         |
|------------------------------|--------------------------------------------------------------|----------------------------------------------------------------|
| 401 未授权 / invalid_api_key | Key 错、过期、粘贴时带空格 / 换行；未开通对应模型权限          | 重新粘贴 Key；在服务商控制台确认权限；必要时 **重置密钥**       |
| 403 禁止访问                 | 账号风控、区域限制、IP 不在白名单                              | 换网络/代理；确认服务商控制台的访问策略                         |
| 404 路径不存在               | Base URL 填写不完整（少了 `/v1` 等）                           | 以官方文档为准填写 **完整 Base URL**                            |
| 429 速率限制                 | 限流或配额不足                                                 | 降低频率/并发；到服务商控制台提升限额                           |
| model_not_found              | 调用了未开通/不存在的模型名                                     | 在 NextAI 中改用已开通的模型；或先在服务商控制台开通            |
| 网络不可达 / 超时            | 域名被拦截；证书或系统时间问题；本地代理配置不当                 | 切换网络/代理；校准系统时间；测试直连；必要时联系网络管理员     |

### 代理与网络小贴士

- 若你在本机开启了全局代理（如 `127.0.0.1:7890/7897`），**确保系统网络设置或代理软件**对 NextAI 生效；  
- 公司/校园网络可能对外域名做了限制，建议在 **家庭/移动网络** 下测试；  
- 避免将代理地址直接填入 **Base URL**，Base URL 应始终是服务商的 **API 域名**。


