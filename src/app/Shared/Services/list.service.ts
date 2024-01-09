import { Injectable } from "@angular/core";
import { Instructor } from "../models/instuctorInfo";
import { Observable, from } from "rxjs";
import { instructorConst } from "src/assets/Constants/instructor.const";

@Injectable({providedIn:'root'})
export class InstructorListService {
    
    getList(): Observable<Instructor> {
        console.log(instructorConst)
        return from(instructorConst)
    }
}