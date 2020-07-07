import { Component, OnInit } from "@angular/core";
import { PostData } from "../home/review/review.service";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { SearchService } from "./search.service";
import { Post } from "../home/post/Post";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(
    private searchSrv: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.getTagCatData();
      }
    });
  }

  ngOnInit(): void {
    this.getTagCatData();
  }

  data: PostData[] | Post[];

  getTagCatData(): void {
    const type = this.route.snapshot.paramMap.get("type");
    if (type === "PostName") {
      const titulo = this.route.snapshot.queryParamMap.get("titulo");
      this.searchSrv
        .listarPostName(titulo, type)
        .subscribe((posts) => (this.data = posts));
    } else {
      const id = this.route.snapshot.queryParamMap.get("id");
      this.searchSrv
        .listarPostTagOrCat(id, type)
        .subscribe((posts) => (this.data = posts));
    }
  }
}
