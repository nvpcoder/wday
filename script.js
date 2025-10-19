window.addEventListener('load', () => {
    const messages = [
        "20/10 đã đến rồi!",
        "Chúc các bạn nữ luôn xinh như hoa, giỏi như siêu nhân, và dễ thương như… chính mình 😆",
        "Chúc một ngày ngập tràn tiếng cười, đồ ăn ngon và thật nhiều quà nhé 🎁💐",
        "From vp, hp, lâm, vc, sơn đao 🌷",
    ];

    const msgEl = document.getElementById('message');
    let i = 0;
    msgEl.style.opacity = 1;
    setInterval(() => {
        msgEl.style.opacity = 0;
        setTimeout(() => {
            i = (i + 1) % messages.length;
            msgEl.textContent = messages[i];
            msgEl.style.opacity = 1;
        }, 800);
    }, 4800);

   
    setInterval(createFallingImage, 1100);

    const bgm = document.getElementById('bgm');
    const toggle = document.getElementById('soundToggle');
    let playing = false;

    
    
});


