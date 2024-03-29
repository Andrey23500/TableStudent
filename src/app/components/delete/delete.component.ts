import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteComponent {
  constructor(public dialogRef: MatDialogRef<DeleteComponent>) { }
}
