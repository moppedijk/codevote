import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import {
  codevoteActionTypes,
  getCodevoteSuccessAction,
} from './codevote.actions';
import { CodevoteGqlService } from '../services';

@Injectable()
export class CodevoteEffects {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(codevoteActionTypes.GET_CODEVOTE),
      switchMap(() =>
        this.codevoteGqlService.getCodevote$().pipe(
          map((response) => {
            console.log(response);
            return getCodevoteSuccessAction({ response });
          }),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private codevoteGqlService: CodevoteGqlService,
  ) {}
}