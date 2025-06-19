// Timeline data - Add your personal timeline items here
const timelineData = [
    {
        year: 2024,
        event: "Joined IIT Bombay",
        description: "Started my journey at IIT Bombay",
        image: "https://source.unsplash.com/300x200/?iitb-campus",
        details: "First day at IITB, met new friends and got introduced to campus life."
    },
    {
        year: 2024,
        event: "First Year",
        description: "Completed my first year with great learning experiences",
        image: "https://source.unsplash.com/300x200/?iitb-classroom",
        details: "Took core courses, joined clubs, and started exploring campus activities."
    },
    {
        year: 2025,
        event: "Second Year",
        description: "Continuing my journey with new challenges and opportunities",
        image: "https://source.unsplash.com/300x200/?iitb-study",
        details: "Building on foundations, taking more specialized courses and getting involved in projects."
    }
];

// Achievements data - Add your personal achievements here
const achievements = [
    {
        title: "First Year Academic Excellence",
        description: "Successfully completed first year with good academic performance",
        icon: "fas fa-graduation-cap",
        details: "Maintained good GPA and received academic excellence certificate"
    },
    {
        title: "Technical Foundation",
        description: "Built strong technical foundation through core courses",
        icon: "fas fa-laptop-code",
        details: "Completed core CS courses and started personal projects"
    },
    {
        title: "Campus Integration",
        description: "Actively participated in campus activities and events",
        icon: "fas fa-users",
        details: "Joined coding club, participated in sports activities"
    },
    {
        title: "Hostel Life",
        description: "Adjusted to hostel life and made great friends",
        icon: "fas fa-home",
        details: "Made lifelong friends and learned to live independently"
    }
];

// Gallery images - Add your personal photos here
const galleryImages = [
    {
        src: "https://source.unsplash.com/300x200/?iitb-hostel",
        caption: "Hostel Life",
        description: "Making memories in the hostel"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-campus",
        caption: "Campus Walk",
        description: "Exploring the beautiful campus"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-fest",
        caption: "Tech Fest",
        description: "Participating in the annual tech fest"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-workshop",
        caption: "Workshop",
        description: "Learning new skills in a workshop"
    }
];

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Q&A functionality
    const qaItems = document.querySelectorAll('.qa-item');
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Add animation class
            const answer = item.querySelector('.qa-answer');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.opacity = '1';
                }, 50);
            } else {
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            }
        });
    });

    // Initialize timeline
    const timelineContainer = document.querySelector('.timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.year}</h3>
                <h4>${item.event}</h4>
                <p>${item.description}</p>
                <img src="${item.image}" alt="${item.event}">
                <div class="timeline-details" style="display: none;">
                    <p>${item.details}</p>
                </div>
            </div>
        `;
        timelineItem.addEventListener('click', function() {
            const details = this.querySelector('.timeline-details');
            if (details.style.display === 'none') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
        timelineContainer.appendChild(timelineItem);
    });

    // Initialize achievements
    const achievementsGrid = document.querySelector('.achievements-grid');
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
            <div class="achievement-details" style="display: none;">
                <p>${achievement.details}</p>
            </div>
        `;
        achievementCard.addEventListener('mouseenter', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'block';
        });
        achievementCard.addEventListener('mouseleave', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'none';
        });
        achievementsGrid.appendChild(achievementCard);
    });

    // Initialize gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${image.src}" alt="${image.caption}">
                <div class="gallery-caption">
                    <h4>${image.caption}</h4>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });

    // Initialize message form
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = messageForm.querySelector('input').value.trim();
        const message = messageForm.querySelector('textarea').value.trim();
        
        if (!name || !message) {
            alert('Please fill in both name and message');
            return;
        }

        // Create message element
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <span class="name">${name}:</span>
            <p>${message}</p>
            <span class="timestamp">${new Date().toLocaleString()}</span>
        `;

        // Add to message list
        messageList.appendChild(messageItem);
        
        // Clear form
        messageForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Add animation class
            const answer = item.querySelector('.qa-answer');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.opacity = '1';
                }, 50);
            } else {
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            }
        });
    });

    // Initialize timeline
    const timelineContainer = document.querySelector('.timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.year}</h3>
                <h4>${item.event}</h4>
                <p>${item.description}</p>
                <img src="${item.image}" alt="${item.event}">
                <div class="timeline-details" style="display: none;">
                    <p>${item.details}</p>
                </div>
            </div>
        `;
        timelineItem.addEventListener('click', function() {
            const details = this.querySelector('.timeline-details');
            if (details.style.display === 'none') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
        timelineContainer.appendChild(timelineItem);
    });

    // Initialize achievements
    const achievementsGrid = document.querySelector('.achievements-grid');
    achievements.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
            <div class="achievement-details" style="display: none;">
                <p>${achievement.details}</p>
            </div>
        `;
        achievementCard.addEventListener('mouseenter', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'block';
        });
        achievementCard.addEventListener('mouseleave', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'none';
        });
        achievementsGrid.appendChild(achievementCard);
    });

    // Initialize gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${image.src}" alt="${image.caption}">
                <div class="gallery-caption">
                    <h4>${image.caption}</h4>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });

    // Initialize message form
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = messageForm.querySelector('input').value.trim();
        const message = messageForm.querySelector('textarea').value.trim();
        
        if (!name || !message) {
            alert('Please fill in both name and message');
            return;
        }

        // Create message element
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <span class="name">${name}:</span>
            <p>${message}</p>
            <span class="timestamp">${new Date().toLocaleString()}</span>
        `;

        // Add to message list
        messageList.appendChild(messageItem);
        
        // Clear form
        messageForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Gallery images - Add your personal photos here
