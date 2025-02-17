package com.member1.tests.lp;

import java.io.IOException;
import java.security.GeneralSecurityException;

public class ExcelTest {

	public static void main(String[] args) throws IOException, GeneralSecurityException {
		// TODO Auto-generated method stub
		
		String expectedMerciContent = "MERCI !\\s*VÉRIFIEZ VOTRE BOÎTE DE RÉCEPTION POUR VOTRE MAIL DE CONFIRMATION CHERCHEZ NOTRE EMAIL \\(DE contact@boutik-prive.fr\\) QUE NOUS VENONS DE VOUS ENVOYER\\s*Voici votre mot de passe ([a-zA-Z0-9]{9})\\s*Vous ne pouvez pas attendre d'autres promotions \\? Nous vous recommandons de vous rendre directement dans notre boutique. Vous pouvez acheter tout ce que vous voulez au prix coûtant et nous vous offrons la livraison gratuite pour toutes les commandes.\\s*UNE NOUVELLE FAÇON DE FAIRE DU SHOPPING COMMENCE ICI : FAITES-EN PARTIE\\s*ALLEZ VOIR NOS PRODUITS MAINTENANT !";
		String merciContent0 = expectedMerciContent.split("passe ")[0].toString();
		String merciContent1 = expectedMerciContent.split("passe ")[1].toString();
		String passwordText = merciContent1.split("\r\n")[0].toString();
			
		System.out.println("splitregex 0 : " +merciContent0 + "passe ");
		System.out.println("splitregex 1 : " +merciContent1);
	//	System.out.println("splitregex 1 : " +);
		
		System.out.println("merciContent1 1 : " +merciContent1);
		System.out.println("passwordText 11 : " +passwordText);
		
		if(passwordText.matches("[a-zA-Z0-9]{9}")) {
			System.out.println("regex Matched");
		} else {
			System.out.println("regex Not Matches");
		}

//		List<List<Object>> values = GetSheetData.getData(Configuration.SHEET_RANGE);
//		
//		if (values == null || values.isEmpty()) { System.out.println("No data found."); }
//		else {
//			System.out.println("values are 0 : " + values.get(0));
//			System.out.println("values are 1 : " + values.get(1));
//			System.out.println("values are 2 : " + values.get(2));
//			
//			List<Object> rowTitleeList =  values.get(0);
//			List<Object> row1List =  values.get(1);
//			List<Object> row2List =  values.get(2);
//			
//			System.out.println("rowTitleeList 1 detail : " + rowTitleeList.get(0));
//			
//			List<Object> list1 = new ArrayList<Object>();
//			list1.add("Pending");
//			
//			List<List<Object>> data = new ArrayList<List<Object>>();
//			data.add(list1);
//			
//			GetSheetData.getSpreadSheetInstance();
//			GetSheetData.updateCellValue(list1, "A2", "1YW_EdW7wwKd2i-rMkH8LGo-iIRjtyN5Uv11r_L0dRDw");
//			

//			for (Object row: rowTitleeList) { 
//				System.out.println("rowTitleeList detail : " + row.toString());					
//			}

//			for (Object row: row1List) { 
//				System.out.println("row1List detail : " + row.toString());				
//			}
//			
//			for (Object row: row2List) { 
//				System.out.println("row2List detail : " + row.toString());				
//			}
////		}

	}

}
