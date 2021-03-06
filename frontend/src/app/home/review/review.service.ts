import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment as env } from "./../../../environments/environment";
import { Post } from "../../interfaces/Post";
import { Observable } from "rxjs";

export interface PostData {
  _id: string;
  postId: Post;
}

@Injectable({
  providedIn: "root",
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  params = new HttpParams()
    .set("id", "5ef2a733ed59a23e5cbcb161")
    .set("type", "PostCategoria")
    .set("limite", "4");
  private apiUri: string = `${
    env.apiBaseUri
  }posts/busca?${this.params.toString()}`;

  listarAll(): Observable<PostData[]> {
    return this.http.get<PostData[]>(this.apiUri);
  }
}
