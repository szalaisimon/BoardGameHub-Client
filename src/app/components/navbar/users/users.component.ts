import { User } from "../../../model/user";
import { UserService } from "../../../services/user.service";
import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationDialogContent } from "../../dialog/confirmation-dialog.component";

@Component({
  selector: "users",
  standalone: true,
  templateUrl: "./users.component.html",
  imports: [RouterOutlet, CommonModule, ConfirmationDialogContent],
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ConfirmationDialogContent);
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
