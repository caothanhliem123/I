// ==UserScript==
// @name         Popup đầu tiên của Liêm đz :))
// @namespace    http://tampermonkey.net/
// @version      1.1
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const popup = document.createElement('div');
    popup.innerHTML = `
        <div id="popupContent" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            z-index: 9999;
        ">
            <h2 id="xc">Xin chào!</h2>
            <p>Đây là popup từ Tampermonkey</p>
            <button id="BtnColor" style="padding: 5px 10px; margin: 5px;">Màu</button>
            <button id="closeBtn" style="padding: 5px 10px; margin: 5px;">Đóng</button>
            <button id="BtnColor2" style="padding: 5px 10px; margin: 5px;">Màu 2</button>
        </div>
    `;
    document.body.appendChild(popup);
    const popupContent = document.getElementById('popupContent');
    const xc = document.getElementById('xc');
    let isBlue = false;
    const mmd = "#ffffff";
    const mxl = "#4CAF50";
    const mau2 = ["#ff0033","#ffccaa","#c450fa"];   
    function lnn(mang) {
        const lsnn = Math.floor(Math.random() * mau2.length);
        return mang[lsnn];
    }  
    document.getElementById('BtnColor2').addEventListener('click', function() {
        const mnn = lnn(mau2);
        xc.style.color = mnn;
    });   
    document.getElementById('BtnColor').addEventListener('click', function() {
        popupContent.style.background = isBlue ? mmd : mxl;
        isBlue = !isBlue;
    });
    document.getElementById('closeBtn').addEventListener('click', () => {
        popup.remove();
    });
    const reopenBtn = document.createElement('button');
    reopenBtn.textContent = 'Mở popup';
    reopenBtn.id = 'reopenBtn';
    Object.assign(reopenBtn.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '8px 15px',
        background: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'move',
        zIndex: '9998',
        userSelect: 'none'
    });
    reopenBtn.onmousedown = function(e) {
        const startX = e.clientX - this.getBoundingClientRect().left;
        const startY = e.clientY - this.getBoundingClientRect().top;        
        function move(e) {
            reopenBtn.style.left = (e.clientX - startX) + 'px';
            reopenBtn.style.top = (e.clientY - startY) + 'px';
            reopenBtn.style.right = 'auto';
            reopenBtn.style.bottom = 'auto';
        }       
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', move);
        }, { once: true });
    };

    reopenBtn.addEventListener('click', () => {
        document.body.appendChild(popup);
    });

    document.body.appendChild(reopenBtn);
})();