const galleryImages = [
    {
        src: "https://source.unsplash.com/300x200/?iitb-hostel",
        caption: "Hostel Life",
        description: "Making memories in the hostel"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-campus",
        caption: "Campus Walk",
        description: "Exploring the beautiful campus"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-fest",
        caption: "Tech Fest",
        description: "Participating in the annual tech fest"
    },
    {
        src: "https://source.unsplash.com/300x200/?iitb-workshop",
        caption: "Workshop",
        description: "Learning new skills in a workshop"
    }
];

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Q&A functionality
    const qaItems = document.querySelectorAll('.qa-item');
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        question.addEventListener('click', function() {
            // Toggle active class
            item.classList.toggle('active');
            
            // Add animation class
            const answer = item.querySelector('.qa-answer');
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.opacity = '1';
                }, 50);
            } else {
                answer.style.opacity = '0';
                setTimeout(() => {
                    answer.style.display = 'none';
                }, 300);
            }
        });
    });

    // Initialize timeline
    const timelineContainer = document.querySelector('.timeline-container');
    timelineData.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <h3>${item.year}</h3>
                <h4>${item.event}</h4>
                <p>${item.description}</p>
                <img src="${item.image}" alt="${item.event}">
                <div class="timeline-details" style="display: none;">
                    <p>${item.details}</p>
        achievementCard.innerHTML = `
            <div class="achievement-icon">
                <i class="${achievement.icon}"></i>
            </div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
            <div class="achievement-details" style="display: none;">
                <p>${achievement.details}</p>
            </div>
        `;
        achievementCard.addEventListener('mouseenter', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'block';
        });
        achievementCard.addEventListener('mouseleave', function() {
            const details = this.querySelector('.achievement-details');
            details.style.display = 'none';
        });
        achievementsGrid.appendChild(achievementCard);
    });

    // Gallery with lightbox effect
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-image">
                <img src="${image.src}" alt="${image.caption}">
                <div class="gallery-caption">
                    <h4>${image.caption}</h4>
                    <p>${image.description}</p>
                </div>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });

    // Message form handling with validation
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        const name = messageForm.querySelector('input').value.trim();
        const message = messageForm.querySelector('textarea').value.trim();
        
        if (!name || !message) {
            alert('Please fill in both name and message');
            return;
        }

        // Create message element
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <span class="name">${name}:</span>
            <p>${message}</p>
            <span class="timestamp">${new Date().toLocaleString()}</span>
        `;

        // Add to message list
        messageList.appendChild(messageItem);
        
        // Clear form
        messageForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
        
        // Clear form
        messageForm.reset();
    });
});
