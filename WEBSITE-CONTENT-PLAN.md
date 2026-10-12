# PDF Blender Website Content Plan

Prepared: 2026-10-12. Scope: adapt the selected Next.js landing-page template into a small product website and add a public privacy policy. This document specifies content and layout; it does not implement or deploy the website.

Project documentation is in English. Chinese and English text below is proposed user-facing copy, not a requirement to translate the English text word for word.

## 1. Product identity and goals

| Item | Value |
| --- | --- |
| Product | PDF Blender |
| Publisher | Bitcookies |
| Support and privacy contact | bitcookies@nousbuild.com |
| Intended website | https://pdf-blender.vercel.app |
| Source repository | https://github.com/bitcookies/pdf-blender |
| Issue tracker | https://github.com/bitcookies/pdf-blender/issues |
| License | GNU GPL v3; link to the repository LICENSE |
| Store product ID | 9P65NBNQRGVZ |
| Store webpage | https://apps.microsoft.com/detail/9P65NBNQRGVZ |
| Store app link, optional | ms-windows-store://pdp/?productid=9P65NBNQRGVZ |
| Intended platforms | Windows 10/11; x86, x64 and ARM64 packages |

The Vercel hostname is the owner's intended choice; its availability and project assignment have not been verified. Use the actual assigned production hostname for canonical URLs, metadata and Partner Center's privacy URL after deployment. Use the authoritative Store ID above; an older SPEC.md line currently contains a transposition and must not be copied into website links.

The homepage should answer four questions quickly: what the app does, what remains local, how to use it, and where to install it. It is a Windows desktop product website, with no browser PDF processing or cloud upload workflow.

Product positioning:

- Organize PDF pages, add ownership marks and make straightforward text extraction more difficult.
- Preserve ordinary reading as far as the selected settings allow; stronger settings can reduce visual quality, search and accessibility.
- Process documents locally, with independently selectable features and reusable configurations.
- Do not promise encryption, access control, DRM, guaranteed OCR prevention or guaranteed AI resistance.

## 2. Template module decisions

Use the screenshot's spacing, typography and basic responsive components as a starting point. Remove the SaaS-specific content rather than leaving empty sections.

| Screenshot module | Decision | Replacement or purpose |
| --- | --- | --- |
| Acme wordmark | Replace | Existing transparent PDF Blender logo and product name |
| Pricing navigation | Remove | Features anchor |
| Testimonials navigation | Remove | How it works anchor |
| Generic Dropdown navigation | Remove | Direct links to FAQ, GitHub and support |
| Connect on X button | Replace | Microsoft Store CTA when the listing is available |
| Light/dark toggle | Keep | System default, with a user override |
| New template badge | Remove | Small factual Windows / local processing label |
| SaaS hero title and subtitle | Replace | Product-specific headline and short description |
| See more button | Replace | Primary install CTA and secondary source link |
| Large empty space below the hero | Reduce | Real application screenshot |
| Our Partners logos | Remove | No invented partners; dependencies are not partners |
| Loved by Teams / testimonials | Remove | No fabricated quotes, ratings or user claims |
| 50K users / uptime / API calls / countries | Remove | No invented usage metrics or SaaS infrastructure metrics |
| Choose Your Plan and pricing cards | Remove | No pricing section, subscription comparison or purchase funnel |
| FAQ accordion | Keep and rewrite | Real PDF, privacy and Windows questions |
| Footer branding | Replace | PDF Blender by Bitcookies |
| Footer Quick Links | Keep and rewrite | Features, GitHub, support and Privacy |
| Footer Social icons | Simplify | GitHub only; email can be a labeled contact link |
| BuildingInPublic slogan | Remove | Unnecessary template decoration |

Do not introduce sign-in, account creation, billing, newsletter signup, a blog, partner badges, an online PDF demo, a file-upload form, or a separate download portal for the first website version. A changelog can link to GitHub Releases if releases actually exist; it does not need a standalone section.

## 3. Pages and section order

Recommended small bilingual route set:

