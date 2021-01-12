package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.DashboardPage;
import page.LoginPage;
import page.NewAccountPage;
import util.BrowserFactory;

public class StepDefination extends TestBase {
	WebDriver driver = BrowserFactory.startBrowser();
	
	@Given("^User is already in Login Page$")
	public void user_is_already_in_Login_Page() throws Throwable {
		String expectedTitle = "Login - TechFios Test Application - Billing"; // To store the actual title
		String actualTitle = driver.getTitle(); // To get and store the title
		System.out.println(actualTitle); // To print
		Assert.assertEquals(actualTitle, expectedTitle, "Wrong page!");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String username, String password) throws Throwable {
		LoginPage loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUsername(username);
		loginPage.enterPassword(password);
		loginPage.clickSignIn();
	}
	
	@When("^user clicks New Account$")
	public void user_clicks_New_Account() throws Throwable {
		DashboardPage dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		dashboardPage.waitForPage();
		dashboardPage.clickOnBankandCashButton();
		dashboardPage.clickOnAddDepositButton();
		screenShot(driver,"c:\\screenshotFile\\NewAccount.jpg");
	}

	@When("^user inputs \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_inputs(String accountTitle, String description, String balance) throws Throwable {
		NewAccountPage NewAccount = PageFactory.initElements(driver, NewAccountPage.class);
		NewAccount.fillInTheNewAccountForm(accountTitle, description, balance);
	
	}

	@When("^clicks submit$")
	public void clicks_submit() throws Throwable {
		NewAccountPage NewAccount = PageFactory.initElements(driver, NewAccountPage.class);
		
	   
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.close();
		driver.quit();
	   
	}

}
