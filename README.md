# RICK Theme - 现代轻量化Hexo博客主题

一个现代、优雅、功能丰富且轻量级的Hexo博客主题，支持响应式设计、深色/浅色模式切换、平滑动画效果，以及多种自定义选项。

## 主要特点

- **响应式设计**: 在各种设备上都能完美展示
- **深色/浅色模式**: 支持自动切换或手动选择主题模式
- **现代化界面**: 采用简洁优雅的设计风格
- **平滑动画效果**: 精心设计的过渡和动画效果
- **强大的自定义选项**: 通过配置文件轻松自定义主题外观
- **下拉菜单支持**: 可以创建多级导航菜单
- **代码高亮**: 内置代码语法高亮功能，支持多种编程语言
- **搜索功能**: 内置站内搜索功能
- **性能优化**: 优化加载速度和运行性能
- **社交媒体集成**: 轻松添加社交媒体链接

## 安装

### 方法一: 通过npm安装

```bash
cd your-hexo-site
npm install hexo-theme-rick --save
```

然后在Hexo的配置文件 `_config.yml` 中设置主题:

```yaml
theme: ricktheme
```

### 方法二: 手动安装

```bash
cd your-hexo-site
git clone https://github.com/yourusername/hexo-theme-rick.git themes/ricktheme
```

同样，在Hexo的配置文件 `_config.yml` 中设置主题:

```yaml
theme: ricktheme
```

## 配置

主题的配置文件位于 `themes/ricktheme/_config.yml`。以下是一些重要配置项的说明：

### 导航栏配置

```yaml
menu:
  首页: /
  归档: /archives
  分类: /categories
  标签: /tags
  自定义菜单: 
    text: 自定义菜单
    items:
      示例子菜单: /example
```

### 主题颜色配置

```yaml
colors:
  highlight: '#64748B'
  highlight_rgb: '100, 116, 139'
```

### 主题模式配置

```yaml
theme:
  auto_mode: true     # 是否自动切换主题模式
  default: dark       # 默认主题模式: dark或light
```

### 社交媒体链接

```yaml
social:
  github: https://github.com/yourusername
  twitter: https://twitter.com/yourusername
  weibo: https://weibo.com/yourusername
```

## 自定义

### 添加自定义CSS

创建 `source/css/custom.css` 文件添加自定义样式。

### 添加自定义JavaScript

创建 `source/js/custom.js` 文件添加自定义脚本。

## 常见问题

### 如何添加自定义页面？

1. 使用Hexo命令创建新页面:
   ```bash
   hexo new page "pagename"
   ```

2. 编辑 `source/pagename/index.md` 文件

### 如何开启文章目录？

在文章的front-matter中添加:

```yaml
toc: true
```

或在主题配置中全局启用:

```yaml
toc: true
```

## 支持与贡献

如果你发现任何问题或有改进建议，欢迎提交 issue 或 pull request。

## 许可证

本项目基于 [MIT许可证](LICENSE) 开源。 