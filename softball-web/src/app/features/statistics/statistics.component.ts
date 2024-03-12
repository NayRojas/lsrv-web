import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatisticResult, TeamStatistic } from 'src/app/shared/utils/interfaces/team.inteerface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  public categoryList: any;
  public date: string = '';
  public season: string = 'Campeones de Lima'
  public teamResult = {}
  statisticResults: StatisticResult[] = [
    {
      icon: '../../../../assets/img/teams/Rangers.jpeg',
      teamName: 'Rangers',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/Soy VenezuelaB.jpeg',
      teamName: 'Soy Venezuela',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/team-icon.jpeg',
      teamName: 'Royals',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/CardenalesB.jpeg',
      teamName: 'Cardenales',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/Milwaukee.jpeg',
      teamName: 'Milwaukee',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/The Rockies.jpeg',
      teamName: 'The Rockies',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/White Sox.jpeg',
      teamName: 'White Sox',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/The AlliensB.jpeg',
      teamName: 'The Alliens',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/GuerrerosB.jpeg',
      teamName: 'Guerreros',
      teamCategory: 'B',
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
      icon: '../../../../assets/img/teams/VIkingosA.jpeg',
      teamName: 'Vikingos',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/EspartanosA.jpeg',
      teamName: 'Espartanos',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/Team Borracho.jpeg',
      teamName: 'Team Borracho',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/Pitsburg.jpeg',
      teamName: 'Pitsburg',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/Toronto.jpeg',
      teamName: 'Toronto',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/Boston.jpeg',
      teamName: 'Boston',
      teamCategory: 'A',
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
    ,
    {
      icon: '../../../../assets/img/teams/Bravos.jpeg',
      teamName: 'Bravos',
      teamCategory: 'A',
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
      icon: '../../../../assets/img/teams/MaitanaA.jpeg',
      teamName: 'Maitana',
      teamCategory: 'A',
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


  constructor( private router: Router) {
    this.transformSeasonDate()
    this.teamResult = this.statisticResults[0].teamResults
    this.categoryList = this.statisticResults;
  }

  ngOnInit(): void {
    this.setCategoryB();
  }


  public setCategoryB() {
    this.categoryList = this.statisticResults.filter(item => item.teamCategory === "B")
  }
   public setCategoryA(){
    this.categoryList = this.statisticResults.filter(item => item.teamCategory === "A")
   }

   public showTeamStatistics(id:string){
    this.router.navigate(['/estadisticas', id]);
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
