// Google Analytics 設定檔
// ⚠️ 請將 'G-XXXXXXXXXX' 替換為你自己的 Google Analytics Measurement ID

(function() {
    const GA_MEASUREMENT_ID = 'G-6ZFFQ0KWT9';
    
    // 動態載入 Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // 初始化 dataLayer 和 gtag 函數
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    
    // 將 gtag 函數掛載到 window 物件上，方便其他地方使用
    window.gtag = gtag;
})();
