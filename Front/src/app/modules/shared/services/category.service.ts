import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    base_url = "http://localhost:8080/api/v1"
    data = signal<any[]>([]);

    constructor(private http: HttpClient) {}

    /**
     * retorna todas las categorias
     */
    getCategories() {
        const endpoint = `${this.base_url}/categories`
        return this.http.get<any[]>(endpoint)
    }


    /**
     * guarda las categorias
     */
    saveCategory(body: any) {
        const endpoint = `${this.base_url}/categories`
        return this.http.post(endpoint, body);
    }
}