| Route | Language | Purpose |
| --- | --- | --- |
| `/` | English | Product homepage |
| `/zh` | Simplified Chinese | Product homepage |
| `/privacy` | English | Public privacy policy |
| `/zh/privacy` | Simplified Chinese | The same privacy policy in Chinese |

Use `/privacy` as the stable Partner Center URL: `https://pdf-blender.vercel.app/privacy`, subject to the final deployed hostname. Both policies must be accessible directly, without login, an app installation or a cookie wall. The privacy page must not be a modal or an external PDF.

Homepage order:

1. Compact header.
2. Hero and application screenshot.
3. Six feature cards.
4. Three-step usage guide.
5. FAQ.
6. Compact final install CTA and footer.

Avoid retaining the screenshot template's unusually large gaps. The page should feel like a concise desktop product introduction rather than a long SaaS sales page. Privacy has its own readable article page with the same header/footer.

## 4. Header and hero: ready-to-use copy

Header links:

| Chinese | English | Destination |
| --- | --- | --- |
| 功能 | Features | `#features` |
| 使用方法 | How it works | `#how-it-works` |
| 常见问题 | FAQ | `#faq` |
| GitHub | GitHub | Repository |
| 中文 / English | 中文 / English | Equivalent language route |

A compact desktop header is enough; use a mobile menu when space is limited. Privacy and contact may stay in the footer. No generic dropdown is needed.

Hero copy:

| Element | Chinese | English |
| --- | --- | --- |
| Small label | Windows · 本地处理 | Windows · Local processing |
| Heading | PDF 便于阅读，内容更难直接提取。 | Keep PDFs readable. Make extraction harder. |
| Description | 统一页面尺寸、添加水印，并通过图片化和复制混淆提高内容提取成本。处理在本机完成，无需上传 PDF。 | Resize pages, add watermarks and make copied text harder to reuse. Your PDFs are processed on your PC, without uploads. |
| Primary CTA, after Store publication | 从 Microsoft Store 获取 | Get it from Microsoft Store |
| Secondary CTA | 查看源代码 | View source |
| Short facts | 本地处理 · 无需账户 · 中英文界面 | Local processing · No account · English and Chinese |
| Platform line | 支持 Windows 10 / 11 | For Windows 10 and 11 |

Do not label the Store product as publicly available until the listing can actually be opened and installed. Before publication, replace the primary CTA with `查看 GitHub 项目 / View on GitHub` and add `Microsoft Store 版本即将推出 / Coming to Microsoft Store`. Do not add a fake download button or a disabled button pretending to be an install link. No price claims until the owner's Store pricing is confirmed.

Use the ordinary HTTPS Store link as the dependable primary destination. The Store protocol can be a separate enhancement; never invoke it automatically on page load. Non-Windows visitors should still be able to open the web listing and see the platform requirement.

## 5. Application screenshots

Place one real, high-quality homepage screenshot immediately below the hero. Show a populated configuration slot, PDF preview and the actual processing UI using a synthetic/sample PDF. Show no user document text, private file paths, personal names or actual confidential metadata.

Optional second screenshot: the custom-configuration page, demonstrating feature groups and switches. Use a restrained two-image selector or two static images; a complex carousel or autoplay video is unnecessary.

Screenshots should match the current release UI. Use one language per locale if practical, with matching light/dark variants where assets exist. Do not invert a light screenshot to fake a dark theme. Crop unnecessary desktop chrome, keep the app content intact, and use rounded corners and a subtle shadow.

Example alt text:

- Chinese: `PDF Blender 主页，显示 PDF 预览、配置槽位和处理按钮。`
- English: `PDF Blender showing PDF previews, configuration slots and processing controls.`

An optional short slider clip may be added later; it is not a launch requirement. The website should not load screenshots directly from a user's machine or ship real PDF samples.

## 6. Feature cards

Section heading: `按需要组合 PDF 功能 / Choose the PDF tools you need`.

Section subtitle:

- Chinese: `从页面整理到复制防护，每项功能由你选择。`
- English: `From page formatting to copy protection, you choose what runs.`

