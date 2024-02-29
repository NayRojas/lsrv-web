import { Component, Input } from '@angular/core';


interface MatchResult {
  team1Name: string;
  team2Name: string;
  team1Score: number;
  team2Score: number;
  matchDate: string;
  matchTime: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})

export class ResultsComponent {
  @Input() dateTime: Date = new Date();
  @Input() fullTimeText: string = 'FULLTIME';
  @Input() team1Logo: string = '';
  @Input() team1Name: string = 'Cagua';
  @Input() team1Score: number = 7;
  @Input() team2Logo: string = '';
  @Input() team2Name: string = 'Soy Venezuela';
  @Input() team2Score: number = 5;

  public date: string = '';
  public season: string = 'Campeones de Lima'
  matchResults: MatchResult[] = [
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    {
      team1Name: 'Cagua',
      team2Name: 'Soy Venezuela',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM'
    },
    // Add more match results as needed
  ];

  constructor() {
    this.transformSeasonDate()
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
   const formattedDate = `<strong>${dayOfWeek}</strong> ${dayOfMonth} de ${month}`;
    this.date = formattedDate
    console.log(formattedDate);
  }


}
