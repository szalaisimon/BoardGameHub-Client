import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'confirmation-dialog',
  standalone: true,
  template: `
    <div class="modal-header">
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>Confirm Delete?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" (click)="delete()">Delete</button>
      <button type="button" class="btn btn-outline-secondary" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `,
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogContent {
  activeModal = inject(NgbActiveModal);

  delete() {
    this.activeModal.close('Delete click');
  }
}
