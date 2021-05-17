import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { DOCUMENT } from '@angular/common';

@Injectable()
export class AppService {
  blocked: Subject<boolean> = new Subject();

  constructor(private router: Router,
    @Inject(DOCUMENT) private document: any) {
  }



}
