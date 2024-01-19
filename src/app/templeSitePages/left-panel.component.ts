import { Component } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  template: `
    <div class="card ms-5 my-5" style="width: 18rem;">
        <img src="assets/facebook.png" class="card-img-top px-3 py-3" alt="image of buddha">
        <div class="card-body">
            <a href="https://www.facebook.com/BuddhistSocietyOfOntario" class="btn btn-primary">Go To Temple Facebook Page</a>
        </div>
    </div>

    <div class="card ms-5 my-5" style="width: 18rem;">
        <img src="assets/contact_barcode.png" class="card-img-top px-3 py-3" alt="contact us">
        <h5 class="card-body text-center font-weight-bold">
            Contact Us
        </h5>
    </div>
`
})
export class LeftPanelComponent {}