import { Component, OnInit, Input } from '@angular/core';
import { Object } from '../object';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
        let id;
        this.route.paramMap.subscribe((params: ParamMap) => {
            id = parseInt(params.get('id'))
        })
        this.dataService.getData('anime', id)
            .subscribe(data => this.anime = data[0]);
    }
}
