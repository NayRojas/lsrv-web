import { Component, Input } from '@angular/core';


interface MatchResult {
  team1Name: string;
  teamIcon1: string,
  team2Name: string;
  teamIcon2: string,
  team1Score: number;
  team2Score: number;
  matchDate: string;
  matchTime: string;
  category: string;
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
  public categoryList: any;
  public date: string = '';
  public season: string = 'Campeones de Lima'
  matchResults: MatchResult[] = [
    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'
    },
    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'

    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'A'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'B'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'B'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'B'
    },    {
      team1Name: 'Rangers',
      teamIcon1: '../../../../assets/img/teams/Rangers.jpeg',
      team2Name: 'Soy Venezuela',
      teamIcon2:  '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      team1Score: 7,
      team2Score: 5,
      matchDate: 'December 25, 2022',
      matchTime: '4:00 PM',
      category: 'B'
    },
    // Add more match results as needed
  ];

  constructor() {
    this.transformSeasonDate();
    this.categoryList = this.matchResults;
  }

  ngOnInit(): void {
    this.setCategoryB();
  }


  public setCategoryB() {
    this.categoryList = this.matchResults.filter(item => item.category === "B")
  }
   public setCategoryA(){
    this.categoryList = this.matchResults.filter(item => item.category === "A")
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
