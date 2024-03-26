export interface StatisticResult {
    icon: string;
    teamName: string;
    teamCategory: string,
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
  
  export interface TeamStatistic {
    teamIcon: string;
    teamName: string;
    teamCategory: string,
    points: number,
    jg: number,
    jp: number,
    je: number,
    players: Player[]
  }
  
  export interface Player {
      fullName: string,
      photo: string,
      VB: string,
      AI:  string,
      HC: string,
      H1: string,
      H2: string,
      H3: string,
      HR: string,
      JJ: string,
      average: string,
  }