import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import moment from 'moment';
import { RuneConditions } from './constraints/runes';
import { RunesEnum } from './enums/rune.enum';

@Injectable()
export class RuneService {
  public async calculate(isoTimeStamp: string) {
    const date = new Date(isoTimeStamp).toISOString();
    return {
      firstRune: await this.getTimeCondition(date),
      secondRune: await this.getDateCondition(date),
      thirdRune: await this.getYearCondition(date),
    };
  }

  private async getTimeCondition(isoTimeStamp: string) {
    const momentInstance = moment(isoTimeStamp);

    const isValid = momentInstance.isValid();

    if (!isValid) {
      throw new HttpException(
        'Невалидный формат времени',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hour = momentInstance.hour();
    const minute = momentInstance.minute();

    for (const rune in RuneConditions) {
      const { hourTo, hourFrom, minuteFrom, minuteTo } =
        RuneConditions[rune as RunesEnum].conditions.firstRuneCondition;
      if (
        (hour > hourFrom || (hour === hourFrom && minute >= minuteFrom)) &&
        (hour < hourTo || (hour === hourTo && minute <= minuteTo))
      ) {
        return rune;
      }
    }
  }

  private async getDateCondition(isoTimeStamp: string) {
    const momentInstance = moment(isoTimeStamp);

    const isValid = momentInstance.isValid();

    if (!isValid) {
      throw new HttpException(
        'Невалидный формат времени',
        HttpStatus.BAD_REQUEST,
      );
    }

    const month = momentInstance.month() + 1;
    const date = momentInstance.day();

    for (const rune in RuneConditions) {
      const { dateFrom, dateTo, monthFrom, monthTo } =
        RuneConditions[rune as RunesEnum].conditions.secondRuneCondition;
      if (
        (month === monthFrom && date >= dateFrom) ||
        (month === monthTo && date <= dateTo) ||
        (month > monthFrom && month < monthTo) ||
        (monthTo === 1 &&
          monthFrom === 12 &&
          (month === monthTo || month === monthFrom) &&
          (date >= dateFrom || date <= dateTo))
      ) {
        return rune;
      }
    }
  }

  private async getYearCondition(isoTimeStamp: string) {
    const momentInstance = moment(isoTimeStamp);

    const isValid = momentInstance.isValid();

    if (!isValid) {
      throw new HttpException(
        'Невалидный формат времени',
        HttpStatus.BAD_REQUEST,
      );
    }

    const yearOfBirth = momentInstance.year();

    const runesCount = Object.keys(RunesEnum).length; // Получаем количество элементов в enum
    const sum = this.sumDigits(yearOfBirth); // Суммируем цифры в годе рождения
    let runeIndex = sum % runesCount; // Получаем индекс записи в enum

    // Обрабатываем случай, когда сумма превышает количество элементов в enum
    if (runeIndex === 0) {
      runeIndex = runesCount;
    }

    return RunesEnum[Object.keys(RunesEnum)[runeIndex - 1]]; // Возвращаем значение по индексу
  }

  private sumDigits(number: number): number {
    return number
      .toString()
      .split('')
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
}
