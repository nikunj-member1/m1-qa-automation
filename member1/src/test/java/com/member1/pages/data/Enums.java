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
	
	public enum MesMarquesDetails {
		CONTACT_NUMBER("+33 1 89 72 01 41"), EMAIL("contact@mes-marques.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		MesMarquesDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}
	
	public enum PrixVipDetails {
		CONTACT_NUMBER("+33 1 89 72 01 42"), EMAIL("contact@prix-vip.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		PrixVipDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}
	
	public enum TarifFixeDetails {
		CONTACT_NUMBER("+33 1 89 72 01 43"), EMAIL("contact@tarif-fixe.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		TarifFixeDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}
	
	public enum SansFraisDetails {
		CONTACT_NUMBER("+33 1 89 72 01 44"), EMAIL("contact@sans-frais.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		SansFraisDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}
	
	public enum PrixGarantiDetails {
		CONTACT_NUMBER("+33 1 89 72 01 45"), EMAIL("contact@prix-garanti.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		PrixGarantiDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}
	
	public enum PrixCostDetails {
		CONTACT_NUMBER("+33 1 89 72 01 46"), EMAIL("contact@prix-coutant.com"),
		FULL_ADDRESS(
				"DIRECTORS BOOK Ltd.\r\n" + "Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		BOTH_PRICE("29,90€ (ou 75€ par trimestre)"), MONTH_PRICE("29,90€"), COMPANY_NAME("DIRECTORS BOOK Ltd."),
		COMPANY_ADDRESS("Flat 14 Gooch House, 13 Malthouse Road, London, United Kingdom, SW11 7AU"),
		MONTH_TRIMESTER("29,90€ TTC par mois, ou 75€ par trimestre");

		private String value;

		PrixCostDetails(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}
	}

}
