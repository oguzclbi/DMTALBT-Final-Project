const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let index = 0;
const totalSlides = dots.length;

function showSlide(i) {
    slides.style.transform = 'translateX(' + (-i * 100) + '%)';
    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

setInterval(nextSlide, 4000); // 4 saniyede bir otomatik geçiş

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);





















function openModal() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

function searchGame() {
    let searchValue = document.getElementById("searchInput").value;
    if (searchValue.trim() !== "") {
        alert("Aranan oyun: " + searchValue);
    } else {
        alert("Lütfen bir oyun adı yaz.");
    }
}

// Modalı dışa tıklayınca kapatma
window.onclick = function (event) {
    let modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






document.querySelectorAll('.wishlistBtn').forEach(button => {
    const gameId = button.getAttribute('data-game-id'); // Her butona data-game-id eklemelisin

    // Sayfa yüklendiğinde localStorage'dan durumu kontrol et
    if (localStorage.getItem(gameId) === 'selected') {
        button.classList.add('selected');
    }

    button.addEventListener('click', () => {
        const isSelected = button.classList.contains('selected');
        const message = document.createElement('div');
        message.className = "wishlist-message";

        if (isSelected) {
            button.classList.remove('selected');
            message.textContent = "İstek listesinden kaldırıldı!";
            message.classList.add('removed');
            localStorage.removeItem(gameId);
        } else {
            button.classList.add('selected');
            message.textContent = "İstek listesine eklendi!";
            message.classList.add('added');
            localStorage.setItem(gameId, 'selected');
        }

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    });
});












window.onload = function () {
    let user = localStorage.getItem("username");
    if (user) {
        document.getElementById("userNameDisplay").textContent = user + " | ";
    }
}





















function toggleWishlist(button, title, price, imgSrc) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const itemIndex = wishlist.findIndex(item => item.title === title);

    if (itemIndex !== -1) {
        wishlist.splice(itemIndex, 1);
        button.classList.remove("active");
        button.innerHTML = '<i class="fas fa-plus"></i>';
    } else {
        wishlist.push({ title, price, imgSrc });
        button.classList.add("active");
        button.innerHTML = '<i class="fas fa-check"></i>';
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}


// Sayfa yüklenince butonları kontrol et
window.onload = function () {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    document.querySelectorAll(".wishlistBtn").forEach(button => {
        const card = button.closest(".game-card");
        const title = card.querySelector("h3").textContent;

        if (wishlist.some(item => item.title === title)) {
            button.classList.add("active");
            button.innerHTML = '<i class="fas fa-check"></i>';
        }
    });
};
























function loginUser() {
    let username = prompt("Kullanıcı adınızı girin:");
    if (username) {
        localStorage.setItem("loggedUser", username);
        document.getElementById("usernameDisplay").textContent = `${username} olarak giriş yapıldı.`;
    }
}

window.onload = function () {
    let username = localStorage.getItem("loggedUser");
    if (username) {
        document.getElementById("usernameDisplay").textContent = `${username} olarak giriş yapıldı.`;
    }
}


























window.addEventListener("DOMContentLoaded", () => {
    const storedName = localStorage.getItem("userName");
    const userIcon = document.getElementById("userIcon");
    const userNameDisplay = document.getElementById("userNameDisplay");

    if (storedName) {
        userIcon.classList.add("logged-in");
        userNameDisplay.textContent = storedName;
    } else {
        userIcon.classList.remove("logged-in");
        userNameDisplay.textContent = "";
    }
});

document.getElementById("userIcon").addEventListener("click", () => {
    window.location.href = "giris.html";
});












































function toggleLangMenu() {
    const menu = document.getElementById("langMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function selectLanguage(lang) {
    const translations = {
        tr: { label: "TR", welcome: "Hoşgeldiniz!" },
        en: { label: "EN", welcome: "Welcome!" },
        de: { label: "DE", welcome: "Willkommen!" },
        fr: { label: "FR", welcome: "Bienvenue!" },
        es: { label: "ES", welcome: "¡Bienvenido!" }
    };

    localStorage.setItem("lang", lang);
    document.getElementById("currentLang").textContent = translations[lang].label;
    document.getElementById("welcomeText").textContent = translations[lang].welcome;
    document.getElementById("langMenu").style.display = "none";
}

window.onload = function () {
    const savedLang = localStorage.getItem("lang") || "tr";
    selectLanguage(savedLang);
};




























































// Sayfa yüklendiğinde kaydedilen puanı kontrol et ve yıldızları doldur
document.addEventListener("DOMContentLoaded", function () {
    const gameCards = document.querySelectorAll('.game-card');

    gameCards.forEach(card => {
        const gameName = card.querySelector('.rating').getAttribute('data-game');
        const savedRating = localStorage.getItem(gameName); // Oyun adına göre kaydedilen puanı al

        if (savedRating) {
            // Eğer kaydedilen puan varsa, o puana kadar olan yıldızları doldur
            const stars = card.querySelectorAll('.star');
            for (let i = 0; i < savedRating; i++) {
                stars[i].classList.add('selected');
            }
        }
    });
});

// Puanlama işlemi
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        let rating = this.getAttribute('data-value');
        let stars = this.parentElement.querySelectorAll('.star');
        let gameName = this.parentElement.getAttribute('data-game'); // Oyun adını al

        stars.forEach(s => {
            s.classList.remove('selected');
        });

        // Seçilen puanı kaydet
        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }

        // Seçilen puanı localStorage'a kaydet
        localStorage.setItem(gameName, rating);

        console.log("Seçilen Puan:", rating);
    });
});













































