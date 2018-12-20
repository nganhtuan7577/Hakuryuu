import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { path } from '../../app-routing.module';

@Component({
    selector: 'app-nav-bar-custom',
    templateUrl: './nav-bar-custom.component.html',
    styleUrls: ['./nav-bar-custom.component.css'],
})
export class NavBarCustomComponent {

    public path = path;

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

    onClick() {
        this.router.navigate(['']);
    }

}
