import { Injectable } from '@angular/core';

@Injectable()
export class LuxuryService {

  getLuxuryItem() {
    return 'Here\'s your luxury item from lazy module';
  }
}
