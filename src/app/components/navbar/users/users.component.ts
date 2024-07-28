import {User} from "../../../model/user";
import {UserService} from "../../../services/user.service";
import {Component, inject, OnInit} from "@angular/core";
import {RouterOutlet} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ConfirmationDialogContent} from "../../dialog/confirmation-dialog.component";


@Component({
  selector: "users",
  standalone: true,
  templateUrl: "./users.component.html",
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  styleUrl: "./users.component.css"
})
export class UsersComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService) {
  }
  private modalService = inject(NgbModal);

  open() {
    const modalRef = this.modalService.open(ConfirmationDialogContent);
    modalRef.componentInstance.name = 'World';
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
