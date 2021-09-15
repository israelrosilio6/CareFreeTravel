import {EventEmitter} from '@angular/core';
import {Attraction, Trip} from './trip.model';


export class TripsService {
  id = 8;
  potentialTrip: Trip;
  onPotentialTripChanged = new EventEmitter<Trip>();

  QueryRemoteResources(userSelections) {

      const d1 = new Date();
      d1.setDate(d1.getDate());
      const d2 = new Date();
      d2.setDate(d1.getDate() + 30);
      this.potentialTrip = {
        id: 1,
        budget: userSelections.budget,
        startDate: d1,
        endDate: d2,
        type: userSelections.type,
        attractions: <Attraction[]>[
          {
          id: 1,
          description: 'Fountain hall',
          cost: 150,
          matchToClientFactor: 18
        },
          {
          id: 2,
          description: 'View from heaven',
          cost: 72,
          matchToClientFactor: 140
        },
          {
          id: 3,
          description: 'Hong Kong Museum of Art',
          cost: 320,
          matchToClientFactor: 19
        },
          {
          id: 4,
          description: 'Victoria Peak',
          cost: 150,
          matchToClientFactor: 78
        },
          {
          id: 5,
          description: 'Victoria Harbour',
          cost: 470,
          matchToClientFactor: 21
        },
          {
          id: 6,
          description: 'Lan Kwai Fong',
          cost: 33,
          matchToClientFactor: 6
        },
          {
            id: 7,
            description: 'Ocean Park Hong Kong',
            cost: 33,
            matchToClientFactor: 6
          },
          {
            id: 8,
            description: 'Inner City Parish Church in Pest',
            cost: 152,
            matchToClientFactor: 6
          }
          ,
          {
            id: 9,
            description: 'Saint Anne Parish',
            cost: 52,
            matchToClientFactor: 6
          }
          ,
          {
            id: 10,
            description: 'Our Lady of the Snows Parish Church',
            cost: 10,
            matchToClientFactor: 6
          }
          ,
          {
            id: 11,
            description: 'Tomb of Gül Baba',
            cost: 121,
            matchToClientFactor: 11
          }
          ,
          {
            id: 12,
            description: 'St. Catherine of Alexandria Church',
            cost: 48,
            matchToClientFactor: 12
          } ,
          {
            id: 13,
            description: 'Tai Mo Shan Country Park',
            cost: 78,
            matchToClientFactor: 13
          },
          {
            id: 14,
            description: 'Kiu Tsui Country Park',
            cost: 111,
            matchToClientFactor: 9
          },
          {
            id: 15,
            description: 'Kam Shan Country Park',
            cost: 78,
            matchToClientFactor: 16
          },
          {
            id: 16,
            description: 'Lantau South Country Park',
            cost: 57,
            matchToClientFactor: 6
          },
          {
            id: 17,
            description: 'Aberdeen Country Park',
            cost: 220,
            matchToClientFactor: 18
          },
          {
            id: 18,
            description: 'Hong Kong Wetland Park',
            cost: 190,
            matchToClientFactor: 15
          },
          {
            id: 19,
            description: 'Tai Po Kau Nature Reserve',
            cost: 36,
            matchToClientFactor: 7
          },
          {
            id: 20,
            description: 'Plover Cove Country Park',
            cost: 98,
            matchToClientFactor: 12
          },
          {
            id: 21,
            description: 'Shek O Country Park',
            cost: 350,
            matchToClientFactor: 29
          },
          {
            id: 22,
            description: 'Tai Lam Country Park',
            cost: 111,
            matchToClientFactor: 6
          },
          {
            id: 23,
            description: 'Kamikaze Cave',
            cost: 25,
            matchToClientFactor: 14
          },
          {
            id: 24,
            description: 'Cheung Po Tsai Cave',
            cost: 68,
            matchToClientFactor: 9
          },
          {
            id: 25,
            description: 'Silver Mine Cave',
            cost: 100,
            matchToClientFactor: 8
          },
          {
            id: 26,
            description: 'Hexagonal Columns',
            cost: 102,
            matchToClientFactor: 16
          },
          {
            id: 27,
            description: 'Hong Kong Museum of History',
            cost: 74,
            matchToClientFactor: 3
          },
          {
            id: 28,
            description: 'Hong Kong Heritage Museum',
            cost: 300,
            matchToClientFactor: 27
          },
          {
            id: 29,
            description: 'Hong Kong Maritime Museum',
            cost: 200,
            matchToClientFactor: 18
          },
          {
            id: 30,
            description: 'Hong Kong Science Museum',
            cost: 118,
            matchToClientFactor: 9
          },
          {
            id: 31,
            description: 'Flagstaff House Museum of Tea Ware',
            cost: 78,
            matchToClientFactor: 15
          },
          {
            id: 32,
            description: 'Hong Kong Police Museum',
            cost: 120,
            matchToClientFactor: 15
          },
          {
            id: 33,
            description: 'Fireboat Alexander Grantham Exhibition Gallery',
            cost: 145,
            matchToClientFactor: 13
          },
          {
            id: 34,
            description: 'Hong Kong Racing Museum',
            cost: 120,
            matchToClientFactor: 9
          },
          {
            id: 35,
            description: 'Hong Kong Film Archive',
            cost: 100,
            matchToClientFactor: 14
          },
          {
            id: 36,
            description: 'Hong Kong Museum of Coastal Defence',
            cost: 180,
            matchToClientFactor: 19
          },
          {
            id: 37,
            description: 'Hong Kong Space Museum',
            cost: 195,
            matchToClientFactor: 25
          },
          {
            id: 38,
            description: 'Hong Kong Museum of Art',
            cost: 270,
            matchToClientFactor: 30
          },
          {
            id: 39,
            description: 'Ladies Market',
            cost: 100,
            matchToClientFactor: 100
          },
          {
            id: 40,
            description: 'Temple Street Market',
            cost: 0,
            matchToClientFactor: 16
          },
          {
            id: 41,
            description: 'PMQ Hong Kong',
            cost: 800,
            matchToClientFactor: 20
          },
          {
            id: 42,
            description: 'Jade Market',
            cost: 30,
            matchToClientFactor: 12
          },
          {
            id: 43,
            description: 'Stanley Market',
            cost: 0,
            matchToClientFactor: 8
          },
          {
            id: 44,
            description: 'Jardine’s Crescent Market',
            cost: 145,
            matchToClientFactor: 16
          },
          {
            id: 45,
            description: 'Cat Street',
            cost: 200,
            matchToClientFactor: 12
          },
          {
            id: 46,
            description: 'Apliu Street Market',
            cost: 120,
            matchToClientFactor: 17
          },
          {
            id: 47,
            description: 'Fa Yuen Street Market',
            cost: 190,
            matchToClientFactor: 24
          },
          {
            id: 48,
            description: 'Tai Yuen Street Market (Toy Market)',
            cost: 20,
            matchToClientFactor: 6
          },
          {
            id: 49,
            description: 'Tasting Hong Kong: Bites, Market & Cooking Class with local mum',
            cost: 500,
            matchToClientFactor: 12
          },
          {
            id: 50,
            description: 'Hiking Experience: Dragon\'s Back with Beach Visit',
            cost: 550,
            matchToClientFactor: 9
          },
          {
            id: 51,
            description: 'Polaroid Photo Walking Workshop',
            cost: 600,
            matchToClientFactor: 12
          },
          {
            id: 52,
            description: 'Organic Xiao Long Bao (Soup Dumplings) Class + Food Market Walk',
            cost: 1000,
            matchToClientFactor: 20
          },
          {
            id: 53,
            description: 'Full day Trip to Hong Kong UNESCO World Geopark',
            cost: 1500,
            matchToClientFactor: 25
          }
        ]
      };

    this.onPotentialTripChanged.emit(this.potentialTrip);
  }



}



