import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilKeyChanged, map, shareReplay, switchMap, tap } from 'rxjs';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user-search.component.html'
})
export class UserSearchComponent {
  searchConfigForm = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    resultLimit: new FormControl(3, { nonNullable: true }),
  });

  searchConfig$ = this.searchConfigForm.valueChanges.pipe(
    debounceTime(300),
    distinctUntilKeyChanged('userName'),
    map((config) => {
      const trimmedConfig = {
        ...config,
        userName: config.userName?.trim() || '',
      };
      return trimmedConfig;
    }),
    tap((trimmedConfig) => localStorage.setItem('searchConfig', JSON.stringify(trimmedConfig)))
  );

  usersService = inject(UsersService);
  users$ = this.searchConfig$.pipe(
    switchMap((searchConfig) => this.usersService.findUsers(searchConfig)),
    shareReplay(1)
  )

}
