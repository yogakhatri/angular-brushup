import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  Validators,
} from '@angular/forms';
import { CustomValidator } from '../validators/custom-validator';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  constructor(
    private config: ConfigService,
    private formBuilder: FormBuilder
  ) {}

  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.controls['guests'] as FormArray;
  }

  addGuestControl() {
    return this.formBuilder.group({
      guestName: new FormControl('', [Validators.required]),
      guestAge: [''],
    });
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group(
      {
        roomId: new FormControl(
          { value: 2, disabled: true },
          { validators: Validators.required }
        ),
        guestEmail: [
          '',
          {
            validators: [Validators.required, Validators.email],
            updateOn: 'blur',
          },
        ],
        checkinDate: [''],
        checkoutDate: [''],
        bookingStatus: [''],
        bookingAmount: [''],
        bookingDate: [''],
        mobileNumber: [''],
        guestName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.validateName,
            CustomValidator.validateSpacialChar('*'),
          ],
          ,
        ],
        guestCount: [''],
        guestList: [],
        address: this.formBuilder.group({
          addressLine1: [''],
          addressLine2: [''],
          city: [''],
          state: [''],
          country: [''],
          zipCode: [''],
        }),
        guests: this.formBuilder.array([this.addGuestControl()]),
        tnc: new FormControl(false, [Validators.requiredTrue]),
      },
      {
        updateOn: 'blur',
        validators: [CustomValidator.validateDate],
      }
    );

    this.bookingForm.patchValue({ guestName: 'YOgesh' });

    this.bookingForm.valueChanges.subscribe((event) => {
      console.log(event);
    });
  }

  addBooking() {
    console.log(this.bookingForm);
    this.bookingForm.reset({
      roomId: 2,
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestCount: '',
      guestList: [],
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    });
  }

  addGuest() {
    const newGuest = this.addGuestControl();
    this.guests.push(newGuest);
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  removePassport() {
    this.bookingForm.removeControl('passport');
  }

  removeGuest(index: number) {
    this.guests.removeAt(index);
  }
}
