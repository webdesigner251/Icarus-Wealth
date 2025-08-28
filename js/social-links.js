// Dynamic Social Media Links Handler
async function loadSocialMediaLinks() {
    try {
        const response = await fetch('http://localhost:5000/api/social-media');
        const socialLinks = await response.json();
        
        if (response.ok && socialLinks) {
            updateSocialMediaLinks(socialLinks);
        }
    } catch (error) {
        console.error('Error loading social media links:', error);
        // Keep default # links if API fails
    }
}

function updateSocialMediaLinks(links) {
    // Update Facebook link
    const facebookIcons = document.querySelectorAll('i.fa-facebook-f');
    facebookIcons.forEach(icon => {
        const link = icon.closest('a');
        if (link && links.facebook) {
            link.href = links.facebook;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Update Instagram link
    const instagramIcons = document.querySelectorAll('i.fa-instagram');
    instagramIcons.forEach(icon => {
        const link = icon.closest('a');
        if (link && links.instagram) {
            link.href = links.instagram;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Update Twitter link
    const twitterIcons = document.querySelectorAll('i.fa-twitter');
    twitterIcons.forEach(icon => {
        const link = icon.closest('a');
        if (link && links.twitter) {
            link.href = links.twitter;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Update TikTok link
    const tiktokIcons = document.querySelectorAll('i.fa-tiktok');
    tiktokIcons.forEach(icon => {
        const link = icon.closest('a');
        if (link && links.tiktok) {
            link.href = links.tiktok;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
    
    // Update LinkedIn link
    const linkedinIcons = document.querySelectorAll('i.fa-linkedin');
    linkedinIcons.forEach(icon => {
        const link = icon.closest('a');
        if (link && links.linkedin) {
            link.href = links.linkedin;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
}

// Load social media links when DOM is ready
document.addEventListener('DOMContentLoaded', loadSocialMediaLinks);