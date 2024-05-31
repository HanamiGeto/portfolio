import { Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  private activeComponent = signal('');
  private activeComponent$ = toObservable(this.activeComponent);

  setActiveComponent(component: string) {
    this.activeComponent.set(component);
  }

  getActiveComponent() {
    return this.activeComponent$;
  }
}
