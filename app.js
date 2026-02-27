// FarmConnect - JavaScript Application

// ==================== DATA INITIALIZATION ====================

// Sample Resources Data
const resourcesData = [
    {
        id: 1,
        title: "Rice Cultivation Guide",
        category: "crop",
        description: "Complete guide to paddy cultivation including seed selection, irrigation methods, and harvest techniques.",
        author: "Dr. Ramesh Kumar",
        type: "PDF Guide",
        duration: "15 min read"
    },
    {
        id: 2,
        title: "Organic Farming Techniques",
        category: "crop",
        description: "Learn modern organic farming methods to improve soil health and crop yield naturally.",
        author: "Prof. Sarah Devi",
        type: "Video Tutorial",
        duration: "25 min"
    },
    {
        id: 3,
        title: "Cattle Management Best Practices",
        category: "livestock",
        description: "Essential guidelines for dairy and beef cattle management, feeding, and healthcare.",
        author: "Dr. Amit Patel",
        type: "PDF Guide",
        duration: "20 min read"
    },
    {
        id: 4,
        title: "Poultry Farming Handbook",
        category: "livestock",
        description: "Comprehensive guide to starting and maintaining a successful poultry farm.",
        author: "Dr. Meera Sharma",
        type: "E-Book",
        duration: "30 min read"
    },
    {
        id: 5,
        title: "Smart Irrigation Systems",
        category: "technology",
        description: "Introduction to drip irrigation, sprinkler systems, and automated water management.",
        author: "Eng. John Singh",
        type: "Video Tutorial",
        duration: "18 min"
    },
    {
        id: 6,
        title: "Drone Technology in Agriculture",
        category: "technology",
        description: "Using drones for crop monitoring, precision farming, and pesticide spraying.",
        author: "Tech Farm Inc.",
        type: "Article",
        duration: "10 min read"
    },
    {
        id: 7,
        title: "PM-KISAN Scheme Guide",
        category: "scheme",
        description: "Complete information about PM-KISAN scheme eligibility, application process, and benefits.",
        author: "Govt. of India",
        type: "Official Document",
        duration: "8 min read"
    },
    {
        id: 8,
        title: "Kisan Credit Card Scheme",
        category: "scheme",
        description: "Learn about KCC benefits, interest rates, and how to apply for agricultural credit.",
        author: "NABARD",
        type: "PDF Guide",
        duration: "12 min read"
    },
    {
        id: 9,
        title: "Wheat Production Technology",
        category: "crop",
        description: "Modern techniques for maximizing wheat yield including weather-based advisories.",
        author: "IARI Research",
        type: "Research Paper",
        duration: "22 min read"
    },
    {
        id: 10,
        title: "Goat Farming Business Plan",
        category: "livestock",
        description: "Step-by-step guide to starting a profitable goat farming business.",
        author: "Dr. Vikram Kumar",
        type: "E-Book",
        duration: "35 min read"
    }
];

// Sample Experts Data
const expertsData = [
    {
        id: 1,
        name: "Dr. Ramesh Chandra",
        specialization: "crop",
        experience: "15 years",
        rating: 4.9,
        bio: "Expert in rice and wheat cultivation with PhD in Agronomy from IARI.",
        consultations: 245,
        status: "approved"
    },
    {
        id: 2,
        name: "Dr. Priya Sharma",
        specialization: "soil",
        experience: "12 years",
        rating: 4.8,
        bio: "Soil scientist specializing in organic farming and soil health management.",
        consultations: 189,
        status: "approved"
    },
    {
        id: 3,
        name: "Dr. Amit Patel",
        specialization: "livestock",
        experience: "18 years",
        rating: 4.7,
        bio: "Veterinary expert with specialization in dairy cattle management.",
        consultations: 312,
        status: "approved"
    },
    {
        id: 4,
        name: "Eng. Sarah Johnson",
        specialization: "technology",
        experience: "10 years",
        rating: 4.9,
        bio: "Agricultural engineer focused on smart farming and precision agriculture.",
        consultations: 156,
        status: "approved"
    },
    {
        id: 5,
        name: "Dr. Manoj Kumar",
        specialization: "crop",
        experience: "20 years",
        rating: 4.6,
        bio: "Horticulture expert specializing in vegetable cultivation and floriculture.",
        consultations: 278,
        status: "approved"
    },
    {
        id: 6,
        name: "Dr. Anjali Reddy",
        specialization: "soil",
        experience: "8 years",
        rating: 4.8,
        bio: "Young researcher working on sustainable soil management practices.",
        consultations: 98,
        status: "pending"
    }
];

