import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api/api.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ApiService]
})
export class ApiModule { }
