document.addEventListener("DOMContentLoaded", function() {
    const roles = document.querySelectorAll('#intro-roles .role');
    let currentRoleIndex = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        const currentRole = roles[currentRoleIndex];
        if (isTyping) {
            if (charIndex < currentRole.textContent.length) {
                currentRole.textContent = currentRole.textContent.slice(0, charIndex + 1);
                charIndex++;
                setTimeout(type, 100); // Typing speed
            } else {
                isTyping = false;
                setTimeout(() => {
                    isTyping = true;
                    currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                    charIndex = 0;
                    roles.forEach(role => role.textContent = ''); // Clear roles
                    setTimeout(type, 500); // Pause before starting new role
                }, 1000); // Pause before starting deleting
            }
        } else {
            if (charIndex > 0) {
                currentRole.textContent = currentRole.textContent.slice(0, charIndex - 1);
                charIndex--;
                setTimeout(type, 50); // Deleting speed
            } else {
                isTyping = true;
                setTimeout(type, 500); // Pause before starting to type new role
            }
        }
    }

    type();
});
