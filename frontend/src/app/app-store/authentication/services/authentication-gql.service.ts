import { Injectable } from '@angular/core';
import { MeResponse } from '@app/app-store/authentication/interfaces';
import { ApiService } from '@app/services';
import { gql } from 'graphql-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGqlService {
  constructor(private apiService: ApiService) {}

  public getMe$(): Observable<MeResponse> {
    const query = gql`
      {
        me {
          id
          displayName
          username
          profileImageUrl
        }
      }
    `;

    return this.apiService.request$(query);
  }
}
