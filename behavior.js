document.addEventListener('DOMContentLoaded', function() {
  
    if (!sessionStorage.getItem('welcomeShown')) {
        const welcomeOverlay = document.createElement('div');
        welcomeOverlay.style.position = 'fixed';
        welcomeOverlay.style.top = '0';
        welcomeOverlay.style.left = '0';
        welcomeOverlay.style.width = '100%';
        welcomeOverlay.style.height = '100%';
        welcomeOverlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
        welcomeOverlay.style.display = 'flex';
        welcomeOverlay.style.flexDirection = 'column';
        welcomeOverlay.style.justifyContent = 'center';
        welcomeOverlay.style.alignItems = 'center';
        welcomeOverlay.style.zIndex = '1000';
        welcomeOverlay.style.color = '#fff';
        welcomeOverlay.style.fontFamily = "'Arial', sans-serif";
        welcomeOverlay.style.textAlign = 'center';
        welcomeOverlay.id = 'welcomeOverlay';

        const welcomeText = document.createElement('h1');
        welcomeText.textContent = "Welcome to Sabrine's journey!";
        welcomeText.style.fontSize = '2.5rem';
        welcomeText.style.marginBottom = '20px';
        welcomeText.style.textShadow = '0 0 10pxrgb(200, 7, 248)';
        welcomeText.style.opacity = '0';
        welcomeText.style.transform = 'translateY(-50px)';
        welcomeText.style.transition = 'all 1s ease';

        const subText = document.createElement('p');
        subText.textContent = "Exploring the world of code and creativity";
        subText.style.fontSize = '1.2rem';
        subText.style.opacity = '0';
        subText.style.transform = 'translateY(50px)';
        subText.style.transition = 'all 1s ease 0.5s';

        welcomeOverlay.appendChild(welcomeText);
        welcomeOverlay.appendChild(subText);
        document.body.appendChild(welcomeOverlay);

        setTimeout(() => {
            welcomeText.style.opacity = '1';
            welcomeText.style.transform = 'translateY(0)';
            subText.style.opacity = '1';
            subText.style.transform = 'translateY(0)';
        }, 100);

        function createHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '💜';
            heart.style.position = 'absolute';
            heart.style.top = '-20px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            welcomeOverlay.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }
      const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        for (let i = 0; i < 15; i++) {
            setTimeout(createHeart, i * 300);
        }


        function createS() {
            const S = document.createElement('div');
            S.innerHTML = '˖🪼';
            S.style.position = 'absolute';
            S.style.top = '-20px';
            S.style.left = Math.random() * 100 + 'vw';
            S.style.fontSize = (Math.random() * 20 + 10) + 'px';
            S.style.opacity = Math.random() * 0.5 + 0.5;
            S.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            welcomeOverlay.appendChild(S);

            setTimeout(() => {
                S.remove();
            }, 6000);
        }
      const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        for (let i = 0; i < 15; i++) {
            setTimeout(createS, i * 300);
        }

        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Heyy!';
        closeBtn.style.marginTop = '30px';
        closeBtn.style.padding = '10px 30px';
        closeBtn.style.background = '#350264';
        closeBtn.style.color = 'white';
        closeBtn.style.border = 'none';
        closeBtn.style.borderRadius = '20px';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.opacity = '0';
        closeBtn.style.transition = 'all 0.5s ease 1.5s';
        closeBtn.addEventListener('click', () => {
            welcomeOverlay.style.opacity = '0';
            welcomeOverlay.style.pointerEvents = 'none';
            setTimeout(() => welcomeOverlay.remove(), 500);
        });
        welcomeOverlay.appendChild(closeBtn);

        setTimeout(() => {
            closeBtn.style.opacity = '1';
        }, 1500);

        sessionStorage.setItem('welcomeShown', 'true');
    }

   
    const image = document.getElementById('Click_me');
    const hiddenText = document.getElementById('hidden-text');
    if (image && hiddenText) {
        image.addEventListener('click', function() {
            hiddenText.style.display = hiddenText.style.display === 'none' ? 'block' : 'none';
        });
    }

    const typingElement = document.getElementById('typingText');
    if (typingElement) {
        const fullText = [
            "This internship at Holberton represents a transformative step in my journey to becoming a software engineer.",
            "Every line of code I write brings me closer to my dream of creating innovative solutions that make a difference.",
            "What excites me most is the opportunity to learn through Holberton's project-based approach,",
            "gaining real-world skills while surrounded by passionate peers.",
            "The challenges ahead motivate me to push beyond my limits and discover my full potential.",
            "I'm grateful for this chance to turn my passion into a profession,",
            "and I'm committed to making the most of every learning opportunity that comes my way.",
            "Thank you for this opportunity."
        ].join("\n");

        const cursorElement = document.querySelector('.cursor');
        let lineIndex = 0;
        let isNewLine = false;

        function typeWriter() {
            if (lineIndex < fullText.length) {
                if (fullText.charAt(lineIndex) === '\n') {
                    typingElement.innerHTML += '<br><span class="prompt">$</span> ';
                    isNewLine = true;
                } else {
                    if (isNewLine) {
                        typingElement.innerHTML += '<span class="text">';
                        isNewLine = false;
                    }
                    typingElement.querySelector('.text:last-child').textContent += fullText.charAt(lineIndex);
                }
                lineIndex++;
                setTimeout(typeWriter, Math.random() * 30 + 20);
            } else if (cursorElement) {
                cursorElement.style.display = 'none';
            }
        }

        typingElement.innerHTML = '<span class="prompt">$</span> <span class="text"></span>';
        typeWriter();
    }

   
    const socialButtons = {
        twitter: 'https://twitter.com/intent/tweet?text=Check%20out%20my%20coding%20journey%20-%20https://yumui0.github.io/myself/',
        facebook: 'https://www.facebook.com/sharer/sharer.php?u=https://yumui0.github.io/myself/',
        whatsapp: 'https://wa.me/?text=Check%20out%20my%20coding%20journey%20https://yumui0.github.io/myself/'
    };

    Object.keys(socialButtons).forEach(platform => {
        const btn = document.querySelector(`.${platform}`);
        if (btn) {
            btn.addEventListener('click', () => window.open(socialButtons[platform], '_blank'));
        }
    });


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message!');
            this.reset();
        });
    }

   
    const githubImg = document.querySelector('.github-section img.github');
    const githubModal = document.getElementById('github-modal');
    const githubModalImg = document.getElementById('github-modal-img');
    const githubModalClose = document.querySelector('.github-modal-close');

    if (githubImg && githubModal && githubModalImg && githubModalClose) {
        githubImg.addEventListener('click', function() {
            githubModal.style.display = 'flex';
            githubModalImg.src = githubImg.src;
        });

        githubModalClose.addEventListener('click', function() {
            githubModal.style.display = 'none';
        });

        githubModal.addEventListener('click', function(e) {
            if (e.target === githubModal) {
                githubModal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                githubModal.style.display = 'none';
            }
        });
    }
});
