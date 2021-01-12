package steps;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class TestBase {
	
	public void screenShot (WebDriver driver, String fileWithPath) throws Exception {
		//convert WebDriver object to TakeScreenShot
		TakesScreenshot scrshot = ((TakesScreenshot)driver);
		
		//Call getScreenShotAs method to create image file
		File Srcfile = scrshot.getScreenshotAs (OutputType.FILE);
		
		//Move image file to new destination
		File DestFile = new File (fileWithPath);
		
		//Copy file at destination
		FileUtils.copyFile(Srcfile, DestFile);
	}

}
