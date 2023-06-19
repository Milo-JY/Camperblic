export interface Member {
    id : number,
    name : string
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
    category: string;
}