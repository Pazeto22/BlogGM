import { Component, OnInit } from "@angular/core";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";

export interface TagsCadastro {
  titulo: string;
  tituloLower: string;
}
@Component({
  selector: "app-create-form",
  templateUrl: "./create-form.component.html",
  styleUrls: ["./create-form.component.scss"],
})
export class CreateFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: "25rem",
    minHeight: "5rem",
    placeholder: "Enter text here...",
    translate: "no",
    uploadUrl: "v1/images", // if needed
    customClasses: [
      // optional
      {
        name: "quote",
        class: "quote",
      },
      {
        name: "redText",
        class: "redText",
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
  };

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  tags: TagsCadastro[] = [{ titulo: "Zelda", tituloLower: "zelda" }];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.tags.push({
        titulo: value.trim(),
        tituloLower: value.trim().toLowerCase(),
      });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(tag: TagsCadastro): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }
}