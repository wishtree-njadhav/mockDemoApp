import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lib-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogExampleComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'lib-example',
  templateUrl: 'dialogexample.html',
})
export class DialogExampleComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>)
    // @Inject(MAT_DIALOG_DATA) public data: DialogData)
     {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
