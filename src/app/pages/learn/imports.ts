// Import PrimeNG modules
import { GalleriaModule } from 'primeng/galleria'; 
import { ButtonModule } from 'primeng/button';
import { PhotoService } from './service/photoservice';
import { NgModule } from '@angular/core';

    @NgModule({
        imports: [

            ButtonModule,
            GalleriaModule,
          
          
        ],
          exports: [
            ButtonModule,
            GalleriaModule,
          
          ],
      providers: [ PhotoService ]
    })
    export class ImportsModule {}
    