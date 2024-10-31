import { Food, FoodModified, User, UserModified } from "@/core/data";
import { API_URL } from "@/core/setting";

async function createUser(user: User) {
    const response = await fetch(`${API_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

// Function to read all users
async function readUsers(offset: number = 0, limit: number = 100) {
    const response = await fetch(`${API_URL}/users/?offset=${offset}&limit=${limit}`);
    return response.json();
}

// Function to read a single user by ID
async function readUser(userId: number) {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
}

// Function to update a user
async function updateUser(userId: number, user: UserModified) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    return response.json();
}

// Function to delete a user
async function deleteUser(userId: number) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
    });
    return response.json();
}

// Function to create food
async function createFood(food: Food) {
    const response = await fetch(`${API_URL}/foods/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
    });
    return response.json();
}

// Function to read all foods
async function readFoods(offset = 0, limit = 100) {
    const response = await fetch(`${API_URL}/foods/?offset=${offset}&limit=${limit}`);
    return response.json();
}

// Function to read a single food by ID
async function readFood(foodId: number) {
    const response = await fetch(`${API_URL}/foods/${foodId}`);
    return response.json();
}

// Function to update food
async function updateFood(foodId: number, food: FoodModified) {
    const response = await fetch(`${API_URL}/foods/${foodId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(food),
    });
    return response.json();
}

// Function to delete food
async function deleteFood(foodId: number) {
    const response = await fetch(`${API_URL}/foods/${foodId}`, {
        method: 'DELETE',
    });
    return response.json();
}
