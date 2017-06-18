import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  public loginForm = this.formBuilder.group({
    loginEmail: ["", Validators.required],
    loginPassword: ["", Validators.required]
  });

  public registerForm = this.formBuilder.group({
    registerEmail: ["", Validators.required],
    registerPassword: ["", Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
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

  onLogin(event) {
    let body = { user: { email: this.loginForm.value.loginEmail, password: this.loginForm.value.loginPassword } };
    this.authenticationService.login(body)
      .subscribe((next) => {
        this.hideModal();
		this.isValid = true;
        window.location.reload();
      },
      (error) => {
        if(error.error.message == "invalid password" || error.error.message == "User not found"){
			this.isValid = false;
		}
      });
  }

  onRegister(event) {
    let body = { user: { email: this.loginForm.value.loginEmail, password: this.loginForm.value.loginPassword } };
    this.authenticationService.register(body)
      .subscribe((next) => {
        this.authenticationService.login(body)
          .subscribe((next) => {
            this.hideModal();
            window.location.reload();
          });
      });
  }

}
