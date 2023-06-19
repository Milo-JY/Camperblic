export interface Member {
    id : number,
    name : string
};

//신준이꺼
export interface Item {
    item_id: string,
    name: string,
    price: number,
    description: string,
    category_id: string,
    image_path: string,
    amount: number,
    current_stock: number,
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
<<<<<<< HEAD
    category: string,
=======
    category: string;
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
    category: string;
>>>>>>> parent of aa1166d (minsu)
}