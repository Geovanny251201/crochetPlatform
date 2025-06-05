import { Component, OnInit, model } from '@angular/core';
import { ImportsModule } from './imports';
import { PhotoService } from './service/photoservice';

@Component({

    selector: 'app-learn',
    templateUrl: './learn.component.html',
    standalone: true,
    imports: [ImportsModule],
    providers: [PhotoService]
})
export class LearnComponent implements OnInit {
  images: any[] = [];

    responsiveOptions: any[] = [
        {
            breakpoint: '1300px',
            numVisible: 4
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    constructor(private photoService: PhotoService) {}

    ngOnInit() {
        this.photoService.getImages().then((images) => this.images = images);
    }
}