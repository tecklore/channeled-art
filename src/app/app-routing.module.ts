import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagelayoutComponent }   from './pagelayout/pagelayout.component';

const routes: Routes = [
  { path: '', redirectTo: 'oilPainting/home', pathMatch: 'full' },
  // { path: 'oilPainting/:id', component: PagelayoutComponent },
  { path: 'oilPainting/home', component: PagelayoutComponent },
  { path: 'oilPainting/angelOfFire', component: PagelayoutComponent },
  { path: 'oilPainting/refuge', component: PagelayoutComponent },
  { path: 'oilPainting/theEmeraldProtector', component: PagelayoutComponent },
  { path: 'oilPainting/seedingTheWind', component: PagelayoutComponent },
  { path: 'oilPainting/slipStream', component: PagelayoutComponent },
  { path: 'oilPainting/primordial', component: PagelayoutComponent },
  { path: 'oilPainting/amethyst', component: PagelayoutComponent },
  { path: 'oilPainting/returnOfTheGoddess', component: PagelayoutComponent },
  { path: 'oilPainting/goddessCreating', component: PagelayoutComponent },
  { path: 'oilPainting/shaman', component: PagelayoutComponent },
  { path: 'oilPainting/surrender', component: PagelayoutComponent },
  { path: 'oilPainting/unleashing', component: PagelayoutComponent },
  { path: 'oilPainting/archangel', component: PagelayoutComponent },
  { path: 'oilPainting/theBeloved', component: PagelayoutComponent },
  { path: 'oilPainting/healing', component: PagelayoutComponent },
  { path: 'oilPainting/theGathering', component: PagelayoutComponent },
  { path: 'oilPainting/icarus', component: PagelayoutComponent },
  { path: 'oilPainting/forest', component: PagelayoutComponent },
  { path: 'oilPainting/lagoon', component: PagelayoutComponent },
  { path: 'oilPainting/kundalini', component: PagelayoutComponent },
  { path: 'oilPainting/blueTango', component: PagelayoutComponent },
  { path: 'oilPainting/eyeOfTheBeholder', component: PagelayoutComponent },
  { path: 'oilPainting/theEmbrace', component: PagelayoutComponent },
  { path: 'oilPainting/passionAndSpirit', component: PagelayoutComponent },
  { path: 'oilPainting/stream', component: PagelayoutComponent },
  { path: 'oilPainting/atlantis', component: PagelayoutComponent },
  { path: 'oilPainting/starmaker', component: PagelayoutComponent },
  { path: 'oilPainting/storm', component: PagelayoutComponent },
  { path: 'oilPainting/yearning', component: PagelayoutComponent },
  { path: 'oilPainting/romancingTheShadow', component: PagelayoutComponent },
  { path: 'oilPainting/myth', component: PagelayoutComponent },
  { path: 'oilPainting/pilgrim', component: PagelayoutComponent },
  { path: 'oilPainting/journey', component: PagelayoutComponent },
  { path: 'oilPainting/fatima', component: PagelayoutComponent },
  { path: 'oilPainting/avatar', component: PagelayoutComponent },
  { path: 'oilPainting/mysteryReclining', component: PagelayoutComponent },
  { path: 'oilPainting/john', component: PagelayoutComponent },
  { path: 'oilPainting/pencilDrawings', component: PagelayoutComponent },
  { path: 'oilPainting/biography', component: PagelayoutComponent },
  { path: 'oilPainting/missingMessiah', component: PagelayoutComponent },
  { path: 'oilPainting/freeScreenSavers', component: PagelayoutComponent },
  { path: 'oilPainting/videos', component: PagelayoutComponent },
  { path: 'oilPainting/contact', component: PagelayoutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
