package studentdatabaseapp;

import java.util.GregorianCalendar;
import java.util.Objects;

public class Student {

	
	private String firstName;
	private String lastName;
	private int gradeYear;
	private GregorianCalendar birthDate;
	private Id id;
	private Courses courses;
	private Gender gender;
	
	public Student(String firstName, 
				   String lastName, 
				   int gradeYear, 
				   GregorianCalendar birthDate, 
				   Id id,
				   Courses courses, 
				   Gender gender) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gradeYear = gradeYear;
		this.birthDate = birthDate;
		this.id = id;
		this.courses = courses;
		this.gender = gender;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getGradeYear() {
		return gradeYear;
	}

	public void setGradeYear(int gradeYear) {
		this.gradeYear = gradeYear;
	}

	public Courses getCourses() {
		return courses;
	}

	public void setCourses(Courses courses) {
		this.courses = courses;
	}

	public GregorianCalendar getBirthDateClone() {
		return (GregorianCalendar) birthDate.clone();
	}

	public Id getId() {
		return id;
	}

	public Gender getGender() {
		return gender;
	}

	@Override
	public int hashCode() {
		return Objects.hash(birthDate, courses, firstName, gender, gradeYear, id, lastName);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Student other = (Student) obj;
		return Objects.equals(birthDate, other.birthDate) && Objects.equals(courses, other.courses)
				&& Objects.equals(firstName, other.firstName) && gender == other.gender && gradeYear == other.gradeYear
				&& Objects.equals(id, other.id) && Objects.equals(lastName, other.lastName);
	}

	@Override
	public String toString() {
		return "studentdatabaseapp.Student [firstName=" + firstName + ", lastName=" + lastName + ", gradeYear=" + gradeYear
				+ ", birthDate=" + birthDate + ", id=" + id + ", courses=" + courses + ", gender=" + gender + "]";
	}
		
	
	
	
}