// ——— İndirim geri sayım fonksiyonu ———
function startCountdown(id, duration) {
    const countdownElement = document.getElementById(id);
    let startTime = localStorage.getItem(id);

    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem(id, startTime);
    }

    const endTime = parseInt(startTime) + (duration * 1000);

    const timer = setInterval(() => {
        const now = Date.now();
        const remaining = Math.floor((endTime - now) / 1000);

        if (remaining <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Süre doldu!";
            localStorage.removeItem(id);
            handleDiscountEnd(id); // Süre dolduğunda indirim kalksın
        } else {
            const minutes = Math.floor(remaining / 60);
            const seconds = remaining % 60;
            countdownElement.textContent = `${minutes}dk ${seconds}sn`;
        }
    }, 1000);
}

// ——— İndirim bitince yapılacaklar ———
function handleDiscountEnd(id) {
    const countdownElement = document.getElementById(id);
    const gameCard = countdownElement.closest(".game-card");

    // İndirim etiketi varsa kaldır
    const discountBadge = gameCard.querySelector(".discount-badge");
    if (discountBadge) {
        discountBadge.remove();
    }

    // Eski ve yeni fiyat varsa eski haline çevir
    const priceArea = gameCard.querySelector(".card-content");
    const oldPrice = priceArea.querySelector(".old-price");
    const discountedPrice = priceArea.querySelector(".discounted-price");

    if (oldPrice && discountedPrice) {
        oldPrice.remove();
        discountedPrice.remove();
        const originalPrice = gameCard.getAttribute("data-price");
        const priceElement = document.createElement("h3");
        priceElement.className = "price";
        priceElement.textContent = originalPrice;
        priceArea.insertBefore(priceElement, priceArea.querySelector(".rating"));
    }
}

// ——— İndirimli fiyat gösterme ———
function applyDiscount(id, newPrice) {
    const countdownElement = document.getElementById(id);
    const gameCard = countdownElement.closest(".game-card");
    const priceArea = gameCard.querySelector(".card-content");
    const originalPrice = gameCard.getAttribute("data-price");

    const oldPriceElement = document.createElement("span");
    oldPriceElement.className = "old-price";
    oldPriceElement.textContent = originalPrice;

    const discountedPriceElement = document.createElement("span");
    discountedPriceElement.className = "discounted-price";
    discountedPriceElement.textContent = newPrice;

    const priceElement = priceArea.querySelector(".price");
    if (priceElement) {
        priceElement.remove();
    }

    // Fiyat alanına yeni fiyatları ekle
    const priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";
    priceWrapper.appendChild(oldPriceElement);
    priceWrapper.appendChild(discountedPriceElement);

    priceArea.insertBefore(priceWrapper, priceArea.querySelector(".rating"));
}

// ——— Geri sayım başlat (20 dakika = 1200 saniye) ———
startCountdown("countdown1", 1200);
startCountdown("countdown2", 1200);
startCountdown("countdown3", 1200);
startCountdown("countdown4", 1200);
startCountdown("countdown5", 1200);
// ——— Örnek: hemen sayfa yüklenince indirim uygula ———




























































