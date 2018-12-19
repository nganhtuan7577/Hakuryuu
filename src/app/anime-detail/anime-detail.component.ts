import { Component, OnInit, Input } from '@angular/core';
import { Object } from '../object';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-anime-detail',
    templateUrl: './anime-detail.component.html',
    styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {

    public anime;
    constructor(private route: ActivatedRoute, private dataService: DataService) { }

    ngOnInit() {
        let id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.dataService.getData('anime', id)
            .subscribe(data => this.anime = data[0]);
    }
}
