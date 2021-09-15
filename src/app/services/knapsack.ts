import {Trip} from '../trips/trip.model';

declare var require: any;

export class Knapsack {

  constructor() {

  }

  knapsack(obj, max_cost) {
    const arr = [];

    for (const key in obj) {
      arr.push({c: obj[key][0], b: obj[key][1], n: key});
    }

    // Sort descending for a 'greedy' initial search order.
    arr.sort(function (a, b) {
      if (a.a === b.b) { // lower cost breaks tie
        return a.c - b.c;
      }
      return b.b - a.b; // Consider highest value first.
    });
    const memo = {};
    const ret = this.knap(arr, Number(max_cost), 0, memo);
    for (let i = 0; i < ret[0].length; i++) { // Name the winners.
      ret[0][i] = arr[ret[0][i]].n;
    }

    return ret;
  }

  knap(items, max_cost, min_ben, memo) {
    let best = [];
    let cost = 0;
    let remain_ben = 0;
    if (min_ben < 0) {
      min_ben = 0;
    }
    const min_ben_inp = min_ben;  // save the lower bound we started with for caching purposes

    const note = items.length + ' ' + Number(max_cost); // attempt to lookup the answer
    if (note in memo) {
      if (memo[note][0] <= min_ben || memo[note][3] >= min_ben) {
        return memo[note].slice(1);
      }
    }

    for (let i = 0; i < items.length; i++) { // determine remaining possible benefit
      if (items[i].c <= Number(max_cost)) {
        remain_ben += items[i].b;
      }
    }

    for (let i = 0; i < items.length; i++) {
      if (items[i].c > Number(max_cost)) {
        continue;
      } // Can't include.

      if (remain_ben < min_ben) { // Early termination check.
        break;
      }
      remain_ben -= items[i].b;

      const ret = this.knap(items.slice(i + 1), Number(max_cost) - items[i].c,
        min_ben - items[i].b, memo);
      if (ret[2] + items[i].b > min_ben) { // Found a better subproblem solution.
        best = ret[0].map(function (j) {
          return i + j + 1;
        });
        best.push(i);
        cost = ret[1] + items[i].c;
        min_ben = ret[2] + items[i].b; // up the ante
      }
    }

    if (best.length === 0) {
      memo[note] = [min_ben_inp, [], 0, 0];
    } else {
      memo[note] = [min_ben_inp, best, cost, min_ben];
    }
    return memo[note].slice(1);
  }


  runKnapsack(trip: Trip) {
    const knapsackInput = {};
    trip.attractions.forEach((item) => {
      knapsackInput[item.id.toString()] = [item.cost, item.matchToClientFactor];
    });
    const res = this.knapsack(knapsackInput, Number(trip.budget));
    const restoredResult = this.restoreResult(res[0], trip);
    return {result: restoredResult , utilization:Number(res[1])};
  }


  private restoreResult(res: any, trip: Trip) {
    const selectedItems = [];
    res.forEach((pid) => {
      selectedItems.push(
        trip.attractions.find(item => item.id.toString() === pid.toString()));
    });
    return selectedItems;
  }
}
