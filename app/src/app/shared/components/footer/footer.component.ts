import { Component } from '@angular/core';

@Component({
  selector: 'shared-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <div>
    <span class="created-by">
      Created with ♥ by <b><a href="https://squrlabs.com" target="_blank">Squrlabs</a></b> 2019
    </span>
  </div>
  `,
})
export class FooterComponent {
}