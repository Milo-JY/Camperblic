export interface Member {
    id : number,
    name : string,
};

//신준이꺼
export interface Item {
    itemId: string,
    name: string,
    price: number,
    description: string,
    categoryId: string,
    imagePath: string,
    amount: number,
    currentStock: number,
}




//민수꺼
export interface Posting {
    id: number,
    title: string,
    name: string,
    createdate: string, // LocalDateTime은 string으로 처리
    views: number | null,
    content: string,
<<<<<<< HEAD
    category: string,
=======
    category: string;
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
}