import { Injectable } from '@angular/core';

@Injectable()
export class RandomNumberService {
    generate(seed: number = 999) {
        return Math.floor(Math.random() * Math.floor(seed));
    }

}