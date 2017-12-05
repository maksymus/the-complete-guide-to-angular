import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {Router} from '@angular/router';

import {DataStorageService} from '../../shared/data-storage.service';
import {AuthService} from '../../auth/auth.service';

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
