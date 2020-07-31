import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbCheckboxModule, NbFormFieldModule, NbButtonModule, NbIconModule,
  NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule, NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule, NbTabsetModule
} from '@nebular/theme';
import { OneColumnLayoutComponent } from './layouts/one-column.layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeedItemComponent } from './components/feed-item/feed-item.component';
import { ItunesImage } from './pipes/itunes-image.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, OneColumnLayoutComponent, FeedItemComponent, ItunesImage],
  imports: [
    CommonModule, RouterModule, NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbButtonModule, NbIconModule,
    NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule,
    NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule, NbTabsetModule, 
  ],
  exports: [
    NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbButtonModule, NbIconModule,
    NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule,
    NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule, NbTabsetModule, 
    HeaderComponent, FooterComponent, OneColumnLayoutComponent, FeedItemComponent,
    ItunesImage,
  ]
})
export class SharedModule { }