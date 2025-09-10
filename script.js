document.addEventListener('DOMContentLoaded', function() {
    // 添加卡片动画
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        // 延迟显示动画
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // 控制台欢迎信息
    console.log('%c欢迎访问赵洪的个人简介', 
        'color: #3498db; font-size: 16px; font-weight: bold;');
});