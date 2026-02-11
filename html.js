
document.write(`
<div id="fhl-toast-notification" class="fhl-toast"></div>
<div id="fhl-widget-container" class="hidden">
    <div class="fhl-indicator-track" id="fhl-indicator-track">
        <div class="fhl-scroll-indicator" id="fhl-scroll-indicator"></div>
    </div>
    <div class="fhl-widget-wrapper" id="fhl-widget-wrapper">
        <div class="fhl-icon-bar" id="fhl-icon-bar">
            
            <button class="fhl-icon-display" id="fhl-mode-toggle">
                <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/System/search-ai-line.svg" class="remix-icon" id="fhl-toggle-icon">
            </button>
            
            
            <div id="fhl-mode-input-area">
                <input type="text" id="fhl-mode-input" placeholder="" autocomplete="off">
                <button class="fhl-icon-display" id="fhl-mode-close" style="width:30px;height:30px">
                     <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/System/close-line.svg" class="remix-icon">
                </button>
            </div>

            
            <div class="fhl-list-container" id="fhl-list-container"></div>
            
            
            <button class="fhl-icon-display" id="fhl-app-search-trigger">
                <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/System/apps-2-line.svg" class="remix-icon">
            </button>
            
            
            <a href="#" id="fhl-add-to-home-btn" class="fhl-icon-display" rel="nofollow">
                <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/System/download-line.svg" class="remix-icon">
            </a>
        </div>
        
        <div class="fhl-search-view" id="fhl-search-view">
            <div class="fhl-search-input-wrapper">
                <input type="text" class="fhl-search-input" id="fhl-search-input" autocomplete="off" placeholder="">
                <button class="fhl-icon-display" id="fhl-search-close">
                    <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/System/close-line.svg" class="remix-icon">
                </button>
            </div>
            <div class="fhl-search-content">
                <div class="fhl-search-results" id="fhl-search-results"></div>
                <div class="fhl-fixed-panel">
                    <a href="#" id="fhl-search-add-btn" rel="nofollow" class="fhl-fixed-item">
                        <img src="https://cdn.jsdelivr.net/npm/remixicon@4.9.1/icons/Business/cloud-line.svg" class="remix-icon">
                    </a>
                    <a href="https://logig.im" id="fhl-fixed-question" class="fhl-fixed-item"><img style='width:24px;border-radius:50%' src='https://www.google.com/s2/favicons?sz=64&domain_url=https://logig.im' alt=''></a>
                    <a href="https://addly.isai.kr" rel="nofollow" id="fhl-fixed-chat" class="fhl-fixed-item"><img style='width:24px;border-radius:50%' src='https://www.google.com/s2/favicons?sz=64&domain_url=https://addly.isai.kr' alt=''></a>
                    <a href="https://webstore.isai.kr" id="fhl-fixed-info" rel="nofollow" class="fhl-fixed-item"><img style='width:24px;border-radius:50%' src='https://www.google.com/s2/favicons?sz=64&domain_url=https://webstore.isai.kr' alt=''></a>
                </div>
            </div>
        </div>
    </div>
</div>
`);
