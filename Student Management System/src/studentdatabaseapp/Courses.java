package studentdatabaseapp;

import java.util.Objects;

public class Courses {
	
	private String courseName;
	private double coursePrice;
	
	public Courses(String courseName, double coursePrice) {
		this.courseName = courseName;
		this.coursePrice = coursePrice;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public double getCoursePrice() {
		return coursePrice;
	}

	public void setCoursePrice(double coursePrice) {
		this.coursePrice = coursePrice;
	}

	@Override
	public int hashCode() {
		return Objects.hash(courseName, coursePrice);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Courses other = (Courses) obj;
		return Objects.equals(courseName, other.courseName)
				&& Double.doubleToLongBits(coursePrice) == Double.doubleToLongBits(other.coursePrice);
	}

	@Override
	public String toString() {
		return "Courses [studentdatabaseapp.courseName=" + courseName + ", coursePrice=" + coursePrice + "]";
	}
	
	
}
