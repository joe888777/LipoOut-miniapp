import { Food, FoodModified, User, UserModified } from "@/core/data";
import { API_URL } from "@/core/setting";

export async function createUser(user: User) {
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
export async function readUsers(offset: number = 0, limit: number = 100) {
    const response = await fetch(`${API_URL}/users/?offset=${offset}&limit=${limit}`);
    return response.json();
}

// Function to read a single user by ID
export async function readUser(userId: number) {
    const response = await fetch(`${API_URL}/users/${userId}`);
    return response.json();
}

// Function to update a user
export async function updateUser(userId: number, user: UserModified) {
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
export async function deleteUser(userId: number) {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'DELETE',
    });
    return response.json();
}

// Function to create food
export async function createFood(food: Food) {
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
export async function readFoods(offset = 0, limit = 100) {
    const response = await fetch(`${API_URL}/foods/?offset=${offset}&limit=${limit}`);
    return response.json();
}

// Function to read a single food by ID
export async function readFood(foodId: number) {
    const response = await fetch(`${API_URL}/foods/${foodId}`);
    return response.json();
}

// Function to update food
export async function updateFood(foodId: number, food: FoodModified) {
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
export async function deleteFood(foodId: number) {
    const response = await fetch(`${API_URL}/foods/${foodId}`, {
        method: 'DELETE',
    });
    return response.json();
}

// // Example usage
// (async () => {
//     // Create a user
//     const newUser = {
//         name: "John Doe",
//         age: 30,
//         height: 180,
//         weight: 75,
//         goal: "Lose weight"
//     };
//     const createdUser = await createUser(newUser);
//     console.log("Created User:", createdUser);

//     // Read all users
//     const users = await readUsers();
//     console.log("Users:", users);

//     // Read a specific user
//     const userId = createdUser.id; // Assuming you get the ID from the created user
//     const user = await readUser(userId);
//     console.log("User:", user);

//     // Update the user
//     const updatedUser = await updateUser(userId, { age: 31 });
//     console.log("Updated User:", updatedUser);

//     // Delete the user
//     const deleteResponse = await deleteUser(userId);
//     console.log("Delete User Response:", deleteResponse);

//     // Create food
//     const newFood = {
//         food_analysis: "Healthy salad",
//         food_photo: new Blob(), // Replace with actual binary data
//         user_id: createdUser.id // Link to the created user
//     };
//     const createdFood = await createFood(newFood);
//     console.log("Created Food:", createdFood);

//     // Read all foods
//     const foods = await readFoods();
//     console.log("Foods:", foods);

//     // Read a specific food
//     const foodId = createdFood.food_id; // Assuming you get the ID from the created food
//     const food = await readFood(foodId);
//     console.log("Food:", food);

//     // Update the food
//     const updatedFood = await updateFood(foodId, { food_analysis: "Updated salad" });
//     console.log("Updated Food:", updatedFood);

//     // Delete the food
//     const deleteFoodResponse = await deleteFood(foodId);
//     console.log("Delete Food Response:", deleteFoodResponse);
// })();