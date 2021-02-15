import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('startValue') startValue;
  @ViewChild('height') height;
  title = 'turmrechnen-angular';
  calculations = [];
  heightValid = true;

  calculate(): void {
    const height = parseInt(this.height.nativeElement.value, 0);
    let startValue = parseInt(this.startValue.nativeElement.value, 0);

    for (let i = 2; i <= height; i++) {
      this.calculations.push({
        num: startValue,
        factor: i,
        result: startValue = i * startValue,
        symbol: '*'
      });
    }

    for (let i = 2; i <= height; i++) {
      this.calculations.push({
        num: startValue,
        factor: i,
        result: startValue = startValue / i,
        symbol: '/'
      });
    }
  }

  validateHeight(): void {
    this.heightValid = parseInt(this.height.nativeElement.value, 0) >= 2;
  }
}
