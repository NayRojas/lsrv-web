import { Component } from '@angular/core';
interface StatisticResult {
  icon: string;
  teamName: string;
  teamResults: {
    JJ: number;
    JG: number;
    JE: number;
    JP: number;
    CA: number;
    CR: number;
    DC: number;
    PTS: number;
  }
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  public date: string = '';
  public season: string = 'Campeones de Lima'
  public teamResult = {}
  statisticResults: StatisticResult[] = [
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    }, {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    },
    {
      icon: '',
      teamName: 'Rangers',
      teamResults: {
        JJ: 3,
        JG: 3,
        JE: 0,
        JP: 37,
        CA: 10,
        CR: 18,
        DC: -4,
        PTS: 9,
      }
    }
    // Add more match results as needed
  ];

  constructor() {
    this.transformSeasonDate()
    this.teamResult = this.statisticResults[0].teamResults
  }

  public transformSeasonDate() {
    const currentDate = new Date();
    // Get the day of the week in Spanish
    const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    // Get the day of the month
    const dayOfMonth = currentDate.getDate();

    // Get the month in Spanish
    const monthsOfYear = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sept.', 'oct.', 'nov.', 'dic.'];
    const month = monthsOfYear[currentDate.getMonth()];

    // Get the year
    const year = currentDate.getFullYear();

    // Combine the parts into a formatted string
// Assuming this is for display in a web page
   const formattedDate = `Última actualización: <strong>${dayOfWeek}</strong> ${dayOfMonth} de ${month}`;
    this.date = formattedDate
    console.log(formattedDate);
  }

}
