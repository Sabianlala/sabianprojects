package studentdatabaseapp;

import java.util.Objects;

public class Id {

	private int value;
	private static int nextValue = 1;
	
	public Id() {
		value = nextValue;
		nextValue++;
	}
	
	public int getValue() {
		return value;
	}

	@Override
	public String toString() {
		return "studentdatabaseapp.Id [value=" + value + "]";
	}

	@Override
	public int hashCode() {
		return Objects.hash(value);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Id other = (Id) obj;
		return value == other.value;
	}
	
	
	
	
}
