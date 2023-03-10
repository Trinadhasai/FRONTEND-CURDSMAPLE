import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient)
   { }

   public dbUrl ="http://localhost:3000/Course";

   addCourse(c: Course):Observable<Course>
   {
      return this.http.post<Course>(this.dbUrl,c);
   }

   getAllCourse(): Observable<Array<Course>>
   {
      return this.http.get<Array<Course>>(this.dbUrl);
   }

   deleteCourse(id:number):Observable<Course>
   {

    return this.http.delete<Course>(`${this.dbUrl}/${id}`);

   }

   

}
