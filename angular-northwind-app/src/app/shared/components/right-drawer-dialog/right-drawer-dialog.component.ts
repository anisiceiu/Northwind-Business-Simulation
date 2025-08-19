import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-right-drawer-dialog',
  imports: [MatIconModule],
  templateUrl: './right-drawer-dialog.component.html',
  styleUrls: ['./right-drawer-dialog.component.css']
})
export class RightDrawerDialogComponent {
 constructor(private dialogRef: MatDialogRef<RightDrawerDialogComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
