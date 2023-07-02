package studentdatabaseapp;

public enum Gender {
	
	MALE("male",'m'),
	FEMALE("female",'f');
	
	private String gender;
	private char symbol;
	
	private Gender(String gender,char symbol) {
		this.gender = gender;
		this.symbol = symbol;
	}
	
	public String getGender() {
		return gender;
	}
	
	public char getSymbol() {
		return symbol;
	}
	
	
}
