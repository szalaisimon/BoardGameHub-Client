import {Component, inject} from "@angular/core";
import {Router, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../../../model/user";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: "registration",
  standalone: true,
  templateUrl: "./registration.component.html",
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  styleUrl: "./registration.component.css"
})
export class RegistrationComponent {
  form: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const formValue = this.form.getRawValue();
    const user: User = {
      ...formValue,
      role: 'USER'
    };

    this.http.post<{ token: string }>('http://localhost:8080/api/auth/register', user)
      .subscribe(response => {
        console.log('response', response);

        localStorage.setItem('token', response.token);

        this.authService.currentUserSig.set(user);

        this.router.navigateByUrl('/');
      });
  }
}
