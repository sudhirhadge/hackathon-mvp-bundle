// lib/mockAuth.js

let loggedInUser = null;

const mockUsers = [
    { email: "user@example.com", password: "password123", name: "Test User" },
];

export function mockLogin(email, password) {
    const user = mockUsers.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        loggedInUser = { ...user, id: "1" };
        return { success: true, user: loggedInUser };
    }

    return { success: false, error: "Invalid credentials" };
}

export function mockRegister(email, password, name) {
    const existing = mockUsers.find((u) => u.email === email);
    if (existing) {
        return { success: false, error: "Email already exists" };
    }

    const newUser = { email, password, name };
    mockUsers.push(newUser);
    loggedInUser = { ...newUser, id: "2" };
    return { success: true, user: loggedInUser };
}

export function mockLogout() {
    loggedInUser = null;
}

export function mockIsLoggedIn() {
    return !!loggedInUser;
}

export function mockGetUser() {
    return loggedInUser;
}