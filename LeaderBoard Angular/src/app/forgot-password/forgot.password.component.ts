import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot.password.component.html',
  styleUrls: ['./forgot.password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public merchantDetails:any;

  constructor(public globals: GlobalService, public router: Router) { 
    this.globals.isLoading = false;
    this.globals.isHomepage = false;
  }

  ngOnInit() {

    this.merchantDetails = {
      about: {
        text: "This Adventure introduces guests to three of our favorite things in the region - street food, premium wines and the mysteries of the universe brought to you by the region's top astrophysicist! After meeting in Tijuana(transfer from San Diego available-- message me for details) we will drive south to the vibrant beach town of Rosarito for an incredible feast of wood- fired street tacos and cold local beers. Next we stop by a historic boutique hotel in La Fonda where Hollywood stars used to frequent to check-in to your oceanfront suite and enjoy a hand - crafted Margarita cocktail on the cliffs over the ocean. Next we head to Valle de Guadalupe - the most famous wine region in Mexico - for a private wine tasting and cookout at a private winery followed by a lesson from the region's top astrophysicist (our friend and the owner Alberto) ! On Day #2 you will enjoy an authentic Mexican feast for breakfast before we visit an organic boutique winery for a private tour, reserve barrel tasting and gourmet wine + food pairing lunch with a local top chef. Guests will have free time to enjoy the beach, spa treatments or a visit to a local brewery and more street food! Day #3 will feature another authentic Mexican feast on the cliffs followed by a visit to a bustling local market to shop for local crafts and souvenirs before we return to Tijuana!"
      },
      whatYouWillGet: {
        text: "This Adventure introduces guests to three of our favorite things in the region - street food, premium wines and the mysteries of the universe brought to you by the region's top astrophysicist! After meeting in Tijuana(transfer from San Diego available-- message me for details) we will drive south to the vibrant beach town of Rosarito for an incredible feast of wood- fired street tacos and cold local beers. Next we stop by a historic boutique hotel in La Fonda where Hollywood stars used to frequent to check-in to your oceanfront suite and enjoy a hand - crafted Margarita cocktail on the cliffs over the ocean. Next we head to Valle de Guadalupe - the most famous wine region in Mexico - for a private wine tasting and cookout at a private winery followed by a lesson from the region's top astrophysicist (our friend and the owner Alberto) ! On Day #2 you will enjoy an authentic Mexican feast for breakfast before we visit an organic boutique winery for a private tour, reserve barrel tasting and gourmet wine + food pairing lunch with a local top chef. Guests will have free time to enjoy the beach, spa treatments or a visit to a local brewery and more street food! Day #3 will feature another authentic Mexican feast on the cliffs followed by a visit to a bustling local market to shop for local crafts and souvenirs before we return to Tijuana!"
      }
    }

  }

  gotoMerchantPage(merchant: any) {
    this.router.navigate(['/login/' + merchant.id]);
  }

}