Use six cards in a three-column desktop grid, two columns on medium screens and one column on phones. Keep descriptions short; there is no need to reproduce every application switch or preset.

| Card | Chinese copy | English copy |
| --- | --- | --- |
| Page formatting | **页面整理** — 统一为 A4 宽度、缩放到标准纸张，或输入自定义尺寸。 | **Page formatting** — Match page widths, fit pages to A4 or use custom sizes. |
| Watermarks | **文字水印** — 添加单个大水印或重复小水印，自定义文字和角度。 | **Text watermarks** — Add one large watermark or a repeating pattern with your own text. |
| Flattening and copying | **图片化与复制防护** — 将页面转为图片，可选乱码复制层或自定义警示文字。 | **Flattening & copy protection** — Turn pages into images and optionally replace copied text. |
| Raster effects | **噪点与扰动** — 调整像素噪点、纹理和轻微位移，增加机器提取成本。 | **Noise & perturbation** — Add controlled image variation to complicate automated extraction. |
| Ownership | **版权信息** — 写入作者、组织和版权声明，配置阅读器权限。 | **Ownership details** — Add author and copyright information and set reader permissions. |
| Configurations | **可复用配置** — 使用预设或创建自定义组合，拖入槽位后快速切换。 | **Reusable configs** — Start with a preset or build your own setup and switch between slots. |

A single short notice immediately below these cards:

- Chinese: `图片化和复制防护会影响搜索、复制和无障碍读取；噪点与扰动也可能影响清晰度。权限限制依赖阅读器，不能保证阻止提取。`
- English: `Flattening and copy protection affect search, copying and accessibility; image effects may reduce clarity. Reader permissions do not guarantee protection.`

Use consistent line icons; use the existing logo only for branding. Do not place third-party product logos in these cards. If website icons come from the selected template's existing library, reuse that library rather than adding another dependency to mimic WPF precisely.

Hidden AI text is a supported advanced setting, but should not dominate the hero or six cards. Describe it in the FAQ: optional passive hidden text, with uncertain effectiveness and possible exposure to extraction/accessibility tools. Do not publish exploit payloads as marketing copy. GAN remains experimental/unavailable and must not be advertised as an available product feature. No statement that every page receives a prompt: current custom prompt handling adds it at the document beginning.

## 7. How it works

Heading: `三步开始 / Get started in three steps`.

| Step | Chinese | English |
| --- | --- | --- |
| 1 | **创建配置** — 添加预设，或选择你需要的功能创建自定义配置。 | **Choose a config** — Add a preset or create your own combination of tools. |
| 2 | **导入 PDF** — 将配置拖入槽位，再选择或拖入 PDF 文件。 | **Add your PDFs** — Put the config in a slot, then select or drop your PDFs. |
| 3 | **处理并检查** — 选择配置并开始处理，在原文件旁查看生成的副本。 | **Process and review** — Run the selected config and review the new files beside the originals. |

Supporting line:

- Chinese: `首次启动没有默认配置。新建自定义配置时，所有功能默认关闭。`
- English: `Start with an empty config list. New custom configs have every feature switched off.`

No fabricated processing speed, file-size reduction percentage or benchmark. Explain that stronger settings can increase processing time and output size only if asked in the FAQ.

## 8. FAQ: ready-to-use copy

Use the template's accordion with accessible buttons and keyboard operation. Keep answers short and factual.

### Does it upload PDFs? / PDF 会上传吗？

Chinese: `不会。PDF 的预览和处理在本机完成，核心功能无需联网。点击 GitHub 或商店链接时，会打开相应外部服务。`

English: `No. PDF previews and processing run on your PC. Core tools work offline. GitHub and Store links open external services when you choose them.`

### Can it guarantee that a PDF cannot be copied? / 能完全阻止复制吗？

Chinese: `不能。图片化和复制层可以增加直接提取的难度，但截图、OCR 或其他工具仍可能恢复内容。PDF Blender 不是加密、DRM 或访问控制工具。`

