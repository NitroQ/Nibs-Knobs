import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-design',
  templateUrl: './add-design.component.html',
  styleUrls: ['./add-design.component.scss'],
})
export class AddDesignComponent implements OnInit {
  files: File[] = [];

  onSelect(event: { addedFiles: any }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  addDesignDetails() {
    Swal.fire({
      title: 'Are you sure?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Add',
      denyButtonText: `Don't add`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Successfully added!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('No design added', '', 'info');
      }
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
