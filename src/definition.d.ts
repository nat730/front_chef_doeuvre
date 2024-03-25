export interface IProduct {
    id: number;
    name: string;
    description: string;
    category_id: number;
    unit_value: string;
    created_at: string;
    updated_at: string;
    CatalogItems: 
      {
        id: number;
        price: number;
        price_by_unity_asso: number;
        image: string;
        product_id: number;
        updated_at: string;
        created_at: string;
        catalog_id: number | null;
      }[]
    categoryName: string;
}