English: `No. Flattening and copy layers make direct extraction harder, but screenshots, OCR and other tools may recover content. PDF Blender is not encryption or DRM.`

### Will it change readability? / 会影响阅读吗？

Chinese: `页面整理主要调整尺寸；图片化和复制层会影响搜索、复制和无障碍读取。更强的水印、噪点或扰动也可能降低清晰度，建议先处理副本并检查效果。`

English: `Formatting changes page dimensions. Flattening and copy layers affect search and accessibility. Stronger visual effects may reduce clarity, so review a sample first.`

### Does it replace the original? / 会覆盖原文件吗？

Chinese: `不会。应用在原文件旁生成以配置名区分的新 PDF；遇到重名时会另取文件名。请保留原文件，以便之后编辑或恢复。`

English: `No. It creates a new PDF beside the original, named after your config. Existing outputs are not overwritten. Keep the original for future editing.`

### Why does installation say “Uses all system resources”? / 为什么安装时提示“使用全部系统资源”？

Chinese: `这是 Windows 对普通桌面应用运行方式的提示。PDF Blender 按当前用户权限运行，不请求管理员权限，也不使用摄像头、麦克风或位置服务。PDF 处理无需联网。`

English: `This is Windows' description of a desktop app. PDF Blender runs with your user permissions, does not request administrator access, and does not use your camera, microphone or location. PDF processing works offline.`

### What does the intensity level mean? / 强度等级是什么意思？

Chinese: `它是应用内比较配置影响程度的指标，不是安全认证。通常等级越高，对清晰度、复制或机器读取的影响也越大。`

English: `It compares the impact of configs within the app, not a certified security rating. Higher levels generally have a greater effect on clarity or extraction.`

### Does hidden AI text stop AI tools? / 隐藏 AI 文本能阻止 AI 读取吗？

Chinese: `不保证。它是可选的被动文字干扰，工具可能忽略它，也可能在提取或无障碍读取时显示它。它不会执行脚本，也不能代替访问控制。`

English: `Not reliably. It adds optional passive text that tools may ignore or expose during extraction. It executes no scripts and is not access control.`

### How can I get help? / 遇到问题怎么反馈？

Chinese: `可在 GitHub 提交问题，或发邮件到 bitcookies@nousbuild.com。请描述软件版本和复现步骤，不要公开上传敏感 PDF。`

English: `Open a GitHub issue or email bitcookies@nousbuild.com with your app version and steps to reproduce. Do not post sensitive PDFs publicly.`

Platform facts may be a compact final FAQ or shown under the hero: Windows 10 version 1809 or later is the manifest's minimum; Windows 10/11 packages target x86, x64 and ARM64. Do not imply that all architecture/OS combinations have already been manually tested.

## 9. Final CTA and footer

Final CTA:

- Heading: `让下一份 PDF 更适合分享。 / Prepare your next PDF for sharing.`
- Supporting copy: `先选配置，再检查处理效果。 / Choose a config, then review the result.`
- Button: the same publication-aware Store/GitHub action as the hero.

Footer columns:

| Column | Contents |
| --- | --- |
| Product | Logo, PDF Blender, `本地 PDF 整理与提取防护工具 / Local PDF formatting and extraction protection` |
| Resources | Features, How it works, FAQ, GitHub, License |
| Contact and privacy | `bitcookies@nousbuild.com` via mailto; Privacy policy; language selector if needed |

Use `© 2026 Bitcookies` or a dynamic year, and retain applicable attribution required by the chosen website template's license. Do not assume that removing visible template branding also removes its license obligations. GPL governs the desktop project; check the Next.js template's own license separately.

Keep GitHub issues and email as the support channels. No contact form is needed: it would introduce server-side message storage, validation and an additional privacy flow.

## 10. Privacy page

### Presentation and publication requirements

