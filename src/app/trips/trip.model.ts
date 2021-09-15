

export interface Trip {
  id: number;
  budget:number;
  startDate: Date;
  endDate: Date;
  type: string;
  attractions: Attraction[];
}


export interface Attraction {
  id: number;
  description: string;
  cost: number;
  matchToClientFactor:number;
}
