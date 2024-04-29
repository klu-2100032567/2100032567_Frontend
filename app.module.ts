import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import your custom pipe and directive
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    // Declare your custom pipe and directive here
    CapitalizePipe,
    HighlightDirective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
