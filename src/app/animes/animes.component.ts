import { Component, OnInit } from '@angular/core';
import { Object } from '../object';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-animes',
    templateUrl: './animes.component.html',
    styleUrls: ['./animes.component.css']
})
export class AnimesComponent implements OnInit {

    public data;
    constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.dataService.getListData('anime')
                        .subscribe(data => this.data = data);
    }

    onSelect(anime) {
        this.router.navigate([anime.id], {relativeTo: this.route});
    }

}
