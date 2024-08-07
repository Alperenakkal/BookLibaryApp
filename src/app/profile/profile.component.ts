import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})

export class ProfileComponent {
  profileImageUrl: string | ArrayBuffer | null = null;
  
}