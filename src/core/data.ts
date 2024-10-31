export interface User {
    name: string,
    age: number,
    height: number,
    weight: number,
    goal: string
}

export interface UserModified {
    name?: string,
    age?: number,
    height?: number,
    weight?: number,
    goal?: string
}

export interface Food {
    "food_analysis": string,
    "food_photo": string,
    "user_id": number
}

export interface FoodModified {
    "food_analysis"?: string,
    "food_photo"?: string,
    "user_id"?: number
}