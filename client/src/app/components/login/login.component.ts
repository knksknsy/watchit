import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TabsetComponent } from 'ngx-bootstrap/tabs/tabset.component';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { APIService } from '../../services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IMovieResponse } from '../../interfaces/movie-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  public isModalShown: boolean = true;
  public routeDestination: string;
  public popularMovies: IMovieResponse;
  public backDropImage: string;

  public loginForm = this.formBuilder.group({
    loginEmail: ["", Validators.required],
    loginPassword: ["", Validators.required]
  });

  public registerForm = this.formBuilder.group({
    registerEmail: ["", Validators.required],
    registerPassword: ["", Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private apiService: APIService
  ) { }

  ngOnInit() {
    this.popularMovies = this.route.snapshot.data['populars'];
    this.backDropImage = this.popularMovies.results[this.randomIndex(this.popularMovies.results.length)].backdrop_path;
  }

  public randomIndex(max: number): number {
    return Math.floor(Math.random() * max) + 1;
  }

  public showModal(): void {
    this.isModalShown = true;
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(): void {
    this.isModalShown = false;
    this.router.navigate(['/']);
  }

  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  onLogin(event) {
    let body = { user: { email: this.loginForm.value.loginEmail, password: this.loginForm.value.loginPassword } };
    this.authenticationService.login(body)
      .subscribe((next) => {
        this.hideModal();
        this.router.navigate(['/']);
      },
      (error) => {
        // todo: show info: invalid credentials
      });
  }

  onRegister(event) {
    let body = { user: { email: this.loginForm.value.loginEmail, password: this.loginForm.value.loginPassword } };
    this.authenticationService.register(body)
      .subscribe((next) => {
        console.log(next);
        this.authenticationService.login(body)
          .subscribe((next) => {
            this.hideModal();
            this.router.navigate(['/']);
          });
      });
  }

}