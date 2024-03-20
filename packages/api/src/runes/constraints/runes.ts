import { RunesEnum } from '../enums/rune.enum';

export interface IRuneValues {
  conditions: {
    firstRuneCondition: {
      minuteFrom: number;
      minuteTo: number;
      hourFrom: number;
      hourTo: number;
    };
    secondRuneCondition: {
      monthFrom: number;
      monthTo: number;
      dateFrom: number;
      dateTo: number;
    };
    thirdCondition: {
      value: number;
    };
  };
}

export const RuneConditions: Record<RunesEnum, IRuneValues> = {
  // 24.10- 07.11
  Альгиз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 2,
        hourTo: 3,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 24,
        dateTo: 7,
        monthFrom: 10,
        monthTo: 11,
      },
      thirdCondition: { value: 0 },
    },
  },
  //07.05- 21.05
  Ансуз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 15,
        hourTo: 16,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 7,
        dateTo: 21,
        monthFrom: 5,
        monthTo: 5,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 08.12.- 22.12.
  Беркана: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 5,
        hourTo: 6,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 8,
        dateTo: 22,
        monthFrom: 12,
        monthTo: 12,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 08.07- 23.07.
  Вуньо: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 19,
        hourTo: 20,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 8,
        dateTo: 23,
        monthFrom: 7,
        monthTo: 7,
      },
      thirdCondition: { value: 0 },
    },
  },
  //23.06- 07.07
  Гебо: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 18,
        hourTo: 19,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 23,
        dateTo: 7,
        monthFrom: 6,
        monthTo: 7,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 06.03.- 22.03
  Дагаз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 11,
        hourTo: 12,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 6,
        dateTo: 22,
        monthFrom: 3,
        monthTo: 3,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 06.02.- 20.02.
  Ингуз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 9,
        hourTo: 10,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 6,
        dateTo: 20,
        monthFrom: 2,
        monthTo: 2,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 24.08- 08.09
  Иса: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 22,
        hourTo: 23,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 24,
        dateTo: 8,
        monthFrom: 8,
        monthTo: 9,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 9.09 - 23.09.
  Йера: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 23,
        hourTo: 0,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 9,
        dateTo: 23,
        monthFrom: 9,
        monthTo: 9,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 07.06- 22.06
  Кано: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 17,
        hourTo: 18,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 7,
        dateTo: 22,
        monthFrom: 6,
        monthTo: 6,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 22.01.- 05.02.
  Лагуз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 8,
        hourTo: 9,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 22,
        dateTo: 5,
        monthFrom: 1,
        monthTo: 2,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 07.01.- 21.01.
  Манназ: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 7,
        hourTo: 8,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 7,
        dateTo: 21,
        monthFrom: 1,
        monthTo: 1,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 09.08- 23.08
  Наутиз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 21,
        hourTo: 22,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 9,
        dateTo: 23,
        monthFrom: 8,
        monthTo: 8,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 21.02. - 05.03
  Отал: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 10,
        hourTo: 11,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 21,
        dateTo: 5,
        monthFrom: 2,
        monthTo: 3,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 09.10- 23.10
  Перт: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 1,
        hourTo: 2,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 9,
        dateTo: 10,
        monthFrom: 23,
        monthTo: 10,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 22.05- 06.06
  Райдо: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 16,
        hourTo: 17,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 22,
        dateTo: 6,
        monthFrom: 5,
        monthTo: 6,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 08.11 - 23.11
  Соул: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 3,
        hourTo: 4,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 8,
        dateTo: 23,
        monthFrom: 11,
        monthTo: 11,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 24.11- 07.12
  Тейваз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 4,
        hourTo: 5,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 24,
        dateTo: 7,
        monthFrom: 11,
        monthTo: 12,
      },
      thirdCondition: { value: 0 },
    },
  },
  //22.04- 06.05
  Турисаз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 14,
        hourTo: 15,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 22,
        dateTo: 6,
        monthFrom: 4,
        monthTo: 5,
      },
      thirdCondition: { value: 0 },
    },
  },
  //06.04- 21.04
  Уруз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 13,
        hourTo: 14,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 6,
        dateTo: 21,
        monthFrom: 4,
        monthTo: 4,
      },
      thirdCondition: { value: 0 },
    },
  },
  Феху: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 12,
        hourTo: 13,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 23,
        dateTo: 3,
        monthFrom: 3,
        monthTo: 4,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 24.07- 08.08.
  Хагалаз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 20,
        hourTo: 21,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 24,
        dateTo: 8,
        monthFrom: 7,
        monthTo: 8,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 23.12.- 06.01.
  Эваз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 6,
        hourTo: 7,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 23,
        dateTo: 6,
        monthFrom: 12,
        monthTo: 1,
      },
      thirdCondition: { value: 0 },
    },
  },
  // 24.09- 8.10.
  Эйваз: {
    conditions: {
      firstRuneCondition: {
        hourFrom: 0,
        hourTo: 1,
        minuteFrom: 30,
        minuteTo: 29,
      },
      secondRuneCondition: {
        dateFrom: 24,
        dateTo: 8,
        monthFrom: 9,
        monthTo: 10,
      },
      thirdCondition: { value: 0 },
    },
  },
};
