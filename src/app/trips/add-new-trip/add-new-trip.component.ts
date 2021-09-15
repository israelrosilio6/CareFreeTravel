import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-new-trip',
    templateUrl: './add-new-trip.component.html',
    styleUrls: ['./add-new-trip.component.scss']
})
export class AddNewTripComponent implements OnInit {

    isLinear = false;
    datesForm: FormGroup;
    locationForm: FormGroup;
    typeForm: FormGroup;
    budgetForm: FormGroup;
    preferencesForm: FormGroup;
    extraQuestionsForm: FormGroup;

    preferences = [
        'National parks',
        'Beaches',
        'Caves',
        'Cliffs',
        'Mountains',
        'Hills',
        'Waterfalls',
        'Islands',
        'Forests',
        'Entertainment parks',
        'Wildlife attractions',
        'Museums and art galleries',
        'Unique built attractions',
        'Historical or heritage attractions',
        'Sport attractions',
        'Spectating sport attractions',
        'Participating sport attractions',
        'Stadium tours',
        'Special events',
        'Markets',
        'Festivals and parades',
        'Exhibitions',
        'Entertainment venues'
    ];
    // tslint:disable-next-line:max-line-length
    extra = ['synagogue', 'Avoid Public Transportation', 'Accessibility', 'Kosher Food', 'Avoid Cold Whether', 'Suitable for children', 'Avoid crowd', 'Short Drive Between Attractions'];
    types = [
        'Business Travel',
        'Event Travel',
        'Backpacking Trip',
        'Solo Travel',
        'Family Vacation',
        'Siblings-Only Vacation',
        'The Ultimate All-Girls/All-Boys Travel',
        'Long-Term Slow Trip',
        'Friends-Only Travel',
        'Group Travel',
        'Luxury Travel',
        'Weekend Travel',
        'Gap Year Travel',
        'Road Trip',
        'DIY Travel',
        'Visiting Relatives or Friends',
        'Volunteer Travel',
        'No Destination Travel',
        'Working Abroad',
        'Adventure Travel',
        'Student Exchange Program',
        'Full Degree Program',
        'Romantic Travel',
        'Travel to Teach English',
        'Understanding-Your-Roots Travel',
        'Budget Travel',
        'Cruise Travel / Group Tour',
        'Private Tours / Travel Agency',
        'Package Holiday',
        'International Travel',
        'Health Travel',
        'Faith-Based Travel',
        'Gambling Travel'];

    constructor(private _formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any,
                public dialogRef: MatDialogRef<AddNewTripComponent>) {
    }

    ngOnInit() {
        const start = new Date();
        let end = new Date();
        end = new Date(end.setDate(end.getDate() + 5));
        this.datesForm = this._formBuilder.group({
            endDate: [end, Validators.required],
            startDate: [start, Validators.required]
        });
        this.locationForm = this._formBuilder.group({
            location: ['Hong Kong', Validators.required],
        });
        this.typeForm = this._formBuilder.group({
            type: ['Family Vacation', Validators.required]
        });
        this.preferencesForm = this._formBuilder.group({
            preferences: [['National parks', 'Caves', 'Markets', 'Museums and art galleries'], Validators.required]
        });
        this.extraQuestionsForm = this._formBuilder.group({
            extra: [['Suitable for children', 'Avoid crowd', 'synagogue'], Validators.required]
        });
        this.budgetForm = this._formBuilder.group({
            budget: [3500, Validators.required]
        });
    }

    submit() {
        const result = {
            ...this.datesForm.value,
            ...this.locationForm.value,
            ...this.typeForm.value,
            ...this.budgetForm.value,
            ...this.preferencesForm.value,
            ...this.extraQuestionsForm.value
        };
        this.dialogRef.close(result);
    }

}



