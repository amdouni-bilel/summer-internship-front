export let formElementHTML1 = 
`<div class="col-xl-12">
<p>Form control small Size add class <code class="highlighter-rouge">.form-control-sm</code> to
    <code class="highlighter-rouge">.form-control</code></p>
<div class="form-group">
    <input type="text" class="form-control form-control-sm" name="input">
</div>
</div>
<div class="col-xl-12">
<div class="form-group">
    <label>Form Control Medium Size <code class="highlighter-rouge">.form-control</code></label>
    <input type="text" class="form-control" name="input">
</div>
</div>
<div class="col-xl-12">
<div class="form-group">
    <p>Form control small Size add class <code class="highlighter-rouge">.form-control-lg</code>
        to <code class="highlighter-rouge">.form-control</code></p>
    <input type="text" class="form-control form-control-lg" name="input">
</div>
</div>`
export let formElementTS1 = 
`import { Component} from '@angular/core';

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent {

}`
export let formElementHTML2 = 
`<div class="col-xl-4">
<div class="form-group m-0">
    <div class="form-label mb-4">Checkboxes</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="example-checkbox1"
                value="option1" checked="">
            <span class="custom-control-label">Option 1</span>
        </label>
        <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="example-checkbox2"
                value="option2">
            <span class="custom-control-label">Option 2</span>
        </label>
        <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="example-checkbox3"
                value="option3" disabled="">
            <span class="custom-control-label">Option Disabled</span>
        </label>
        <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" name="example-checkbox4"
                value="option4" checked="" disabled="">
            <span class="custom-control-label">Option Disabled Checked</span>
        </label>
    </div>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group m-0">
    <div class="form-label mb-4">Checkboxes Medium Sizes</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-checkbox custom-control-md">
            <input type="checkbox" class="custom-control-input" name="example-checkbox1"
                value="option1" checked="">
            <span class="custom-control-label custom-control-label-md">Option 1</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-md">
            <input type="checkbox" class="custom-control-input" name="example-checkbox2"
                value="option2">
            <span class="custom-control-label custom-control-label-md">Option 2</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-md">
            <input type="checkbox" class="custom-control-input" name="example-checkbox3"
                value="option3" disabled="">
            <span class="custom-control-label custom-control-label-md">Option Disabled</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-md">
            <input type="checkbox" class="custom-control-input" name="example-checkbox4"
                value="option4" checked="" disabled="">
            <span class="custom-control-label custom-control-label-md">Option Disabled
                Checked</span>
        </label>
    </div>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group m-0">
    <div class="form-label mb-4">Checkboxes Large Size</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-checkbox custom-control-lg">
            <input type="checkbox" class="custom-control-input" name="example-checkbox1"
                value="option1" checked="">
            <span class="custom-control-label custom-control-label-lg">Option 1</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-lg">
            <input type="checkbox" class="custom-control-input" name="example-checkbox2"
                value="option2">
            <span class="custom-control-label custom-control-label-lg">Option 2</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-lg">
            <input type="checkbox" class="custom-control-input" name="example-checkbox3"
                value="option3" disabled="">
            <span class="custom-control-label custom-control-label-lg">Option Disabled</span>
        </label>
        <label class="custom-control custom-checkbox custom-control-lg">
            <input type="checkbox" class="custom-control-input" name="example-checkbox4"
                value="option4" checked="" disabled="">
            <span class="custom-control-label custom-control-label-lg">Option Disabled
                Checked</span>
        </label>
    </div>
</div>
</div>`
export let formElementTS2 = 
`import { Component} from '@angular/core';

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent {

}`
export let formElementHTML3 = 
`<div class="col-xl-4">
<div class="form-group ">
    <div class="form-label">Radios</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="example-radios"
                value="option1" checked="">
            <span class="custom-control-label">Option 1</span>
        </label>
        <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="example-radios"
                value="option2">
            <span class="custom-control-label">Option 2</span>
        </label>
        <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="example-radios"
                value="option3" disabled="">
            <span class="custom-control-label">Option Disabled</span>
        </label>
        <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="example-radios02"
                value="option4" disabled="" checked="">
            <span class="custom-control-label">Option Disabled Checked</span>
        </label>
    </div>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group ">
    <div class="form-label">Medium Radios</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-radio custom-control-md">
            <input type="radio" class="custom-control-input" name="example-radios1"
                value="option1" checked="">
            <span class="custom-control-label custom-control-label-md">Option 1</span>
        </label>
        <label class="custom-control custom-radio custom-control-md">
            <input type="radio" class="custom-control-input" name="example-radios1"
                value="option2">
            <span class="custom-control-label custom-control-label-md">Option 2</span>
        </label>
        <label class="custom-control custom-radio custom-control-md">
            <input type="radio" class="custom-control-input" name="example-radios1"
                value="option3" disabled="">
            <span class="custom-control-label custom-control-label-md">Option Disabled</span>
        </label>
        <label class="custom-control custom-radio custom-control-md">
            <input type="radio" class="custom-control-input" name="example-radios12"
                value="option4" disabled="" checked="">
            <span class="custom-control-label custom-control-label-md">Option Disabled
                Checked</span>
        </label>
    </div>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group ">
    <div class="form-label">Large Radios</div>
    <div class="custom-controls-stacked">
        <label class="custom-control custom-radio custom-control-lg">
            <input type="radio" class="custom-control-input" name="example-radios2"
                value="option1" checked="">
            <span class="custom-control-label custom-control-label-lg">Option 1</span>
        </label>
        <label class="custom-control custom-radio custom-control-lg">
            <input type="radio" class="custom-control-input" name="example-radios2"
                value="option2">
            <span class="custom-control-label custom-control-label-lg">Option 2</span>
        </label>
        <label class="custom-control custom-radio custom-control-lg">
            <input type="radio" class="custom-control-input" name="example-radios2"
                value="option3" disabled="">
            <span class="custom-control-label custom-control-label-lg">Option Disabled</span>
        </label>
        <label class="custom-control custom-radio custom-control-lg">
            <input type="radio" class="custom-control-input" name="example-radios22"
                value="option4" disabled="" checked="">
            <span class="custom-control-label custom-control-label-lg">Option Disabled
                Checked</span>
        </label>
    </div>
</div>
</div>`
export let formElementTS3 = 
`import { Component} from '@angular/core';

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent {

}`
export let formElementHTML4 = 
`<div class="col-xl-4">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox1" class="custom-switch-input">
        <span class="custom-switch-indicator"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox1" class="custom-switch-input"
            checked>
        <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox1" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-xl"></span>
    </label>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox2" class="custom-switch-input">
        <span class="custom-switch-indicator custom-square"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox2" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox2" class="custom-switch-input"
            checked>
        <span class="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
    </label>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox3" class="custom-switch-input"
            checked>
        <span class="custom-switch-indicator custom-radius"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox3" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Check Box</span>
        <input type="checkbox" name="custom-switch-checkbox3" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
    </label>
</div>
</div>`
export let formElementTS4 = 
`import { Component} from '@angular/core';

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent {

}`
export let formElementHTML5 = 
`<div class="col-xl-4">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio" class="custom-switch-input">
        <span class="custom-switch-indicator"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-lg"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio" class="custom-switch-input" checked>
        <span class="custom-switch-indicator custom-switch-indicator-xl"></span>
    </label>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio1" class="custom-switch-input">
        <span class="custom-switch-indicator custom-square"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio1" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-lg custom-square"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio1" class="custom-switch-input" checked>
        <span class="custom-switch-indicator custom-switch-indicator-xl custom-square"></span>
    </label>
</div>
</div>
<div class="col-xl-4 mt-4 mt-xl-0">
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio2" class="custom-switch-input" checked>
        <span class="custom-switch-indicator custom-radius"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio2" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-lg custom-radius"></span>
    </label>
</div>
<div class="form-group">
    <label class="custom-switch">
        <span class="custom-switch-description mr-2">Radio Buttons</span>
        <input type="radio" name="custom-switch-radio2" class="custom-switch-input">
        <span class="custom-switch-indicator custom-switch-indicator-xl custom-radius"></span>
    </label>
</div>
</div>`
export let formElementTS5 = 
`import { Component} from '@angular/core';

@Component({
  selector: 'app-form-elements-sizes',
  templateUrl: './form-elements-sizes.component.html',
  styleUrls: ['./form-elements-sizes.component.scss']
})
export class FormElementsSizesComponent {

}`