// Simple TypeScript functions for your dashboard
// These will work as regular JavaScript in the browser

// Type annotations help you catch errors early!
function greetUser(name: string): string {
    return `Hello, ${name}! Welcome to the dashboard.`;
}

// You can also define types for objects
interface User {
    name: string;
    email: string;
    role: string;
}

function createUser(name: string, email: string, role: string): User {
    return {
        name: name,
        email: email,
        role: role
    };
}

// Example: Add interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard is ready!');

    // Example user
    const user = createUser("John Doe", "john@example.com", "Admin");
    console.log(greetUser(user.name));
});
