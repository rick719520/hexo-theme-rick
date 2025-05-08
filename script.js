// 初始化雷达图
document.addEventListener('DOMContentLoaded', function() {
    // 初始化技能进度条
    initializeProgressBars();
});

function initializeProgressBars() {
    // 获取所有技能进度条
    const progressBars = document.querySelectorAll('.skill-radar-progress-fill');
    
    // 创建交叉观察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 获取百分比值
                const percentage = entry.target.getAttribute('data-percentage');
                // 设置宽度
                entry.target.style.width = percentage + '%';
                // 停止观察
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // 开始观察每个进度条
    progressBars.forEach(bar => {
        // 确保宽度初始为0
        bar.style.width = '0';
        observer.observe(bar);
    });
}