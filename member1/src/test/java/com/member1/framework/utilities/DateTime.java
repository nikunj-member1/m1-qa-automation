package com.member1.framework.utilities;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.SimpleTimeZone;
import java.util.TimeZone;
import java.time.Instant;


public class DateTime {

	/**
	 * To get current timestamp
	 *
	 * @return Current TimeStamp
	 */
	public static String getCurrentTimeStampString() {
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("MMddHHmmssSS");
		TimeZone timeZone = TimeZone.getDefault();
		Calendar cal = Calendar.getInstance(new SimpleTimeZone(timeZone.getOffset(date.getTime()), "GMT"));
		dateFormat.setCalendar(cal);
		return dateFormat.format(date);
	}
	
	/**
	 * To get current timestamp
	 *
	 * @return Current TimeStamp
	 */
	public static String getUnixTimeStampString() {
		long unixTimestamp = Instant.now().getEpochSecond();
		return  Long.toString (unixTimestamp);
	}
	

	/**
	 * To get today date
	 *
	 * @return Today Date
	 */
	public static String getTodayDate() {
		Date date = Calendar.getInstance().getTime();
		DateFormat formatter = new SimpleDateFormat("EEEE, MMMM d, yyyy");
		return formatter.format(date);
	}
	
	/**
	 * To get current date
	 *
	 * @return Current Date
	 */
	public static String getCurrentDateTime(String dateFormat) {
		Date date = Calendar.getInstance().getTime();
		DateFormat formatter = new SimpleDateFormat(dateFormat);
		return formatter.format(date);
	}
	
	/**
	 * To get future date
	 * @param dateFormat
	 * @return future date 
	 */
	public static String getFutureDate(String dateFormat) {
		Date date = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.add(Calendar.DATE, 5);		
		date = cal.getTime();
		DateFormat formatter = new SimpleDateFormat(dateFormat);
		return formatter.format(date);
	}
		
}
