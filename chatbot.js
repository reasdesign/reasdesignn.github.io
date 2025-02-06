document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.createElement("div");
    chatBox.innerHTML = `
        <div class="chat">
            <p>Merhaba! Size nasıl yardımcı olabilirim?</p>
            <input type="text" id="chat-input" placeholder="Sorunuzu yazın...">
        </div>
    `;
    document.body.appendChild(chatBox);
});