document.querySelectorAll(".free-claim-btn").forEach(button => {
    button.addEventListener("click", function () {
        const gameCard = this.closest(".free-game-card");
        const gameTitle = gameCard.querySelector("h3").textContent;
        const gamePrice = gameCard.getAttribute("data-price");
        const gameImg = gameCard.querySelector("img").src;

        // Sepeti localStorage’tan çek
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Daha önce eklenmiş mi kontrol et
        const alreadyInCart = cartItems.some(item => item.title === gameTitle);

        if (alreadyInCart) {
            // Zaten varsa uyarı ver
            const message = document.createElement("div");
            message.className = "cart-message error";
            message.textContent = `${gameTitle} zaten sepette var!`;
            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 2000);
        } else {
            // Yoksa ekle
            cartItems.push({ title: gameTitle, price: gamePrice, imgSrc: gameImg });
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            // Eklendi mesajı
            const message = document.createElement("div");
            message.className = "cart-message success";
            message.textContent = `${gameTitle} sepete eklendi.`;
            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 2000);
        }
    });
});









































document.querySelectorAll(".buy-btn").forEach(button => {
    button.addEventListener("click", function () {
        const gameCard = this.closest(".game-card");
        const gameTitle = gameCard.querySelector("h3").textContent;
        const gamePrice = gameCard.getAttribute("data-price");
        const gameImg = gameCard.querySelector("img").src;

        // Sepeti localStorage’tan çek
        let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        // Daha önce eklenmiş mi kontrol et
        const alreadyInCart = cartItems.some(item => item.title === gameTitle);

        if (alreadyInCart) {
            showMessage(`${gameTitle} zaten sepette var!`, "error");
        } else {
            // Fiyat kontrolü: Eğer "Ücretsiz" yazıyorsa string olarak ekle
            const priceToAdd = (gamePrice === "Ücretsiz" || gamePrice === "₺0") ? "Ücretsiz" : gamePrice;

            // Sepete ekle
            cartItems.push({ title: gameTitle, price: priceToAdd, imgSrc: gameImg });
            localStorage.setItem("cartItems", JSON.stringify(cartItems));

            showMessage(`${gameTitle} (${priceToAdd}) sepete eklendi.`, "success");
        }
    });
});

// Uyarı mesajını ekrana basan fonksiyon
function showMessage(text, type) {
    const message = document.createElement("div");
    message.className = `cart-message ${type}`;
    message.textContent = text;
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2000);
}










































// Arama işlevi
document.getElementById("searchInput").addEventListener("keyup", function () {
    let searchValue = this.value.toLowerCase();
    let cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
        let title = card.querySelector("h3").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

// Kategori filtreleme
function filterByCategory(category) {
    let cards = document.querySelectorAll(".game-card");

    cards.forEach(card => {
        let cardCategory = card.getAttribute("data-category");

        if (category === "Tümü" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
























































function searchGames() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    if (input === "") {
        searchResults.style.display = "none";
        return;
    }

    const cards = document.querySelectorAll(".game-card");
    let found = 0;

    cards.forEach(card => {
        const titleElement = card.querySelector(".card-content h3");
        const priceElement = card.querySelector(".price");
        const imgElement = card.querySelector(".card-img img");

        if (titleElement && priceElement && imgElement) {
            const title = titleElement.textContent.toLowerCase();
            const price = priceElement.textContent;
            const imgSrc = imgElement.src;

            if (title.includes(input)) {
                const item = document.createElement("div");
                item.className = "search-result-item";
                item.innerHTML = `
          <img src="${imgSrc}" alt="${title}">
          <h4>${title}</h4>
          <p>${price}</p>
        `;

                searchResults.appendChild(item);
                found++;
            }
        }
    });

    searchResults.style.display = found ? "block" : "none";
}




























































let currentVideoIndex = 0;
const videoList = document.querySelectorAll(".video-thumb");
const mainVideo = document.getElementById("mainVideo");

function playVideoAtIndex(index) {
    videoList.forEach((thumb) => thumb.classList.remove("active"));
    videoList[index].classList.add("active");
    const newSrc = videoList[index].getAttribute("data-src");
    mainVideo.src = newSrc;
    mainVideo.play();
    currentVideoIndex = index;
}

setInterval(() => {
    currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    playVideoAtIndex(currentVideoIndex);
}, 60000);

videoList.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        playVideoAtIndex(index);
    });
});

mainVideo.addEventListener("mouseenter", () => {
    mainVideo.muted = false;
});
mainVideo.addEventListener("mouseleave", () => {
    mainVideo.muted = true;
});

mainVideo.addEventListener("click", () => {
    if (mainVideo.requestFullscreen) {
        mainVideo.requestFullscreen();
    }
});