// Sample Forum Posts
const forumPostsData = [
    {
        id: 1,
        title: "Best time to plant paddy in Punjab region?",
        category: "question",
        content: "I am planning to cultivate paddy this season. What is the ideal time for transplantation in Punjab region?",
        author: "Gurpreet Singh",
        role: "farmer",
        upvotes: 45,
        replies: 12,
        date: "2 days ago"
    },
    {
        id: 2,
        title: "My journey from traditional to organic farming",
        category: "success",
        content: "After 3 years of transition, I am now successfully farming organically. Here's what I learned...",
        author: "Ramesh Kumar",
        role: "farmer",
        upvotes: 128,
        replies: 34,
        date: "1 week ago"
    },
    {
        id: 3,
        title: "Tips for preventing tomato blight",
        category: "tips",
        content: "Here are some effective natural methods I use to prevent blight in my tomato crop...",
        author: "Dr. Priya Sharma",
        role: "expert",
        upvotes: 89,
        replies: 21,
        date: "3 days ago"
    },
    {
        id: 4,
        title: "Discussion: Government subsidy for solar pumps",
        category: "discussion",
        content: "Has anyone recently applied for the solar pump subsidy scheme? Let's discuss the process...",
        author: "Vikram Reddy",
        role: "farmer",
        upvotes: 56,
        replies: 18,
        date: "5 days ago"
    },
    {
        id: 5,
        title: "How to start with goat farming?",
        category: "question",
        content: "I want to start goat farming. What breed should I choose and what initial investment is needed?",
        author: "Suresh Yadav",
        role: "farmer",
        upvotes: 34,
        replies: 15,
        date: "1 day ago"
    }
];

// Sample Initiatives
const initiativesData = [
    {
        id: 1,
        title: "PM-KISAN Samman",
        description: "Direct income support of Rs 6000 per year to farmer families. Register now to receive benefits directly in your bank account.",
        participants: 4500,
        target: 10000,
        category: "Government Scheme",
        icon: "fa-hand-holding-dollar"
    },
    {
        id: 2,
        title: "Solar Pump Installation Program",
        description: "Get 60% subsidy on solar water pumps. Clean energy solution for sustainable irrigation.",
        participants: 850,
        target: 2000,
        category: "Government Scheme",
        icon: "fa-solar-panel"
    },
    {
        id: 3,
        title: "Organic Farming Training",
        description: "Free certification training for organic farming methods. Learn from certified experts.",
        participants: 1200,
        target: 3000,
        category: "Training Program",
        icon: "fa-leaf"
    },
    {
        id: 4,
        title: "Farmer Producer Organization",
        description: "Join local FPOs to get better market access and fair prices for your produce.",
        participants: 2300,
        target: 5000,
        category: "Community Program",
        icon: "fa-people-group"
    }
];

// ==================== APPLICATION STATE ====================

let currentUser = null;
let authMode = 'login';
let selectedRole = 'farmer';

