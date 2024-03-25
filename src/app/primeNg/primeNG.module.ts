import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { DividerModule } from 'primeng/divider';

@NgModule({
  exports: [
    DividerModule,
    TableModule,
    MenubarModule,
    TagModule,
    DataViewModule,
    RatingModule,
    CardModule,
    MenuModule,
    FieldsetModule,
    PanelModule,
    ButtonModule,
    ImageModule,
  ],
})
export class PrimeNgModule {}
