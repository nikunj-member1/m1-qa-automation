package com.member1.framework.utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.client.util.store.FileDataStoreFactory;
import com.google.api.services.sheets.v4.Sheets;
import com.google.api.services.sheets.v4.SheetsScopes;
import com.google.api.services.sheets.v4.model.Sheet;
import com.google.api.services.sheets.v4.model.SheetProperties;
import com.google.api.services.sheets.v4.model.Spreadsheet;
import com.google.api.services.sheets.v4.model.SpreadsheetProperties;
import com.google.api.services.sheets.v4.model.UpdateValuesResponse;
import com.google.api.services.sheets.v4.model.ValueRange;
import com.member1.framework.configurations.Configuration;

public class GetSheetData {

	private static final String APPLICATION_NAME = "qatestapp";
	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
	private static final String TOKENS_DIRECTORY_PATH = "tokens";

	/**
	 * Global instance of the scopes required by this quickstart. If modifying these
	 * scopes, delete your previously saved tokens/ folder.
	 */
//	private static final List<String> SCOPES = Collections.singletonList(SheetsScopes.SPREADSHEETS_READONLY);
	private static final List<String> SCOPES = Collections.singletonList(SheetsScopes.SPREADSHEETS);
	private static final String CREDENTIALS_FILE_PATH = Configuration.CLIENT_SECRET_JSON;
	static Sheets.Spreadsheets spreadSheets;

	/**
	 * Creates an authorized Credential object.
	 * 
	 * @param HTTP_TRANSPORT The network HTTP Transport.
	 * @return An authorized Credential object.
	 * @throws IOException If the credentials.json file cannot be found.
	 */
	private static Credential getCredentials(final NetHttpTransport HTTP_TRANSPORT) throws IOException {
		// Load client secrets.

		File initialFile = new File(CREDENTIALS_FILE_PATH);
		InputStream in = new FileInputStream(initialFile);

		if (in == null) {throw new FileNotFoundException("Resource not found: " + CREDENTIALS_FILE_PATH);}
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(HTTP_TRANSPORT, JSON_FACTORY,
				clientSecrets, SCOPES)
				.setDataStoreFactory(new FileDataStoreFactory(new java.io.File(TOKENS_DIRECTORY_PATH)))
				.setAccessType("offline").build();
		LocalServerReceiver receiver = new LocalServerReceiver.Builder().setPort(8888).build();
		return new AuthorizationCodeInstalledApp(flow, receiver).authorize("user");
	}

	/**
	 * Prints the names and majors of students in a sample spreadsheet:
	 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
	 */
	public static List<List<Object>> getData(String range) throws IOException, GeneralSecurityException {
		// Build a new authorized API client service.
		final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
		//final String spreadsheetId = "1S2g68tMuDVyFBfYDQ-ri3IebCldZLNLgXzSErAMJwzc"; // ProodutDetails
		final String spreadsheetId = "1YW_EdW7wwKd2i-rMkH8LGo-iIRjtyN5Uv11r_L0dRDw"; // ExcelTest
		Sheets service = new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
				.setApplicationName(APPLICATION_NAME).build();
		ValueRange response = service.spreadsheets().values().get(spreadsheetId, range).execute();
		List<List<Object>> values = response.getValues();
		if (values == null || values.isEmpty()) {
			System.out.println("No data found.");
			return null;
		} else {
			return values;
		}
	}

	public static void getSpreadSheetInstance() throws GeneralSecurityException, IOException {
		final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
		spreadSheets = new Sheets.Builder(GoogleNetHttpTransport.newTrustedTransport(),
				GsonFactory.getDefaultInstance(), getCredentials(HTTP_TRANSPORT)).setApplicationName(APPLICATION_NAME)
				.build().spreadsheets();
	}

	/**
	 * 
	 * @param inputData             To update data list
	 * @param range                 SheetName with Range
	 * @param existingSpreadSheetID SpreadsheetName
	 * @throws IOException
	 * @throws GeneralSecurityException 
	 */
	public static void updateCellValue(List<Object> inputData, String range)
			throws IOException, GeneralSecurityException {
		getSpreadSheetInstance();
		List<List<Object>> values = Arrays.asList(inputData);
		ValueRange body = new ValueRange().setValues(values);
		UpdateValuesResponse result = spreadSheets.values().update("1YW_EdW7wwKd2i-rMkH8LGo-iIRjtyN5Uv11r_L0dRDw", range, body)
				.setValueInputOption("RAW").execute();
		System.out.printf("Cells updated.", +result.getUpdatedCells());
	}

	public static void createSpreadSheet(String spreadSheetTitle) {
		Spreadsheet createdResponse = null;
		try {
			final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
			Sheets service = new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
					.setApplicationName(APPLICATION_NAME).build();
			SpreadsheetProperties spreadsheetProperties = new SpreadsheetProperties();
			spreadsheetProperties.setTitle(spreadSheetTitle);
			SheetProperties sheetProperties = new SheetProperties();
			sheetProperties.setTitle(spreadSheetTitle);
			Sheet sheet = new Sheet().setProperties(sheetProperties);

			Spreadsheet spreadsheet = new Spreadsheet().setProperties(spreadsheetProperties)
					.setSheets(Collections.singletonList(sheet));
			createdResponse = service.spreadsheets().create(spreadsheet).execute();
			System.out.println("Spreadsheet URL: " + createdResponse.getSpreadsheetUrl());

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	public static void createSheet(String sheetTitle) {
		Spreadsheet createdResponse = null;
		try {
			final NetHttpTransport HTTP_TRANSPORT = GoogleNetHttpTransport.newTrustedTransport();
			Sheets service = new Sheets.Builder(HTTP_TRANSPORT, JSON_FACTORY, getCredentials(HTTP_TRANSPORT))
					.setApplicationName(APPLICATION_NAME).build();
			SheetProperties sheetProperties = new SheetProperties();
			sheetProperties.setTitle(sheetTitle);

		} catch (Exception e) {
			// TODO: handle exception
		}
	}

}
