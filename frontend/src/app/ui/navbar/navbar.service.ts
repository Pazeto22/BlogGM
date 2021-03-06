import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "../../../environments/environment";
import { Observable } from "rxjs";
import { Categoria } from "../../interfaces/Categoria";
import { SubCat } from "../../postcreate/create-form/create-form.component";

@Injectable({
  providedIn: "root",
})
export class NavbarService {
  constructor(private http: HttpClient) {}

  private apiUri: string = `${env.apiBaseUri}categorias`;

  listarAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUri);
  }

  listarSubCats(id: string): Observable<SubCat[]> {
    return this.http.get<SubCat[]>(`${this.apiUri}/sub/${id}`);
  }
}
