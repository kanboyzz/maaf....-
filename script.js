const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const emoji = document.querySelector('.emoji');
const card = document.querySelector('.card');

const noMessages = [
    "ihhhh, udah dong jangan ngambek lagi",
    "sayaaaaang maafin akuuuu",
    "sayaaaaang pwisss maafinn",
    "ituuu lhoo tombol merah ituuu klik",
    "maafin aku aja yaaaa?? 🙁"
];

let messageIndex = 0;

noBtn.addEventListener('mouseover', () => {
    moveButton();
});

noBtn.addEventListener('click', () => {
    moveButton();
    message.textContent = noMessages[messageIndex];
    messageIndex = (messageIndex + 1) % noMessages.length;
});

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 100);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${Math.max(20, x)}px`;
    noBtn.style.top = `${Math.max(20, y)}px`;
}

yesBtn.addEventListener('click', () => {
    emoji.textContent = "🥰";
    document.querySelector('h1').textContent = "YEAYYYY, YUHUUUU DIMAAFINN";
    message.textContent = "TIMAACII SAYAAAAAAANGG, I ALWAYS LOVE YOU SO MUCH MORE THAN ANYTHING!!";
    noBtn.style.display = 'none';
    yesBtn.style.width = '100%';
    
    card.style.animation = 'pulse 0.5s ease';

    // Delay sedikit agar animasi/pesan terbaca dulu sebelum diarahkan ke WhatsApp
    setTimeout(() => {
        // Ganti nomor di bawah dengan nomor WhatsApp pacar (Awali dengan kode negara, misal: 628xxxxxxxxxx)
        const phoneNumber = "6283813509363"; 
        const text = encodeURIComponent("lucuuuu, tapi awas aja kamu bikin aku kecewa lagi...");
        
        window.location.href = `https://wa.me/${phoneNumber}?text=${text}`;
    }, 1500);
});
