import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {Response} from '@angular/http';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) {}

  onSaveData() {
    const responseObservable = this.dataStorageService.storeRecipes();
    responseObservable.subscribe(
      (response: Response) => console.log(response),
      (error: Response) => console.log(error)
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onSignOut() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
