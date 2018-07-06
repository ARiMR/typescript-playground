interface BaseDTO {
    id: number;
    version: number;
}

interface PaginatedResponse<T extends BaseDTO> {
    items: T[];
    totalCount: number;
    page: number;
}

interface ProductDTO extends BaseDTO {
    name: string;
    price: number;
}

abstract class RestSerivce<T extends BaseDTO> {
    abstract getBaseUrl(): string;

    getItems(page: number): PaginatedResponse<T> {
        console.log(`Calling GET ${this.getBaseUrl()}/?page=${page}`);
        return {
            items: [],
            page: page,
            totalCount: 1000
        }
    }
}

class ProductService extends RestSerivce<ProductDTO> {
    getBaseUrl(): string {
        return "/api/products";
    }
}

const productService = new ProductService();
const response: PaginatedResponse<ProductDTO> = productService.getItems(42);


// ------------------------------------------------------------------------------------------------------------------ //

let identity = function <T>(arg: T): T {
    return arg;
};

const productService2 = identity<ProductService>(productService);
const productService3 = identity(productService);
