package studentdatabaseapp;

import java.util.GregorianCalendar;

public class StudentDatabaseApp {

	public static void main(String[] args) {
		GregorianCalendar birthdate;
		/* Ask how many users we want to add
		Create a number of new students*/
		
	
		
		Student s1 = new Student("sabian", 
								 "lala", 
								 2, 
								 new GregorianCalendar(2002,16,4), 
								 new Id(), 
								 new Courses("Java", 300), 
								 Gender.MALE);
		
		
		
		System.out.println(s1.getFirstName());
		System.out.println(s1.getLastName());
		System.out.println(s1.getGradeYear());
		System.out.println(s1.getId().getValue());
		System.out.println(s1.getCourses().getCourseName());
		System.out.println(s1.getCourses().getCoursePrice());
		System.out.println(s1.getGender().getGender());
		System.out.println(s1.getGender().getSymbol());
		System.out.println(GregorianCalendar.DAY_OF_MONTH);
		System.out.println(s1.getBirthDateClone().MONTH);
		System.out.println(s1.getBirthDateClone().YEAR);
	}

}
