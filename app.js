document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    loginBtn.addEventListener('click', () => {
        window.location.href = `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=${encodeURIComponent('https://yourdomain.com/callback')}&response_type=code&scope=identify`;
    });

    logoutBtn.addEventListener('click', () => {
        // Handle logout logic here
        window.location.href = '/logout';
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80
            },
            "size": {
                "value": 3
            },
            "move": {
                "speed": 1
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    });
});

// WebSocket or API integration for announcements
const updateAnnouncements = async () => {
    // Fetch and display announcements
};

updateAnnouncements();
