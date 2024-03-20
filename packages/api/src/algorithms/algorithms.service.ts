import { Injectable } from '@nestjs/common';
import { RuneService } from '../runes/rune.service';

@Injectable()
export class AlgorithmsService {
  constructor(private readonly runeService: RuneService) {}

  public async calculate(date: string) {
    return this.runeService.calculate(date);
  }
}
