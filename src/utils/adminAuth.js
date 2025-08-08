// Admin authentication utilities

// Check if user is authenticated
export const isAdminAuthenticated = () => {
    const auth = localStorage.getItem('lifo_admin_auth');
    const timestamp = localStorage.getItem('lifo_admin_timestamp');
    
    if (!auth || !timestamp) {
        return false;
    }
    
    // Check if session is still valid (24 hours)
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const now = Date.now();
    const sessionTime = parseInt(timestamp);
    
    if (now - sessionTime > sessionDuration) {
        // Session expired, clear it
        logout();
        return false;
    }
    
    return auth === 'authenticated';
};

// Logout function
export const logout = () => {
    localStorage.removeItem('lifo_admin_auth');
    localStorage.removeItem('lifo_admin_timestamp');
};

// Get remaining session time
export const getSessionTimeRemaining = () => {
    const timestamp = localStorage.getItem('lifo_admin_timestamp');
    if (!timestamp) return 0;
    
    const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours
    const now = Date.now();
    const sessionTime = parseInt(timestamp);
    const remaining = sessionDuration - (now - sessionTime);
    
    return Math.max(0, remaining);
};

// Format time remaining
export const formatTimeRemaining = (milliseconds) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
};
