import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

    public data;
    constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.dataService.getListData('book')
            .subscribe(data => this.data = data);
    }

    onSelect(book) {
        this.router.navigate([book.id], { relativeTo: this.route });
    }

}
