import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as env } from "./../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class PostService {
  // Injeção de dependência: Em vez de criarmos manualmente as dependências
  // necessárias, o próprio Angular as cria e INJETA o objeto já instanciado
  // como parâmetro do construtor.
  constructor(private http: HttpClient) {}

  private apiUri: string = env.apiBaseUri + "post";

  listar() {
    // toPromise = É uma promessa de conclusão, não o dado real.
    return this.http.get(this.apiUri).toPromise();
  }

  excluir(id: string) {
    return this.http
      .request("DELETE", this.apiUri, {
        body: { _id: id },
      })
      .toPromise();
  }

  novo(body: any) {
    return this.http.post(this.apiUri, body).toPromise();
  }

  atualizar(body: any) {
    return this.http.put(this.apiUri, body).toPromise();
  }

  obterUm(id: string) {
    return this.http.get(this.apiUri + "/" + id).toPromise();
  }
}