- Title: `隐私政策 / Privacy Policy`.
- Product and operator: PDF Blender / Bitcookies.
- Contact: `bitcookies@nousbuild.com`.
- Use the actual effective/publication date. Do not automatically show the current date as if the policy changes daily.
- Readable article width, roughly 720–800 px maximum, with a small contents list if useful.
- Same light/dark behavior and language navigation as the homepage.
- Link from the footer on every route; give the Store a direct HTTPS URL.
- Separate desktop-app behavior from website-hosting behavior. An offline desktop app does not make its website free of network requests or hosting logs.
- The following draft assumes the site has no analytics, ads, accounts, contact form, cloud PDF upload, external embeds or third-party tracking scripts. Verify the deployed template before publishing those claims.
- The heading/body drafts below are not permission to invent Vercel log retention, legal jurisdictions or unverified compliance guarantees.

### Chinese policy draft

**PDF Blender 隐私政策**

生效日期：[填写实际发布日期]

本政策说明 Bitcookies 的 PDF Blender 桌面应用及其产品网站如何处理信息。如有隐私问题，请联系 **bitcookies@nousbuild.com**。

**1. PDF 文件处理**

PDF Blender 在您的设备上预览和处理您主动选择或拖入的 PDF。应用不会将 PDF 文件或正文上传到 Bitcookies 的服务器或第三方处理服务，核心 PDF 功能无需联网。处理结果作为新文件保存在原文件旁，不覆盖原始 PDF。

处理过程中可能在输出目录创建临时文件。应用会在正常完成、失败或取消时尝试清理；断电、强制终止或文件访问错误可能留下临时文件。请自行保管并删除不再需要的原文件和处理结果。

**2. 本地设置与配置**

应用在本机保存主题、语言、配置和槽位等设置。配置可能包含您主动填写的名称、水印文字、自定义复制警示、提示词，以及作者、组织和版权声明。这些信息用于恢复设置和执行您选择的功能，不会作为应用遥测发送给 Bitcookies。当前应用不会将导入 PDF 的正文或文件历史保存到配置文件中。

您可以在应用中删除配置，或通过设置页提供的本地配置位置管理保存的数据。Windows 可能重定向 MSIX 应用的数据位置；卸载行为也可能因系统或备份设置而不同。

**3. 输出文件中的信息**

当您开启水印、元数据、版权声明或隐藏文字功能时，相应文字会写入生成的 PDF。文件接收者、PDF 阅读器或文字提取工具可能读取这些信息，包括正常视图下不可见的文字。请勿在这些字段中填写不希望随输出文件分享的信息。

**4. 设备功能与通知**

PDF Blender 不使用摄像头、麦克风、位置服务或联系人。应用读取 Windows 主题偏好以支持跟随系统主题。开启 Windows 通知后，完成通知可能在屏幕上显示输出文件名；此选项默认关闭。

安装时显示的“使用全部系统资源”表示应用采用普通 Windows 桌面运行方式。应用按当前用户权限运行，不请求管理员权限；这一提示不表示应用正在使用上述设备功能。

**5. 应用联网、外部服务与更新**

当前桌面应用不包含广告、使用分析或文档上传服务。您主动点击 GitHub 或 Microsoft Store 链接时，会打开对应外部服务，它们按各自的隐私政策处理访问。应用不会向这些链接附加 PDF 内容。Microsoft Store 的安装和更新由 Microsoft 提供，其信息处理受 Microsoft 的政策约束。

**6. 产品网站**

产品网站由 Vercel 托管。访问网站时，Vercel 及其交付基础设施可能为提供页面、保障安全和排查故障处理 IP 地址、请求路径、访问时间和浏览器相关技术信息。这些网站访问数据不同于桌面应用中的 PDF 内容；网站不提供 PDF 上传或在线处理功能。

