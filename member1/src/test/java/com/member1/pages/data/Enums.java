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

	public enum MesPrixDetails {
		CONTACT_NUMBER("+33 1 76 38 14 84"), EMAIL("contact@mes-prix.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		MesPrixDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}

}
