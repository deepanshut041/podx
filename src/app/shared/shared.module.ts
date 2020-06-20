import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbCheckboxModule, NbFormFieldModule, NbButtonModule, NbIconModule,
  NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule
} from '@nebular/theme';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbProgressBarModule,
    NbButtonModule, NbIconModule, NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule,
    NbDialogModule
  ],
  exports: [
    NbLayoutModule, NbCardModule, NbAlertModule, NbInputModule, NbFormFieldModule, NbCheckboxModule, NbButtonModule, NbIconModule,
    NbSpinnerModule, NbUserModule, NbSidebarModule, NbChatModule, NbListModule, NbContextMenuModule, NbDialogModule, NbProgressBarModule,
  ]
})
export class SharedModule { }