本网站不设置广告或行为分析工具。[上线前核对模板、托管配置及实际脚本。] 如保留语言或主题偏好，浏览器可能在本地保存该选择，用于下次访问时恢复界面。托管服务的信息处理详情请参阅 [Vercel 隐私政策](https://vercel.com/legal/privacy-policy)。本政策不承诺我们无法核实的托管日志保留期限。

**7. 联系与问题反馈**

如果您发邮件或提交 GitHub 问题，我们会接收您主动提供的信息，并用来回复、排查问题和提供支持。邮件和 GitHub 服务商也可能处理这些信息。GitHub 的公开问题可能被其他人查看；请不要提交密码、敏感 PDF 或不必要的个人信息。支持通信会根据解决问题及适用要求所需的时间保留，隐私相关请求可发送至上述邮箱。

**8. 政策更新**

如果信息处理方式发生变化，我们会更新本页面及生效日期。您可通过支持邮箱咨询本政策或提出与我们持有的信息有关的请求；适用权利及处理要求以相关法律为准。

### English policy draft

**PDF Blender Privacy Policy**

Effective date: [insert the actual publication date]

This policy describes how Bitcookies' PDF Blender desktop app and product website handle information. For privacy questions, contact **bitcookies@nousbuild.com**.

**1. PDF processing**

PDF Blender previews and processes PDFs that you select or drop into the app on your device. It does not upload PDF files or their contents to Bitcookies' servers or a third-party processing service. Core PDF tools work offline. Results are saved as new files beside the originals without overwriting them.

Processing may create temporary files in the output folder. The app attempts cleanup after completion, errors or cancellation. A power loss, forced termination or file-access error may leave temporary files. You are responsible for managing originals and output files that you keep.

**2. Local settings and configs**

The app stores preferences, configs and slot assignments on your device. Configs may contain names, watermark text, custom copy warnings, prompts, and author, organization or copyright details that you enter. They are used to restore your settings and run selected tools, not sent to Bitcookies as app telemetry. The current app does not store imported PDF contents or file history in its config files.

You can delete configs in the app or manage stored data using the local config location available from Settings. Windows may redirect packaged-app data locations, and uninstall behavior may depend on system or backup settings.

**3. Information embedded in output files**

If enabled, watermarks, metadata, copyright notices and hidden text are embedded in output PDFs. Recipients, readers and extraction tools may read this information, including text that is invisible in normal viewing. Do not enter information that you do not want to share with the output file.

**4. Device features and notifications**

PDF Blender does not use your camera, microphone, location or contacts. It reads Windows theme preferences to support the system theme. Optional Windows notifications may display output file names; they are switched off by default.

The installation message “Uses all system resources” describes the app's desktop execution model. The app runs with your current user permissions and does not request administrator access. The message does not mean the app uses the device features listed above.

**5. App networking, external services and updates**

The current desktop app includes no advertising, usage analytics or document-upload service. GitHub and Microsoft Store links open those services when you choose them. They handle visits under their own policies; the app does not attach PDF contents to those links. Microsoft supplies Store installation and updates under its own policies.

**6. Product website**

The website is hosted by Vercel. When you visit, Vercel and its delivery infrastructure may process IP addresses, request paths, timestamps and browser-related technical information to deliver pages, maintain security and troubleshoot issues. Website requests are separate from PDFs processed by the desktop app. The website has no PDF upload or online processing feature.

The website uses no advertising or behavioral analytics tools. [Verify the deployed template, hosting settings and scripts before publication.] If language or theme preferences are retained, your browser may store those choices locally to restore the interface on a later visit. See [Vercel's Privacy Policy](https://vercel.com/legal/privacy-policy) for hosting-related information. We do not state a hosting-log retention period that we have not verified.

**7. Support communications**

When you email us or open a GitHub issue, we receive the information you choose to provide and use it to respond, troubleshoot and offer support. Email and GitHub providers may also process it. Public GitHub issues can be viewed by others; do not post passwords, sensitive PDFs or unnecessary personal information. Support communications are retained as needed to resolve requests and meet applicable requirements. Send privacy requests to the contact address above.

**8. Policy changes**

If information handling changes, we will update this page and its effective date. Contact us with policy questions or requests concerning information we hold. Applicable rights and response requirements depend on relevant law.

## 11. Visual, content and Next.js implementation notes

- Use the existing PDF Blender logo, with its transparent background. Restrict the app's red accent to a few CTA/focus elements; retain the template's restrained surfaces and typography. Suggested product accent: light `#C9021E`, dark `#E74856`; these do not require copying every desktop UI color.
- Support light, dark and system modes. Honor `prefers-reduced-motion`; use modest hover/entrance effects rather than the template's heavy faded testimonial animations.
- Use static/server-rendered text and images wherever practical. FAQ state, the mobile menu and preference controls need only small client components. No unnecessary authentication, database, PDF library or API route.
- Use `next/image` for screenshots and supply real image dimensions. A local/static font setup avoids unnecessary third-party font requests. Keep icons and images local rather than introducing social embeds or third-party CDNs.
- On mobile, CTAs must fit the screen, cards become a single column, screenshots scale without cropping controls, and the privacy article has comfortable side padding.
- Provide clear focus states, keyboard-accessible menus/accordions, sufficient color contrast, useful alt text and a logical heading hierarchy. Do not use screenshots as a substitute for readable feature text.
- Language switching should preserve the current page, including privacy. Do not silently redirect on every visit based on browser language; make the user's choice explicit.
- Remove template analytics scripts, demo forms, pricing routes, unused testimonial data and unused components. Verify removal before publishing the privacy draft.
- Start without Vercel Web Analytics or Speed Insights unless the owner explicitly chooses to enable them and updates the policy accordingly. Check whether the template already imports them.
- Do not add a cookie-consent banner merely because the site uses Next.js. Inspect actual cookies/storage and applicable requirements; advertising/analytics are out of initial scope. Theme/language storage still needs a brief disclosure.
- Review the template license, fonts and image provenance before publication. Do not reuse testimonial portraits or partner logos as decoration.

Suggested SEO copy:

| Page | Title | Description |
| --- | --- | --- |
| English home | PDF Blender — Local PDF Tools for Windows | Format pages, add watermarks and make text extraction harder. Process PDFs locally on Windows. |
| Chinese home | PDF Blender — 本地 PDF 整理与提取防护工具 | 统一页面尺寸、添加水印、图片化并调整复制层。在 Windows 本机处理 PDF，无需上传文件。 |
| English privacy | Privacy Policy — PDF Blender | How PDF Blender and its product website handle files, settings and information. |
| Chinese privacy | 隐私政策 — PDF Blender | 了解 PDF Blender 的本地文件处理、配置保存及产品网站的信息处理方式。 |

Set canonical URLs and language alternates from the actual production hostname. Generate a robots file and sitemap containing the four public routes. Use a local Open Graph image with the logo, product name and a short factual headline; no fabricated Store rating or download count. Avoid SoftwareApplication price/rating structured data until the actual values are confirmed.

## 12. Outstanding publication inputs and acceptance checklist

Already supplied: product name, publisher name, support email, intended hostname, source/issue links and Store identity.

Still to confirm before deployment:

1. Vercel project assignment and final reachable HTTPS hostname.
2. Whether the Store listing is publicly available; enable the install CTA only after checking it.
3. Real screenshot assets and permission to publish all visible content; synthetic documents are preferred.
4. The Next.js template's license and any required attribution.
5. Actual policy effective date and whether additional operator details are required for the owner's jurisdiction.
6. Vercel hosting/log settings, any provider-added scripts and any inherited template analytics; remove draft brackets only after review.
7. Successful mail delivery to bitcookies@nousbuild.com.

Acceptance:

- No SaaS pricing, fictional partners/testimonials, fabricated metrics, sign-in or upload form remains.
- Both language homepages display consistent features, use concise copy and link to equivalent privacy pages.
- Feature descriptions match the current app; unavailable GAN is not marketed and protection limits are stated plainly.
- All navigation anchors, source/license/support links and publication-aware CTAs work on mobile and desktop.
- `/privacy` opens publicly over HTTPS without login; the published policy has no placeholders and a real effective date.
- The published site's tracking/storage behavior matches the policy; local app privacy is not confused with website access logs.
- Light/dark rendering, keyboard navigation, reduced motion and image loading work without layout jumps.
- No support form, analytics, subscription or new backend was added without a deliberate scope decision.

No application code, README, Store submission or website deployment is changed by creating this plan. Creating a website from this document is a separate implementation task.
