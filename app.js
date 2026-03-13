document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('userRole') || 'student';
    const userId = localStorage.getItem('userId') || 'Guest';
    const sidebar = document.getElementById('sidebar');

    if (sidebar) {
        // Define navigation links
        const links = [
            { name: 'Dashboard', url: 'dashboard.html' },
            { name: 'Live Bins', url: 'bins.html' },
            { name: 'Segregation', url: 'guide.html' },
            { name: 'Report Issue', url: 'report.html' },
            { name: 'My Impact', url: 'impact.html' },
            { name: 'Green Rewards', url: 'karma.html' },
            { name: 'Events', url: 'event.html' }
        ];

        let html = `<div class="logo">🌿 CleanCampus</div>`;
        
        links.forEach(link => {
            const activeClass = window.location.pathname.includes(link.url) ? 'active' : '';
            html += `<a href="${link.url}" class="${activeClass}">${link.name}</a>`;
        });

        // ONLY show Admin Panel if role is admin
        if (role === 'admin') {
            const activeAdmin = window.location.pathname.includes('admin.html') ? 'active' : '';
            html += `<a href="admin.html" class="${activeAdmin}" style="border-left: 3px solid #ef4444;">Admin Panel</a>`;
        }

        html += `<a href="login.html" onclick="localStorage.clear()" style="margin-top: auto; color: #ef4444;">Logout</a>`;
        
        sidebar.innerHTML = html;
    }

    // Update User Display Text
    const userDisplay = document.getElementById('user-display');
    if (userDisplay) {
        userDisplay.innerText = `${role.toUpperCase()} ID: ${userId}`;
    }
});