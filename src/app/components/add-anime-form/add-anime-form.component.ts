import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-anime-form',
    templateUrl: './add-anime-form.component.html',
    styleUrls: ['./add-anime-form.component.css']
})
export class AddAnimeFormComponent implements OnInit {

    public appBarParams = {
        title: 'Add Anime',
        rightAction: ["close"]
    }

    public newAnime = {
        name: "",
        imgSrc: "",
        type: "",
        description: ""
    }

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
    }

    onSubmit() {
        this.dataService.addData("anime", this.newAnime)
            .subscribe(response => {
                if (response) {
                    this.router.navigate(['../'], { relativeTo: this.route });
                }
            });
    }
}
