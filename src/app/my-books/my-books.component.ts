import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { FormGroup } from '@angular/forms';
import { MyBookService } from './my-books.service';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrl: './my-books.component.scss'
})
export class MyBooksComponent implements OnInit {
  borrowForm!: FormGroup;
  borrowedBooks: any[] = [];
  userName: string = ''; 
  borrowBookSuccess: boolean = false;bookName:string="";
  borrowBookError: boolean = false;

  constructor(
    private myBookService: MyBookService, 
    private route : ActivatedRoute ,
    private spinner: NgxSpinnerService  
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.route.paramMap.subscribe(params=>{
      this.userName = params.get("name")!;
    })
   this.fetchBorrowedBooks(this.userName);
  }

  fetchBorrowedBooks(userName: string): void {
    this.myBookService.getBorrowedBooks(userName).subscribe(
    (response) => {
     this.borrowedBooks = response.borrowBooks
  
    },
    (error) => {
       console.error('Hata:', error);
    },
    () => {
      this.spinner.hide(); // İşlem tamamlandığında spinner'ı gizle
    }
   );
 }
}

