import { Injectable } from '@angular/core';
import { RsvpEntry, Player, RsvpStatus } from '../models/rsvp-entry.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class RsvpService {
  private rsvpMap = new Map<string, RsvpEntry>();

  constructor(private logger: LoggerService) {}

  addOrUpdateRsvp(player: Player, status: RsvpStatus): void {
    if (!player?.id || !status) {
      this.logger.error('Invalid RSVP data');
      throw new Error('Invalid RSVP data');
    }
    this.rsvpMap.set(player.id, { player, status });
    this.logger.log(`RSVP for ${player.name}: ${status}`);
  }

  getConfirmedAttendees(): Player[] {
    return Array.from(this.rsvpMap.values())
      .filter((entry) => entry.status === 'Yes')
      .map((entry) => entry.player);
  }

  countResponses() {
    let confirmed = 0, declined = 0, maybe = 0;

    for (const entry of this.rsvpMap.values()) {
      switch (entry.status) {
        case 'Yes': confirmed++; break;
        case 'No': declined++; break;
        case 'Maybe': maybe++; break;
      }
    }

    return {
      total: this.rsvpMap.size,
      confirmed,
      declined,
      maybe,
    };
  }

  getAllEntries(): RsvpEntry[] {
    return Array.from(this.rsvpMap.values());
  }
}
