import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  exports: [
    ConfirmDialogModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    DataViewModule,
    DividerModule,
    FieldsetModule,
    ImageModule,
    InputMaskModule,
    InputNumberModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    PasswordModule,
    RatingModule,
    TableModule,
    TagModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
