import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Injectable()

export class UserService {

  constructor(@Inject(PLATFORM_ID) protected platformId: Object, private router: Router) { }

  saveMessage(body:object) {
    if (isPlatformBrowser(this.platformId)) {

      localStorage.setItem("body", JSON.stringify(body));
      return this.router.navigate(['/']), console.log("look at localStorage");

    }
  }
}
