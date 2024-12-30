import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorComponent } from './component/doctor/doctor.component';
import { HospitalComponent } from './component/hospital/hospital.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { NurseComponent } from './component/nurse/nurse.component';
import { PatientComponent } from './component/patient/patient.component';
import { RecptionComponent } from './component/recption/recption.component';

@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    HospitalComponent,
    AppointmentComponent,
    MedicineComponent,
    NurseComponent,
    PatientComponent,
    RecptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
