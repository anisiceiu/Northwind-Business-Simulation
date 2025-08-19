import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RightDrawerDialogComponent } from '../shared/components/right-drawer-dialog/right-drawer-dialog.component';

@Component({
  selector: 'app-test-component',
  imports: [],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
constructor(private dialog: MatDialog) {}

  openDrawer() {
    this.dialog.open(RightDrawerDialogComponent, {
      width: '60vw',
      height: '100vh',
      position: { right: '0', top: '0' },
      panelClass: 'right-drawer-overlay',
      backdropClass: 'drawer-backdrop',
      hasBackdrop: true,
      disableClose: true  
    });
  }
}
