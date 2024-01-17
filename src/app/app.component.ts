import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { UserRole } from './models/user.model';
import { ImagesListUrl, UploadService } from './Services/upload.service';
import { NotificationService, NotificationType } from './Services/notification.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="container bg-info sticky-top">
    <div class="row" navBar>
      <img src="assets/logo.png" class="img-fluid px-0" alt="image of temple">
    </div>
    
    <div class="row rounded shadow" navBar>
      <div class="col-lg-1 col-3">
        <button mat-button routerLink="/">Home</button>
      </div>
      <div class="col-lg-1 col-3 text-center">
        <button mat-button class="px-1" [matMenuTriggerFor]="about" >
          About Us
          <mat-icon>arrow_drop_down</mat-icon>
        </button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button class="px-1" [matMenuTriggerFor]="media">
          Media
          <mat-icon>arrow_drop_down</mat-icon>
        </button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button routerLink="/calendar/events">Events</button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button disabled>News</button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button disabled>Blog</button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button routerLink="/contact">Contact</button>
      </div>
      <div class="col-lg-1 col-3">
        <button mat-button disabled>Donate</button>
      </div>
      <div class="col-lg-2 col-sm-1">
      </div>
      <div class="col-lg-2 col-3 text-center" *ngIf="!loggedIn">
        <button class="btn btn-danger btn-sm" mat-button routerLink="/login">Register/Login</button>
      </div>
      <div class="col-lg-2 col-3 text-center" *ngIf="loggedIn">
        <button mat-button class="btn btn-danger btn-sm" (click)="logOut()">LogOut</button>
      </div>
    </div>
  </div>
  <ng-container *ngIf="showHome">
    <app-home [images]=images></app-home>
  </ng-container>
 
  <mat-menu #media="matMenu">
    <button mat-menu-item *ngIf="!hideNonAdminMenu" routerLink="/upload/images">Upload Images</button>
    <button mat-menu-item *ngIf="!hideNonAdminMenu" routerLink="/upload/files">Upload Documents</button>
    <button mat-menu-item routerLink="/download/files">Download Documents</button>
  </mat-menu>
  
  <mat-menu #about="matMenu">
    <button mat-menu-item [matMenuTriggerFor]="bso" >BSO</button>
    <button mat-menu-item [matMenuTriggerFor]="temple">Temple</button>
  </mat-menu>

  <mat-menu #bso="matMenu">
    <button mat-menu-item routerLink="/bso">About BSO</button>
    <button mat-menu-item routerLink="/committee">BSO Commitee</button>
    <button mat-menu-item routerLink="/trustee">Trustee</button>
    <button mat-menu-item>BSO Annual Report</button>
  </mat-menu>

  <mat-menu #temple="matMenu">
    <button mat-menu-item routerLink="/temple">About temple</button>
    <button mat-menu-item [matMenuTriggerFor]="joinUs">Join Us</button>
    <button mat-menu-item routerLink="/calendar/alms">Daily Alms/Puja Schedule</button>
  </mat-menu>
  <mat-menu #joinUs="matMenu">
    <button mat-menu-item routerLink="welcome">All Are Welcome</button>
    <button mat-menu-item (click)="downloadMembershipForm()">MemeberShip</button>
  </mat-menu>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TempleWebsite';
  showHome = false;
  showLogOut = false;
  loggedIn = false;
  hideNonAdminMenu = true;
  images: Record<string, string | number>[] = [];
  
  constructor(private router: Router, private authService: AuthService, private uploadService: UploadService, private notificationService: NotificationService){
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        if(event.url === '/'){ // showing home page
          if(this.images.length === 0){ // images are not loaded already
            this.uploadService.getFileList(ImagesListUrl).subscribe({ // load image
              next: (result)=>{
                this.images = result;
                this.showHome = true;
              },
              error: (error: any)=>{
                this.notificationService.sendMessage({message: 'No Images Found: ' + error.error.msg, type: NotificationType.error});
              }
            });
          }else { // images are already loaded
            this.showHome = true;
          }
        }else { // navigating non home page
          this.showHome = false;
        }
      }
    });

    // if token exist - assumed user is logged in
    if(this.authService.token){
      this.loggedIn = true;
      this.showOrHideNonAdminMenu();
    }

    this.authService.isLoggedIn$.subscribe(logIn=>{
      this.loggedIn = logIn;
      this.showOrHideNonAdminMenu();
    })
  }

  downloadMembershipForm(){
    const link = document.createElement('a');
    link.download = "MemberShipForm.pdf";
    link.href = "assets/MemberShipForm.pdf";
    link.click();
    link.remove();
  }

  logOut(){
    this.authService.logOut();
  }

  showOrHideNonAdminMenu(){
    if(this.authService.user?.role === UserRole.ADMIN || this.authService.user?.role === UserRole.SUPER_ADMIN){
      this.hideNonAdminMenu = false;
    }else{
      this.hideNonAdminMenu = true;
    }
  }
}
