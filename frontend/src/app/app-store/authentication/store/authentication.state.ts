import { MeInterface } from '@app/app-store/authentication/interfaces';

export interface AuthenticationState {
  token: string;
  authenticated: boolean;
  me: MeInterface | null;
}

export const initialState: AuthenticationState = {
  token: '',
  authenticated: false,
  me: null,
};
