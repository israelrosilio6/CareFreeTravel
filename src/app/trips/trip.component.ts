import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Knapsack} from '../services/knapsack';
import {Subscription} from 'rxjs/Subscription';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {TripsService} from './trips.service';
import {AddNewTripComponent} from './add-new-trip/add-new-trip.component';
import {UsersAuthService} from '../services/users.auth.service';
import {Trip} from './trip.model';

@Component({
    selector: 'app-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit, OnDestroy {

    public potentialTrip:Trip;
    public getItemSub: Subscription;
    public result: any[];
    public budgetExploit: number;
    selectedTripPreferences;
    @ViewChild(DatatableComponent) table: DatatableComponent;
    displaySearchingForRelevantTrips = false;
    displayFindTheBestTrip = false;

    constructor(private dialog: MatDialog,
                public tripsService: TripsService,
                private snack: MatSnackBar,
                public auth: UsersAuthService,
                private knapsack: Knapsack) {}

    RunAlgorithm(potentialTrip: Trip) {
        const algorithmResult = this.knapsack.runKnapsack(potentialTrip);
        this.result = algorithmResult.result;
        this.budgetExploit = algorithmResult.utilization;
    }

    ngOnInit() {
        this.getItemSub = this.tripsService.onPotentialTripChanged.subscribe(
            (data) => {
                this.potentialTrip = data;
                this.RunAlgorithm(this.potentialTrip);
            }
        );
    }

    ngOnDestroy(): void {
        if (this.getItemSub) {
            this.getItemSub.unsubscribe();
        }
    }

    openPopUp(data: any = {}, isNew?) {
        const title = 'New Trip';
        const dialogRef: MatDialogRef<any> = this.dialog.open(AddNewTripComponent, {
            width: '85%',
            disableClose: true,
            data: {title: title, payload: data.value, isNew: data.isNew}
        });
        dialogRef.afterClosed()
            .subscribe(res => {
                if (!res) {
                    // If user press cancel
                    return;
                }
                this.selectedTripPreferences = res;
                this.tripsService.QueryRemoteResources( this.selectedTripPreferences);
            });
    }
}