// Initialize data from localStorage or use defaults
function initializeData() {
    if (!localStorage.getItem('farmconnect_users')) {
        const defaultUsers = [
            { id: 1, name: "Admin User", email: "admin@farmconnect.com", password: "admin123", role: "admin", status: "active" },
            { id: 2, name: "Demo Farmer", email: "farmer@demo.com", password: "farmer123", role: "farmer", status: "active" },
            { id: 3, name: "Demo Expert", email: "expert@demo.com", password: "expert123", role: "expert", status: "approved" }
        ];
        localStorage.setItem('farmconnect_users', JSON.stringify(defaultUsers));
    }

    if (!localStorage.getItem('farmconnect_currentUser')) {
        localStorage.setItem('farmconnect_currentUser', JSON.stringify(null));
    }

    if (!localStorage.getItem('farmconnect_bookmarks')) {
        localStorage.setItem('farmconnect_bookmarks', JSON.stringify([]));
    }

    if (!localStorage.getItem('farmconnect_initiatives')) {
        localStorage.setItem('farmconnect_initiatives', JSON.stringify([]));
    }

    // Load current user
    currentUser = JSON.parse(localStorage.getItem('farmconnect_currentUser'));
    
    updateUI();
}

// ==================== NAVIGATION ====================

function showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Show selected view
    const targetView = document.getElementById(viewName + 'View');
    if (targetView) {
        targetView.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`.nav-links a[data-view="${viewName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // Load view-specific content
    switch(viewName) {
        case 'resources':
            renderResources();
            break;
        case 'experts':
            renderExperts();
            break;
        case 'forum':
            renderForum();
            break;
        case 'initiatives':
            renderInitiatives();
            break;
        case 'profile':
            loadProfile();
            break;
        case 'adminDashboard':
            renderAdminDashboard();
            break;
        case 'farmerDashboard':
            renderFarmerDashboard();
            break;
        case 'expertDashboard':
            renderExpertDashboard();
            break;
    }

    // Close mobile menu
    document.getElementById('mobileNav').classList.remove('show');
}

function showDashboard() {
    toggleUserDropdown();
    
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    switch(currentUser.role) {
        case 'admin':
            showView('adminDashboard');
            break;
        case 'farmer':
            showView('farmerDashboard');
            break;
        case 'expert':
            showView('expertDashboard');
            break;
        default:
            showView('home');
    }
}

// ==================== AUTHENTICATION ====================

function showAuthModal(mode) {
    authMode = mode;
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authModalTitle');
    const nameGroup = document.getElementById('nameGroup');
    const roleGroup = document.getElementById('roleGroup');
    const submitBtn = document.getElementById('authSubmitBtn');
    const switchText = document.getElementById('authSwitchText');
    const switchLink = document.getElementById('authSwitchLink');

    modal.classList.add('show');

    if (mode === 'login') {
        title.textContent = 'Login';
        nameGroup.style.display = 'none';
        roleGroup.style.display = 'none';
        submitBtn.textContent = 'Login';
        switchText.textContent = "Don't have an account?";
        switchLink.textContent = 'Register';
    } else {
        title.textContent = 'Create Account';
        nameGroup.style.display = 'block';
        roleGroup.style.display = 'block';
        submitBtn.textContent = 'Register';
        switchText.textContent = 'Already have an account?';
        switchLink.textContent = 'Login';
    }
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('show');
    document.getElementById('authForm').reset();
    clearRoleSelection();
}

function toggleAuthMode() {
    if (authMode === 'login') {
        showAuthModal('register');
    } else {
        showAuthModal('login');
    }
}

function selectRole(role) {
    selectedRole = role;
    document.querySelectorAll('.role-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    document.querySelector(`.role-option[data-role="${role}"]`).classList.add('selected');
}

function clearRoleSelection() {
    document.querySelectorAll('.role-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    selectedRole = 'farmer';
}

function handleAuth(event) {
    event.preventDefault();
    
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const name = document.getElementById('authName').value;
    
    const users = JSON.parse(localStorage.getItem('farmconnect_users'));

    if (authMode === 'login') {
        // Login
        const user = users.find(u => u.email === email && u.password === password);
        
        if (user) {
            currentUser = user;
            localStorage.setItem('farmconnect_currentUser', JSON.stringify(user));
            closeAuthModal();
            updateUI();
            showToast('Welcome back, ' + user.name + '!', 'success');
            
            // Redirect to dashboard
            setTimeout(() => showDashboard(), 500);
        } else {
            showToast('Invalid email or password', 'error');
        }
    } else {
        // Register
        if (!name || !selectedRole) {
            showToast('Please fill all fields and select a role', 'error');
            return;
        }

        // Check if email exists
        if (users.find(u => u.email === email)) {
            showToast('Email already registered', 'error');
            return;
        }

        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
            role: selectedRole,
            status: selectedRole === 'expert' ? 'pending' : 'active'
        };

        users.push(newUser);
        localStorage.setItem('farmconnect_users', JSON.stringify(users));

        currentUser = newUser;
        localStorage.setItem('farmconnect_currentUser', JSON.stringify(newUser));
        
        closeAuthModal();
        updateUI();
        showToast('Account created successfully!', 'success');
        
        setTimeout(() => showDashboard(), 500);
    }
}

function logout() {
    currentUser = null;
    localStorage.setItem('farmconnect_currentUser', JSON.stringify(null));
    updateUI();
    showView('home');
    showToast('Logged out successfully', 'success');
    toggleUserDropdown();
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.toggle('show');
}

function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
}

// ==================== UI UPDATES ====================

function updateUI() {
    const authButtons = document.getElementById('authButtons');
    const userMenuContainer = document.getElementById('userMenuContainer');
    const userAvatar = document.getElementById('userAvatar');

    if (currentUser) {
        authButtons.style.display = 'none';
        userMenuContainer.style.display = 'block';
        userAvatar.textContent = currentUser.name.charAt(0).toUpperCase();
    } else {
        authButtons.style.display = 'flex';
        userMenuContainer.style.display = 'none';
    }

    // Update create post button visibility
    const createPostBtn = document.getElementById('createPostBtn');
    if (createPostBtn) {
        if (currentUser && (currentUser.role === 'farmer' || currentUser.role === 'expert')) {
            createPostBtn.style.display = 'inline-block';
        } else {
            createPostBtn.style.display = 'none';
        }
    }
}

// ==================== RESOURCES ====================

function renderResources(filter = 'all', searchTerm = '') {
    const container = document.getElementById('resourcesList');
    let filtered = resourcesData;

    if (filter !== 'all') {
        filtered = filtered.filter(r => r.category === filter);
    }

    if (searchTerm) {
        filtered = filtered.filter(r => 
            r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No resources found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(resource => `
        <div class="resource-item" onclick="toggleBookmark(${resource.id})">
            <div class="resource-icon">
                <i class="fas fa-${getResourceIcon(resource.category)}"></i>
            </div>
            <div class="resource-info">
                <h4>${resource.title}</h4>
                <p>${resource.description}</p>
                <div class="resource-meta">
                    <span><i class="fas fa-user"></i> ${resource.author}</span>
                    <span><i class="fas fa-clock"></i> ${resource.duration}</span>
                    <span><i class="fas fa-file"></i> ${resource.type}</span>
                </div>
            </div>
            <i class="fas fa-bookmark" style="color: var(--text-secondary); font-size: 1.2rem;"></i>
        </div>
    `).join('');
}

function getResourceIcon(category) {
    const icons = {
        crop: 'seedling',
        livestock: 'paw',
        technology: 'microchip',
        scheme: 'building-columns'
    };
    return icons[category] || 'file';
}

function filterResources(category) {
    document.querySelectorAll('#resourcesView .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const searchTerm = document.getElementById('resourceSearch').value;
    renderResources(category, searchTerm);
}

function searchResources() {
    const searchTerm = document.getElementById('resourceSearch').value;
    const activeFilter = document.querySelector('#resourcesView .filter-btn.active');
    const filter = activeFilter ? activeFilter.textContent.toLowerCase() : 'all';
    
    const filterMap = {
        'all': 'all',
        'crop guide': 'crop',
        'livestock': 'livestock',
        'technology': 'technology',
        'govt schemes': 'scheme'
    };
    
    renderResources(filterMap[filter] || 'all', searchTerm);
}

function toggleBookmark(resourceId) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    let bookmarks = JSON.parse(localStorage.getItem('farmconnect_bookmarks'));
    const index = bookmarks.indexOf(resourceId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
        showToast('Resource removed from bookmarks', 'success');
    } else {
        bookmarks.push(resourceId);
        showToast('Resource bookmarked', 'success');
    }
    
    localStorage.setItem('farmconnect_bookmarks', JSON.stringify(bookmarks));
}

// ==================== EXPERTS ====================

function renderExperts(filter = 'all', searchTerm = '') {
    const container = document.getElementById('expertsList');
    let filtered = expertsData;

    if (filter !== 'all') {
        filtered = filtered.filter(e => e.specialization === filter);
    }

    if (searchTerm) {
        filtered = filtered.filter(e => 
            e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            e.specialization.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Show only approved experts in public view
    const publicExperts = filtered.filter(e => e.status === 'approved');

    if (publicExperts.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-user-graduate"></i>
                <h3>No experts found</h3>
                <p>Try adjusting your search or filters</p>
            </div>
        `;
        return;
    }

    container.innerHTML = publicExperts.map(expert => `
        <div class="expert-card">
            <div class="expert-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="expert-info">
                <h3>${expert.name}</h3>
                <div class="expert-specialization">${getSpecializationLabel(expert.specialization)}</div>
                <div class="expert-rating">
                    ${'★'.repeat(Math.floor(expert.rating))}${'☆'.repeat(5 - Math.floor(expert.rating))}
                    <span>(${expert.rating})</span>
                </div>
                <p>${expert.bio}</p>
                <div class="expert-actions">
                    <button class="btn btn-primary" onclick="requestConsultation(${expert.id})">
                        <i class="fas fa-calendar"></i> Request Consultation
                    </button>
                    <button class="btn btn-outline" onclick="viewExpertProfile(${expert.id})">
                        <i class="fas fa-user"></i> View Profile
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getSpecializationLabel(spec) {
    const labels = {
        crop: 'Crop Science & Agronomy',
        soil: 'Soil Management',
        livestock: 'Livestock & Dairy',
        technology: 'Agricultural Technology'
    };
    return labels[spec] || spec;
}

function filterExperts(category) {
    document.querySelectorAll('#expertsView .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const searchTerm = document.getElementById('expertSearch').value;
    renderExperts(category, searchTerm);
}

function searchExperts() {
    const searchTerm = document.getElementById('expertSearch').value;
    const activeFilter = document.querySelector('#expertsView .filter-btn.active');
    const filter = activeFilter ? activeFilter.textContent.toLowerCase().replace(' ', '') : 'all';
    
    const filterMap = {
        'all': 'all',
        'cropscience': 'crop',
        'soilmanagement': 'soil',
        'livestock': 'livestock',
        'agrtechnology': 'technology'
    };
    
    renderExperts(filterMap[filter] || 'all', searchTerm);
}

function requestConsultation(expertId) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    if (currentUser.role !== 'farmer') {
        showToast('Only farmers can request consultations', 'warning');
        return;
    }

    showToast('Consultation request sent! Expert will contact you soon.', 'success');
}

function viewExpertProfile(expertId) {
    const expert = expertsData.find(e => e.id === expertId);
    if (expert) {
        showToast(`Viewing profile of ${expert.name}`, 'success');
    }
}

// ==================== FORUM ====================

function renderForum(filter = 'all') {
    const container = document.getElementById('forumList');
    let filtered = forumPostsData;

    if (filter !== 'all') {
        filtered = filtered.filter(p => p.category === filter);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-comments"></i>
                <h3>No posts yet</h3>
                <p>Be the first to start a discussion!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(post => `
        <div class="forum-thread" onclick="viewPost(${post.id})">
            <div class="thread-header">
                <span class="thread-title">${post.title}</span>
                <span class="thread-category">${getCategoryLabel(post.category)}</span>
            </div>
            <p class="thread-preview">${post.content.substring(0, 150)}...</p>
            <div class="thread-footer">
                <div class="thread-author">
                    <div class="thread-author-avatar">${post.author.charAt(0)}</div>
                    <span>${post.author}</span>
                    <span style="color: var(--text-secondary); font-size: 0.8rem;">(${getRoleLabel(post.role)})</span>
                </div>
                <div class="thread-stats">
                    <span><i class="fas fa-arrow-up"></i> ${post.upvotes}</span>
                    <span><i class="fas fa-comment"></i> ${post.replies}</span>
                    <span><i class="fas fa-clock"></i> ${post.date}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(category) {
    const labels = {
        discussion: 'Discussion',
        question: 'Question',
        tips: 'Tips & Tricks',
        success: 'Success Story'
    };
    return labels[category] || category;
}

function getRoleLabel(role) {
    const labels = {
        farmer: 'Farmer',
        expert: 'Expert',
        public: 'Public',
        admin: 'Admin'
    };
    return labels[role] || role;
}

function filterForum(category) {
    document.querySelectorAll('#forumView .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    renderForum(category);
}

function showCreatePost() {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }
    document.getElementById('postModal').classList.add('show');
}

function closePostModal() {
    document.getElementById('postModal').classList.remove('show');
    document.getElementById('postForm').reset();
}

function createPost(event) {
    event.preventDefault();
    
    if (!currentUser) {
        showToast('Please login to create a post', 'error');
        return;
    }

    const title = document.getElementById('postTitle').value;
    const category = document.getElementById('postCategory').value;
    const content = document.getElementById('postContent').value;

    const newPost = {
        id: forumPostsData.length + 1,
        title: title,
        category: category,
        content: content,
        author: currentUser.name,
        role: currentUser.role,
        upvotes: 0,
        replies: 0,
        date: 'Just now'
    };

    forumPostsData.unshift(newPost);
    closePostModal();
    renderForum();
    showToast('Post created successfully!', 'success');
}

function viewPost(postId) {
    const post = forumPostsData.find(p => p.id === postId);
    if (post) {
        showToast(`Viewing: ${post.title}`, 'success');
    }
}

// ==================== INITIATIVES ====================

function renderInitiatives() {
    const container = document.getElementById('initiativesList');
    
    container.innerHTML = initiativesData.map(init => `
        <div class="initiative-card">
            <div class="initiative-image">
                <i class="fas ${init.icon}"></i>
            </div>
            <div class="initiative-content">
                <span class="thread-category">${init.category}</span>
                <h3>${init.title}</h3>
                <p>${init.description}</p>
                <div class="initiative-meta">
                    <span>${init.participants} / ${init.target} participants</span>
                    <div class="initiative-progress">
                        <div class="initiative-progress-bar" style="width: ${(init.participants / init.target) * 100}%"></div>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 16px; width: 100%;" onclick="joinInitiative(${init.id})">
                    ${currentUser ? 'Join Initiative' : 'Login to Join'}
                </button>
            </div>
        </div>
    `).join('');
}

function joinInitiative(initiativeId) {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    if (currentUser.role !== 'farmer') {
        showToast('Only farmers can join initiatives', 'warning');
        return;
    }

    let userInitiatives = JSON.parse(localStorage.getItem('farmconnect_initiatives'));
    
    if (!userInitiatives.includes(initiativeId)) {
        userInitiatives.push(initiativeId);
        localStorage.setItem('farmconnect_initiatives', JSON.stringify(userInitiatives));
        
        // Update initiative participants
        const initiative = initiativesData.find(i => i.id === initiativeId);
        if (initiative) {
            initiative.participants++;
        }
        
        renderInitiatives();
        showToast('Successfully joined the initiative!', 'success');
    } else {
        showToast('You have already joined this initiative', 'warning');
    }
}

// ==================== PROFILE ====================

function loadProfile() {
    if (!currentUser) {
        showAuthModal('login');
        return;
    }

    document.getElementById('profileName').value = currentUser.name || '';
    document.getElementById('profileEmail').value = currentUser.email || '';
    document.getElementById('profilePhone').value = currentUser.phone || '';
    document.getElementById('profileBio').value = currentUser.bio || '';
    document.getElementById('profileLocation').value = currentUser.location || '';
    document.getElementById('profileSpecialization').value = currentUser.specialization || '';

    // Show role-specific fields
    document.getElementById('farmDetailsGroup').style.display = 
        currentUser.role === 'farmer' ? 'block' : 'none';
    document.getElementById('specializationGroup').style.display = 
        currentUser.role === 'expert' ? 'block' : 'none';
    document.getElementById('bioGroup').style.display = 
        currentUser.role === 'expert' ? 'block' : 'none';
}

function updateProfile(event) {
    event.preventDefault();
    
    const users = JSON.parse(localStorage.getItem('farmconnect_users'));
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    
    if (userIndex > -1) {
        users[userIndex].name = document.getElementById('profileName').value;
        users[userIndex].phone = document.getElementById('profilePhone').value;
        users[userIndex].bio = document.getElementById('profileBio').value;
        users[userIndex].location = document.getElementById('profileLocation').value;
        users[userIndex].specialization = document.getElementById('profileSpecialization').value;
        
        localStorage.setItem('farmconnect_users', JSON.stringify(users));
        currentUser = users[userIndex];
        localStorage.setItem('farmconnect_currentUser', JSON.stringify(currentUser));
        
        updateUI();
        showToast('Profile updated successfully!', 'success');
    }
}

// ==================== ADMIN DASHBOARD ====================

function renderAdminDashboard() {
    const users = JSON.parse(localStorage.getItem('farmconnect_users'));
    
    document.getElementById('adminTotalUsers').textContent = users.length;
    document.getElementById('adminActiveFarmers').textContent = users.filter(u => u.role === 'farmer').length;
    document.getElementById('adminExperts').textContent = users.filter(u => u.role === 'expert').length;
    document.getElementById('adminPosts').textContent = forumPostsData.length;

    // Render user table
    const userTable = document.getElementById('adminUserTable');
    userTable.innerHTML = users.map(user => `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td><span class="thread-category">${getRoleLabel(user.role)}</span></td>
            <td><span class="status-badge status-${user.status}">${user.status}</span></td>
            <td>
                <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.8rem;" onclick="editUser(${user.id})">Edit</button>
            </td>
        </tr>
    `).join('');

    // Render expert approval table
    const pendingExperts = expertsData.filter(e => e.status === 'pending');
    const expertTable = document.getElementById('adminExpertTable');
    
    if (pendingExperts.length === 0) {
        expertTable.innerHTML = '<tr><td colspan="5" style="text-align: center;">No pending expert approvals</td></tr>';
    } else {
        expertTable.innerHTML = pendingExperts.map(expert => `
            <tr>
                <td>${expert.name}</td>
                <td>${getSpecializationLabel(expert.specialization)}</td>
                <td>${expert.experience}</td>
                <td><span class="status-badge status-pending">Pending</span></td>
                <td>
                    <button class="btn btn-primary" style="padding: 4px 12px; font-size: 0.8rem;" onclick="approveExpert(${expert.id})">Approve</button>
                    <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.8rem;" onclick="rejectExpert(${expert.id})">Reject</button>
                </td>
            </tr>
        `).join('');
    }
}

function approveExpert(expertId) {
    const expert = expertsData.find(e => e.id === expertId);
    if (expert) {
        expert.status = 'approved';
        renderAdminDashboard();
        showToast(`${expert.name} has been approved`, 'success');
    }
}

function rejectExpert(expertId) {
    const expert = expertsData.find(e => e.id === expertId);
    if (expert) {
        expert.status = 'rejected';
        renderAdminDashboard();
        showToast(`${expert.name} has been rejected`, 'warning');
    }
}

function editUser(userId) {
    showToast('Edit user functionality coming soon', 'success');
}

// ==================== FARMER DASHBOARD ====================

function renderFarmerDashboard() {
    if (!currentUser || currentUser.role !== 'farmer') {
        showView('home');
        return;
    }

    const bookmarks = JSON.parse(localStorage.getItem('farmconnect_bookmarks'));
    const userInitiatives = JSON.parse(localStorage.getItem('farmconnect_initiatives'));

    document.getElementById('farmerSavedResources').textContent = bookmarks.length;
    document.getElementById('farmerInitiatives').textContent = userInitiatives.length;
    document.getElementById('farmerPosts').textContent = forumPostsData.filter(p => p.author === currentUser.name).length;

    // Render bookmarked resources
    const bookmarksContainer = document.getElementById('farmerBookmarks');
    const bookmarkedResources = resourcesData.filter(r => bookmarks.includes(r.id));
    
    if (bookmarkedResources.length === 0) {
        bookmarksContainer.innerHTML = '<p style="color: var(--text-secondary);">No bookmarked resources yet.</p>';
    } else {
        bookmarksContainer.innerHTML = bookmarkedResources.map(r => `
            <div style="padding: 12px; border-bottom: 1px solid #eee;">
                <strong>${r.title}</strong>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">${r.type}</p>
            </div>
        `).join('');
    }

    // Render user initiatives
    const initiativesContainer = document.getElementById('farmerInitiativesList');
    const userInitiativeData = initiativesData.filter(i => userInitiatives.includes(i.id));
    
    if (userInitiativeData.length === 0) {
        initiativesContainer.innerHTML = '<p style="color: var(--text-secondary);">You haven\'t joined any initiatives yet.</p>';
    } else {
        initiativesContainer.innerHTML = userInitiativeData.map(i => `
            <div style="padding: 12px; border-bottom: 1px solid #eee;">
                <strong>${i.title}</strong>
                <div class="initiative-progress" style="margin-top: 8px;">
                    <div class="initiative-progress-bar" style="width: ${(i.participants / i.target) * 100}%"></div>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">${i.participants} participants</p>
            </div>
        `).join('');
    }
}

// ==================== EXPERT DASHBOARD ====================

function renderExpertDashboard() {
    if (!currentUser || currentUser.role !== 'expert') {
        showView('home');
        return;
    }

    const userExpert = expertsData.find(e => e.name.toLowerCase().includes(currentUser.name.toLowerCase())) || expertsData[0];

    document.getElementById('expertConsultations').textContent = userExpert?.consultations || 0;
    document.getElementById('expertAnswers').textContent = Math.floor(Math.random() * 50) + 20;
    document.getElementById('expertContent').textContent = Math.floor(Math.random() * 10) + 5;

    // Render pending questions
    const questionsContainer = document.getElementById('expertQuestions');
    const questions = forumPostsData.filter(p => p.category === 'question').slice(0, 5);
    
    if (questions.length === 0) {
        questionsContainer.innerHTML = '<p style="color: var(--text-secondary);">No pending questions.</p>';
    } else {
        questionsContainer.innerHTML = questions.map(q => `
            <div class="forum-thread" style="margin-bottom: 12px;">
                <div class="thread-header">
                    <span class="thread-title">${q.title}</span>
                </div>
                <p class="thread-preview">${q.content.substring(0, 100)}...</p>
                <button class="btn btn-primary" style="margin-top: 12px;" onclick="answerQuestion(${q.id})">Answer Question</button>
            </div>
        `).join('');
    }
}

function answerQuestion(questionId) {
    showToast('Answer functionality coming soon', 'success');
}

// ==================== TOAST NOTIFICATIONS ====================

function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'exclamation-triangle';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}" style="color: var(--${type});"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==================== INITIALIZATION ====================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        const userMenu = document.querySelector('.user-menu');
        const dropdown = document.getElementById('userDropdown');
        if (userMenu && !userMenu.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
});
