import { Routes } from '@angular/router';
import { About } from './about/about';
import { Calculator } from './calculator/calculator';
import { TextEditor } from './text-editor/text-editor'
import { Weather } from './weather/weather'

export const routes: Routes = [
  { path: '', component: About },
  { path: 'calculator', component: Calculator },
  { path: 'text-editor', component: TextEditor },
  { path: 'weather', component: Weather }
];

export class AppRoutingModule { }
