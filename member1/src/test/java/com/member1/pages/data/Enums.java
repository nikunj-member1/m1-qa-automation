package com.member1.pages.data;

public class Enums {

	public enum Layout {
		HEADINGS("Headings"), IMAGE("Image"), PAGE_BREAK("Page Break"), TRANSITION_PAGE("Transition Page");

		private String value;

		Layout(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}	

}
