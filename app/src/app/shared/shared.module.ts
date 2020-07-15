import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbCheckboxModule, NbFormFieldModule, NbButtonModule, NbIconModule,
  NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule, NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule
} from '@nebular/theme';
import { OneColumnLayoutComponent } from './layouts/one-column.layout';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, OneColumnLayoutComponent],
  imports: [
    CommonModule, NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbProgressBarModule,
    NbButtonModule, NbIconModule, NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule,
    NbDialogModule, NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule
  ],
  exports: [
    NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbButtonModule, NbIconModule,
    NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule,
    NbMenuModule, NbSearchModule, NbActionsModule, NbSelectModule,
    HeaderComponent, FooterComponent, OneColumnLayoutComponent,
  ]
})
export class SharedModule { }