import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { RsvpService } from '../../services/rsvp.service';
import { Player } from '../../models/rsvp-entry.model';

@Component({
  selector: 'app-rsvp-manager',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './rsvp-manager.component.html',
  styleUrls: ['./rsvp-manager.component.scss']
})
export class RsvpManagerComponent implements OnInit {
  playerName: string = '';
  status: 'Yes' | 'No' | 'Maybe' = 'Maybe';
  statuses = ['Yes', 'No', 'Maybe'];
  stats: { total: number; confirmed: number; declined: number; maybe: number } = {
    total: 0,
    confirmed: 0,
    declined: 0,
    maybe: 0
  };

  constructor(public rsvpService: RsvpService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.stats = this.rsvpService.countResponses();
  }

  submitRsvp(): void {
    const trimmed = this.playerName.trim();
    if (!trimmed) {
      const input = document.querySelector('input[name="playerName"]');
      input?.dispatchEvent(new Event('blur'));
      return;
    }
  
    const player: Player = { id: crypto.randomUUID(), name: trimmed };
    this.rsvpService.addOrUpdateRsvp(player, this.status);
    this.stats = this.rsvpService.countResponses();
    this.snackBar.open(`${player.name}'s RSVP has been recorded.`, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.playerName = '';
    this.status = 'Maybe';
  }
  
}
