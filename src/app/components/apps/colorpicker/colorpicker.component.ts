import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Cmyk, ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-colorpicker',
  templateUrl: './colorpicker.component.html',
  styleUrls: ['./colorpicker.component.scss']
})
export class ColorpickerComponent implements OnInit {

  constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) { }

  ngOnInit(): void {
  }

  public toggle: boolean = false;

  public rgbaText: string = 'rgba(165, 26, 214, 0.2)';

  public arrayColors: any = {
    color1: '#2883e9',
    color2: '#e920e9',
    color3: 'rgb(255,245,0)',
    color4: 'rgb(236,64,64)',
    color5: 'rgba(45,208,45,1)'
  };
  public selectedColor: string = 'color1';

  public color1: string = '#2889e9';
  public color2: string = '#e920e9';
  public color3: string = '#fff500';
  public color4: string = 'rgb(236,64,64)';
  public color5: string = 'rgba(45,208,45,1)';
  public color6: string = '#1973c0';
  public color7: string = '#f200bd';
  public color8: string = '#278ce2';
  public color10: string = '#666666';


   public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }


}
