import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;
  public isModalShown: boolean = false;
  public isValid: boolean = true;
  public isLoggedIn: boolean = false;

  public loginForm = this.formBuilder.group({
    loginEmail: ["", Validators.required],
    loginPassword: ["", Validators.required]
  });

  public registerForm = this.formBuilder.group({
    registerEmail: ["", Validators.required],
    registerPassword: ["", Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authenticationService.isLoggedIn()
      .subscribe((loggedIn) => {
        this.isLoggedIn = loggedIn
      });
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
  }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  routeToLinks() {
    this.isLoggedIn = true;
    this.hideModal();
    this.router.navigate(['/lists']);
  }

  resetLoginInputFields() {
    this.loginForm.value.loginEmail = '';
    this.loginForm.value.loginPassword = '';
  }

  resetRegisterInputFields() {
    this.registerForm.value.registerEmail = '';
    this.registerForm.value.registerPassword = '';
  }

  onLogin(event) {
    let body = { user: { email: this.loginForm.value.loginEmail, password: this.loginForm.value.loginPassword } };
    this.authenticationService.login(body)
      .subscribe((next) => {
        this.resetLoginInputFields();
        this.hideModal();
        this.isValid = true;
        this.routeToLinks();
      },
      (error) => {
        if (error.error.message == "invalid password" || error.error.message == "User not found") {
          this.isValid = false;
        }
      });
  }

  onRegister(event) {
    let body = { user: { email: this.registerForm.value.registerEmail, password: this.registerForm.value.registerPassword } };
    this.authenticationService.register(body)
      .subscribe((next) => {
        this.resetRegisterInputFields();
        this.authenticationService.login(body)
          .subscribe((next) => {
            this.resetLoginInputFields();
            this.hideModal();
            this.routeToLinks();
          });
      });
  }

  onLogout() {
    this.authenticationService.logout()
      .subscribe((res) => {
        console.log(res);
        this.isLoggedIn = false;
        if (this.router.url === '/') {
          window.location.reload();
        } else {
          this.router.navigate(['/']);
        }
      });
  }

}
