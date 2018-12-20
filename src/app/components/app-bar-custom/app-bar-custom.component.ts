import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-bar-custom',
    templateUrl: './app-bar-custom.component.html',
    styleUrls: ['./app-bar-custom.component.css']
})
export class AppBarCustomComponent implements OnInit {

    @Input() public appBarParams;
    public actions = [];
    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.appBarParams && this.appBarParams.rightAction && this.appBarParams.rightAction.forEach(item => {
            this.actions.push({ title: item, action: item })
        });
    }

    add() {
        this.router.navigate(["add"], { relativeTo: this.route })
    }

    close() {
        this.router.navigateByUrl("")
    }

    edit() {
        this.router.navigate(["edit"], { relativeTo: this.route });
    }

    delete() {
        console.log("Delete item");
    }

    dispathAction(action) {
        switch (action) {
            case 'add': {
                this.add();
                break;
            }
            case 'close': {
                this.close();
                break;
            }
            case 'edit': {
                this.edit();
                break;
            }
            case 'delete': {
                this.delete();
                break;
            }
            default:
                break;
        }
    }

}
